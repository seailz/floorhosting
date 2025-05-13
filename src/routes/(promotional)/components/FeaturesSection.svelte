<script>
import {Button} from "$lib/components/ui/button/index.js";
import {onMount} from "svelte";


let pageWidth = $state(0);

onMount(() => {
    pageWidth = window.innerWidth;

    window.addEventListener('resize', () => {
        pageWidth = window.innerWidth;
    });
});
</script>

<section class="hero px-[250px] flex flex-col gap-4 max-[1415px]:px-16 ">
    <div class="bg-secondary w-full h-[310px] rounded-lg p-16 flex flex-row  justify-between overflow-hidden max-[1060px]:flex-col max-[1060px]:p-0">
        <div>
            <div class="max-[1060px]:p-8 max-[1060px]:pb-4">
                <h2 class="scroll-m-20 pb-2 text-3xl font-semibold tracking-tight transition-colors first:mt-0 max-[569px]:text-2xl">
                    Lorem ipsum dolor sit amet.
                </h2>
                <p class="scroll-m-20 text-lg font-medium text-muted-foreground max-w-[75%] max-[696px]:max-w-full max-[569px]:text-md">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent gravida mattis scelerisque.
                </p>
            </div>

            {#if pageWidth > 1060}
                <Button class="mt-8">
                    Order Now
                </Button>
            {:else}
                <img src="https://picsum.photos/800/400" alt="Image" class="rounded-lg mt-4 w-full " />
            {/if}
        </div>

        {#if pageWidth < 1060}
            <img src="https://picsum.photos/400" alt="Image" class="rounded-lg mt-4 " />
        {/if}
    </div>
    <div class="flex flex-row gap-4 max-[880px]:flex-col">
        <div class="bg-secondary w-full h-[300px] rounded-lg flex flex-col overflow-hidden">
            <div class="p-8 pb-4">
                <h2 class="scroll-m-20 pb-2 text-2xl font-semibold tracking-tight transition-colors first:mt-0">
                    Lorem ipsum dolor sit amet.
                </h2>
                <p class="scroll-m-20 text-md font-medium text-muted-foreground">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent gravida mattis scelerisque.
                </p>
            </div>

            <img src="https://picsum.photos/800/400" alt="Image" class="rounded-lg mt-4 " />
        </div>
        <div class="bg-secondary w-full h-[300px] rounded-lg flex flex-col overflow-hidden">
            <div class="p-8 pb-4">
                <h2 class="scroll-m-20 pb-2 text-2xl font-semibold tracking-tight transition-colors first:mt-0">
                    Lorem ipsum dolor sit amet.
                </h2>
                <p class="scroll-m-20 text-md font-medium text-muted-foreground">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent gravida mattis scelerisque.
                </p>
            </div>

            <img src="https://picsum.photos/900/400" alt="Image" class="rounded-lg mt-4 " />
        </div>
    </div>
</section>

<style>
    img {
        object-fit: cover;
    }
</style>