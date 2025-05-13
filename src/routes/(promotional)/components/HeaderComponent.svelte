<script lang="ts">
    import { Button } from "$lib/components/ui/button/index.js";
    import {navigating} from "$app/state";
    import {onMount} from "svelte";

    let scrolled:boolean = $state(false);
    let pagePath:string = $state("/");

    $effect(() => {
        window.addEventListener('scroll', () => {
            scrolled = window.scrollY > 0;
        });
    });

    $effect(() => {
        if (navigating.to) {
            pagePath = navigating.to.url.pathname
        }
    });

    onMount(() => {
        pagePath = window.location.pathname;
    })
</script>

<section class="header max-[700px]:px-4 px-12 bg-background">
    <a href="/">
        <div class="flex flex-row gap-4 items-center">
            <img src="/logo.png" alt="Floor Hosting Logo" />
            <p class="text-lg max-[550px]:hidden">Floor Hosting</p>
        </div>
    </a>

    <div class="flex flex-row gap-8 items-center max-[440px]:gap-4">
        <div class="flex flex-row gap-2 items-center max-[440px]:gap-1">
            <a href="/plans" class="text-md font-medium text-gray-300 hover:text-gray-500">
                Plans
            </a>
            <a href="/faq" class="ml-4 text-md font-medium text-gray-300 hover:text-gray-500">
                FAQ
            </a>
            <a href="/about" class="ml-4 text-md font-medium text-gray-300 hover:text-gray-500">
                About Us
            </a>
        </div>

        <Button>
            Order Now
        </Button>
    </div>
</section>

<style>
    .header {
        width: 100%;
        height: 96px;
        border-bottom: solid 1px hsl(var(--border));
        display: flex;
        justify-content: space-between;
        align-items: center;
        position: fixed;
        top: 0;
        left: 0;
        z-index: 10;
    }
</style>