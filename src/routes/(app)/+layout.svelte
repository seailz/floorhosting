<script lang="ts">
    import {onMount} from "svelte";
    import {AppState, SlzApp, Storied} from "$lib/index.svelte";
    import LoadingPage from "../LoadingPage.svelte";
    import { Toaster } from "$lib/components/ui/sonner/index.js";

    let { children } = $props();

    let app:SlzApp|null = $state(null);

    onMount(() => {
        app = Storied.getInstance();
        app.mounted = true;
    })
</script>

<Toaster />

{#if app && (app.state === AppState.READY_FOR_REQUESTS || app.state === AppState.AUTHED)}
    {@render children?.()}
{:else}
    <LoadingPage />
{/if}