import {AppState, log, Storied} from "$lib/index.svelte";
import {goto} from "$app/navigation";

const LOGIN_PAGE_ROUTE = "/auth"
const APP_PAGE_ROUTE = "/app"

export function requireAuth(lumina:Storied, rdr:string|undefined):void {
    lumina.firebaseUser.subscribe((val) => {
        setTimeout(() => {
            // if (candorHub.stateStatic !== AppState.READY_FOR_REQUESTS) {
            //     console.log("state not ready for requests, not redirecting")
            //     return;
            // }


            if (!val) {
                log("AuthUtils", "User not logged in, redirecting to login page")
                goto(LOGIN_PAGE_ROUTE + (rdr ? `?rdr=${rdr}` : ""))
            }
        }, 15);
    })
}

export function awaitAuth(lumina:Storied):Promise<void> {
    return new Promise((resolve) => {
        lumina.firebaseUser.subscribe((val) => {
            if (val) resolve()
        })
    })
}

export function requireNoAuth(lumina:Storied, rdr:string|null):void {
    lumina.firebaseUser.subscribe((val) => {
        // We cannot allow non-internal routes for the redirect. So if there's a suspicious redirect, we'll just ignore it.
        if (rdr && !rdr.startsWith("/")) rdr = null

        if (val) {
            if (rdr) {
                goto(rdr);
            } else {
                goto(APP_PAGE_ROUTE);
            }
        }
    })

}
