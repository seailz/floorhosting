<script lang="ts">
    import HeaderComponent from "./components/HeaderComponent.svelte";

    let { children } = $props();
</script>

<HeaderComponent />
{@render children()}

<div class="footer flex flex-col gap-4 items-center justify-center mt-32 pb-4">
    <div class="flex flex-row gap-4 items-center">
        <p class="text-muted-foreground text-sm text-center">
            Fictional hosting website. Designed by <a class="text-primary" href="https://lab.slz.lol" target="_blank">lab.slz.lol</a> for Rollerite.
        </p>
    </div>

</div>