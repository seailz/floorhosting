<script lang="ts">
    import {onMount} from "svelte";

    let div:HTMLDivElement;
    let visible:boolean = false;
    let reducedMotion:boolean = false;
    export let delay:number = 0;
    export let width100:boolean = false;

    // When the component becomes visible (scroll), we add the class 'visible' to the div

    onMount(() => {
        // Check if the div is in the viewport
        // const observer = new IntersectionObserver((entries) => {
        //     entries.forEach(entry => {
        //         if (entry.intersectionRatio >= 0.5) {
        //             setTimeout(() => {
        //                 setTimeout(() => {
        //                     requestAnimationFrame(() => {
        //                         visible = true;
        //                     });
        //                 }, 100 * delay)
        //             });
        //             observer.disconnect();
        //         }
        //     });
        // }, { threshold: [0.5] });
        //
        // observer.observe(div);

        // For accessibility, check media query on reduced motion
        const mediaQuery = window.matchMedia('(prefers-reduced-motion: reduce)');
        if (mediaQuery.matches) {
            reducedMotion = true;
            visible = true;
            return;
        }

        setTimeout(() => {
            requestAnimationFrame(() => {
                visible = true;
            });
        }, 100 * delay);
    })

</script>

<div bind:this={div} class:load={!reducedMotion} class:visible={visible} class:width100={width100}>
    <slot />
</div>

<style>
    .load {
        opacity: 0;
        transition: all 2s cubic-bezier(0.05, 0.7, 0.1, 1.0);
        transform: translateY(10px);
    }

    .visible {
        opacity: 1;
        transform: translateY(0);
    }

    .width100 {
        width: 100%;
    }
</style>