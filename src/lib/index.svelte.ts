// place files you want to import through the `$lib` alias in this folder.
import {initializeApp} from "firebase/app";
import {
    onAuthStateChanged,
    getAuth,
} from "firebase/auth";
import type {FirebaseApp} from "@firebase/app";
import {type Writable, writable} from "svelte/store";
import type {Auth, User} from "@firebase/auth";
import {getStripePayments, getCurrentUserSubscriptions, type Session, createCheckoutSession} from "$lib/stripe"
import {doc, getFirestore, onSnapshot, setDoc, updateDoc, getDoc, connectFirestoreEmulator} from "firebase/firestore";


// place files you want to import through the `$lib` alias in this folder.
export class SlzApp {

    private static PRO_PRICE_ID:string|null = null;
    static APP_NAME:string = "Nuvio";

    private static instance:SlzApp|null = null;
    app:FirebaseApp;
    auth:Auth;
    state:AppState = $state(AppState.LOADING);
    firestore:any;
    firebaseUser:Writable<User|null> = writable(null);

    subscriptionLevel:SubscriptionLevel = $state(SubscriptionLevel.NONE);
    payments:any;

    mounted:boolean = $state(false);
    loadedPayments:boolean = $state(false);

    constructor() {
        SlzApp.instance = this;

        log(SlzApp.APP_NAME, "Starting " + SlzApp.APP_NAME + "...");

        // TODO: TEMPLATE: Enter your Firebase config here
        const firebaseConfig = {}

        this.app = initializeApp(firebaseConfig);
        // this.payments = getStripePayments(this.app, {
        //     productsCollection: "stripe_products",
        //     customersCollection: "stripe_customers",
        // });

        this.auth = getAuth(this.app);

        this.state = AppState.READY_FOR_REQUESTS;
        this.firestore = getFirestore(this.app);

        // connectFirestoreEmulator(this.firestore, "localhost", 8083);


        onAuthStateChanged(this.auth, async (user) => {
            this.firebaseUser.set(user);
            this.state = user ? AppState.AUTHED : AppState.READY_FOR_REQUESTS;

            console.log(user?.getIdTokenResult().then((tkn) => {
            }))

            if (user) {
                log("FirebaseAuth", "User is authenticated");

                // Loads the user's subscriptions
                // getCurrentUserSubscriptions(this.payments, {
                //     status: [
                //         "active"
                //     ]
                // }).then((subscriptions) => {
                //     if (subscriptions.length > 0) {
                //         // Set hteir subscription to the valid id
                //         let highestSubscription: SubscriptionLevel = 0;
                //
                //         for (let i = 0; i < subscriptions.length; i++) {
                //             const subscription = subscriptions[i];
                //             if (highestSubscription < SubscriptionLevel.fromStripeId(subscription.product)) {
                //                 highestSubscription = SubscriptionLevel.fromStripeId(subscription.product);
                //             }
                //         }
                //
                //         this.subscriptionLevel = highestSubscription;
                //         this.loadedPayments = true;
                //     } else {
                //         this.subscriptionLevel = (SubscriptionLevel.NONE);
                //         this.loadedPayments = true;
                //     }
                //
                //     if (this.subscriptionLevel != SubscriptionLevel.NONE) {
                //         if (!window.localStorage.getItem("storied__refreshed_token_pro")) {
                //             window.localStorage.setItem("storied__refreshed_token_pro", "true");
                //             user.getIdToken(true).then((token) => {
                //                 log("FirebaseAuth", "Got token: " + token, false);
                //             }).catch((error) => {
                //                 log("FirebaseAuth", "Error getting token: " + error.message, false);
                //             });
                //         }
                //     } else {
                //         if (window.localStorage.getItem("storied__refreshed_token_pro")) {
                //             window.localStorage.removeItem("storied__refreshed_token_pro");
                //         }
                //     }
                //
                //     log("FirebaseAuth", "Got subscriptions: " + subscriptions.length, false);
                // }).catch((error) => {
                //     log("FirebaseAuth", "Error getting subscriptions: " + error.message + ", assuming none", false);
                // });
            }
        });
    }


    static getInstance():SlzApp {
        return this.instance == null ? new SlzApp() : this.instance;
    }

    // createProCheckoutSession(earlyBird:boolean):Promise<Session> {
    //     let settings = {
    //         price:earlyBird ? SlzApp.PRO_PRICE_ID,
    //         success_url: window.location.origin,
    //         cancel_url: window.location.origin,
    //         allow_promotion_codes: true,
    //     };
    //
    //     if (earlyBird) settings.mode = "payment";
    //
    //     return createCheckoutSession(this.payments, settings);
    // }

    async awaitReadyForRequestsOrAuthed() {
        return new Promise((resolve) => {
            // Start loop
            const interval = setInterval(() => {
                if (this.state === AppState.READY_FOR_REQUESTS || this.state === AppState.AUTHED) {
                    clearInterval(interval);
                    resolve(this.state);
                }
            }, 100);
        });
    }



}

export enum AppState {
    LOADING,
    READY_FOR_REQUESTS,
    AUTHED
}

export enum SubscriptionLevel {
    // TODO: TEMPLATE: Add your subscription levels here
    NONE,
    PRO
}

export namespace SubscriptionLevel {
    export function getStripeId(level:SubscriptionLevel) {
        switch (level) {
            case SubscriptionLevel.NONE:
                return null;
                // TODO: TEMPLATE: Add your subscription levels here
            case SubscriptionLevel.PRO:
                return "prod_S4lk8Vmw5JTrV4";
        }
    }

    export function fromStripeId(id:string) {
        switch (id) {
            // TODO: TEMPLATE: Add your subscription levels here
            case "prod_S4lk8Vmw5JTrV4":
                return SubscriptionLevel.PRO;
            default:
                return SubscriptionLevel.NONE;
        }
    }
}

/**
 * Logs a slightly fancier message to the console. This is useful for debugging.
 * @param owner The responsible party for the message. For example, this might be "Websocket" or "API"
 * @param message The message to log
 * @param debug If enabled, messages will only be logged if developer mode is enabled.
 */
export function log(owner:string, message:any, debug:boolean = false) {
    console.log(`%c[${SlzApp.APP_NAME} - ${owner}${debug ? " - DEBUG" : ""}] %c${message}`, "color: #A1D39AFF", "color: #fff");
}

export let authErrorMessages = {
    "auth/admin-restricted-operation": "This operation is restricted to administrators.",
    "auth/argument-error": "Invalid arguments provided.",
    "auth/app-not-authorized": "This app is not authorized to use Firebase. Please contact support.",
    "auth/app-not-installed": "This app is not installed on your device.",
    "auth/captcha-check-failed": "Google reCAPTCHA check failed.",
    "auth/code-expired": "The provided code has expired.",
    "auth/cordova-not-ready": "Cordova is not ready.",
    "auth/cors-unsupported": "CORS is not supported by your browser. Please use a supported browser.",
    "auth/credential-already-in-use": "This credential is already associated with another account.",
    "auth/custom-token-mismatch": "The custom token and API key do not match. Please contact support.",
    "auth/requires-recent-login": "Please login again, as your last login was too long ago.",
    "auth/dependent-sdk-initialized-before-auth": "Please initialize the Firebase Auth SDK before other dependent SDKs. Please contact support.",
    "auth/dynamic-link-not-activated": "Dynamic links are not activated. Please contact support.",
    "auth/email-change-needs-verification": "Please verify your new email address.",
    "auth/email-already-in-use": "The email address is already in use.",
    "auth/emulator-config-failed": "Emulator configuration failed.",
    "auth/expired-action-code": "The action code has expired.",
    "auth/cancelled-popup-request": "The popup request has been cancelled.",
    "auth/internal-error": "An internal error has occurred. Please contact support and try again later.",
    "auth/invalid-api-key": "The provided API key is invalid.",
    "auth/invalid-app-credential": "The app credential is invalid.",
    "auth/invalid-app-id": "The app ID is invalid.  Please contact support.",
    "auth/invalid-user-token": "Invalid user token.",
    "auth/invalid-auth-event": "Invalid authentication event.",
    "auth/invalid-cert-hash": "Invalid certificate hash.",
    "auth/invalid-verification-code": "The provided verification code is invalid.",
    "auth/invalid-continue-uri": "The continue URL is invalid.",
    "auth/invalid-cordova-configuration": "Invalid Cordova configuration.",
    "auth/invalid-custom-token": "The custom token is invalid.",
    "auth/invalid-dynamic-link-domain": "The dynamic link domain is invalid.",
    "auth/invalid-email": "Invalid email address. Please check your email and try again.",
    "auth/invalid-emulator-scheme": "Invalid emulator scheme.  Please contact support.",
    "auth/invalid-credential": "Invalid credentials. Please check your email and password and try again.",
    "auth/invalid-message-payload": "Invalid message payload. Please contact support.",
    "auth/invalid-multi-factor-session": "Invalid multi-factor authentication session. Please contact support.",
    "auth/invalid-oauth-client-id": "Invalid OAuth client ID. Please contact support.",
    "auth/invalid-oauth-provider": "Invalid OAuth provider. Please contact support.",
    "auth/invalid-action-code": "The reset password action code is invalid.",
    "auth/unauthorized-domain": "Unauthorized domain.  Please contact support.",
    "auth/wrong-password": "Incorrect password. Please check your password and try again.",
    "auth/invalid-persistence-type": "Invalid persistence type.",
    "auth/invalid-phone-number": "Invalid phone number.",
    "auth/invalid-provider-id": "Invalid provider ID. Please contact support.",
    "auth/invalid-recipient-email": "Invalid recipient email.",
    "auth/invalid-sender": "Invalid sender.",
    "auth/invalid-verification-id": "Invalid verification ID. Please contact support.",
    "auth/invalid-tenant-id": "Invalid tenant ID. Please contact support.",
    "auth/multi-factor-info-not-found": "Multi-factor authentication information not found.",
    "auth/multi-factor-auth-required": "Multi-factor authentication is required.",
    "auth/missing-android-pkg-name": "Missing Android package name.",
    "auth/missing-app-credential": "Missing app credential.",
    "auth/auth-domain-config-required": "Missing authentication domain configuration.",
    "auth/missing-verification-code": "Missing verification code.",
    "auth/missing-continue-uri": "Missing continue URL.",
    "auth/missing-iframe-start": "Missing iframe start.",
    "auth/missing-ios-bundle-id": "Missing iOS bundle ID.",
    "auth/missing-or-invalid-nonce": "Missing or invalid nonce.",
    "auth/missing-multi-factor-info": "Missing multi-factor authentication information.",
    "auth/missing-multi-factor-session": "Missing multi-factor authentication session.",
    "auth/missing-phone-number": "Missing phone number.",
    "auth/missing-verification-id": "Missing verification ID.",
    "auth/app-deleted": "The authentication module has been deleted.  Please contact support.",
    "auth/account-exists-with-different-credential": "An account with this email already exists with different credentials.",
    "auth/network-request-failed": "A network request has failed. Please check your connection and try again.",
    "auth/null-user": "No user is currently signed in.",
    "auth/no-auth-event": "No authentication event. Please contact support.",
    "auth/no-such-provider": "No such Identity Provider.  Please contact support.",
    "auth/operation-not-allowed": "This operation is not allowed.",
    "auth/operation-not-supported-in-this-environment": "This operation is not supported in your current environment.",
    "auth/popup-blocked": "Popup blocked by the browser. Please enable popups.",
    "auth/popup-closed-by-user": "Popup closed by user.",
    "auth/provider-already-linked": "This provider is already linked to your account.",
    "auth/quota-exceeded": "Quota exceeded. Please contact support.",
    "auth/redirect-cancelled-by-user": "Redirect cancelled by user.",
    "auth/redirect-operation-pending": "Redirect operation is pending.",
    "auth/rejected-credential": "Rejected credential.",
    "auth/second-factor-already-in-use": "Second factor authentication method already in use.",
    "auth/maximum-second-factor-count-exceeded": "Maximum number of second factor methods exceeded.",
    "auth/tenant-id-mismatch": "Tenant ID mismatch. Please contact support.",
    "auth/timeout": "A timeout has occurred.",
    "auth/user-token-expired": "User token has expired. Please sign in again.",
    "auth/too-many-requests": "Too many attempts. Please try again later.",
    "auth/unauthorized-continue-uri": "Unauthorized continue URL. Please contact support.",
    "auth/unsupported-first-factor": "Unsupported first factor authentication method. Please contact support.",
    "auth/unsupported-persistence-type": "Unsupported persistence type. Please contact support.",
    "auth/unsupported-tenant-operation": "Unsupported tenant operation. Please contact support.",
    "auth/unverified-email": "Unverified email address.",
    "auth/user-cancelled": "User cancelled authentication.",
    "auth/user-not-found": "User not found.",
    "auth/user-disabled": "User account is disabled. If you believe this is an error, please contact support.",
    "auth/user-mismatch": "User mismatch.",
    "auth/user-signed-out": "User has signed out.",
    "auth/weak-password": "The password is weak.",
    "auth/web-storage-unsupported": "Web storage is unsupported by your browser. Please use a supported browser.",
    "auth/already-initialized": "Firebase Auth has already been initialized. Please contact support.",
    "auth/recaptcha-not-enabled": "Google reCAPTCHA is not enabled. Please contact support.",
    "auth/missing-recaptcha-token": "Missing Google reCAPTCHA token. Please contact support.",
    "auth/invalid-recaptcha-token": "Invalid Google reCAPTCHA token. Please contact support.",
    "auth/invalid-recaptcha-action": "Invalid Google reCAPTCHA action. Please contact support.",
    "auth/missing-client-type": "Missing client type. Please contact support.",
    "auth/missing-recaptcha-version": "Missing Google reCAPTCHA version. Please contact support.",
    "auth/invalid-recaptcha-version": "Invalid Google reCAPTCHA version. Please contact support.",
    "auth/invalid-req-type": "Invalid request type. Please contact support."
}