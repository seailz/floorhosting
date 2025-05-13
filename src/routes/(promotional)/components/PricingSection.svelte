<script>
    import {Button} from "$lib/components/ui/button/index.js";

    let { displayTitle } = $props();
</script>

<section class="hero px-[250px] flex flex-col gap-4 max-[1415px]:px-16">
    <div class=" w-full flex flex-row items-center justify-center gap-16">
        {#if displayTitle}
            <div>
                <h2 class="scroll-m-20 pb-2 text-3xl font-semibold tracking-tight transition-colors first:mt-0">
                    Pricing
                </h2>
            </div>
        {/if}
    </div>

    <div class="flex flex-row items-start justify-center gap-4 max-[1069px]:flex-col max-[1069px]:items-center">
        <div class="flex flex-col  gap-4 justify-between blur-bg rounded-lg p-8 w-[400px] border bg-background h-full max-[430px]:w-[300px]">
            <div class="flex flex-col gap-6">
                <div>
                    <h1 class="text-xl font-semibold text-foreground">
                        Free
                    </h1>
                    <p class="font-medium text-muted-foreground">
                        Free forever.
                    </p>
                </div>

                <div class="flex flex-col gap-2">
                <span class="feature flex flex-row gap-2 items-center">
                    <p class="text-sm font-medium text-muted-foreground">
                        Lorem ipsum dolor sit amet.
                    </p>
                </span>
                    <span class="feature flex flex-row gap-2 items-center">
                    <p class="text-sm font-medium text-muted-foreground">
                        Praesent gravida mattis scelerisque.
                    </p>
                </span>
                    <span class="feature flex flex-row gap-2 items-center">
                    <p class="text-sm font-medium text-muted-foreground">
                        Lorem ipsum dolor sit amet.
                    </p>
                </span>
                </div>
            </div>

            <Button
                    class="w-full mt-4"
                    size="sm"
            >
                Start Now
            </Button>


        </div>
        <div class="flex flex-col  gap-4 justify-between blur-bg rounded-lg p-8 w-[400px] border bg-background max-[430px]:w-[300px]">
            <div class="flex flex-col gap-6">
                <div>
                    <h1 class="text-xl font-semibold text-foreground">
                        Premium Server
                    </h1>
                    <p class="font-medium text-muted-foreground">
                        $10/month
                    </p>
                </div>

                <div class="flex flex-col gap-2 items-start justify-start">
                <span class="feature flex flex-row gap-2 items-start">
                    <p class="text-sm font-medium text-muted-foreground">
                        Lorem ipsum dolor sit amet.
                    </p>
                </span>
                    <span class="feature flex flex-row gap-2 items-center">
                    <p class="text-sm font-medium text-muted-foreground">
                        Praesent gravida mattis scelerisque.
                    </p>
                </span>
                    <span class="feature flex flex-row gap-2 items-center">
                    <p class="text-sm font-medium text-muted-foreground">
                        Lorem ipsum dolor sit amet.
                    </p>
                </span>

                    <span class="feature flex flex-row gap-2 items-center">
                    <p class="text-sm font-medium text-muted-foreground">
                        Praesent gravida mattis scelerisque.
                    </p>
                </span>

                    <span class="feature flex flex-row gap-2 items-center">
                    <p class="text-sm font-medium text-muted-foreground">
                        Lorem ipsum dolor sit amet.
                    </p>
                </span>

                    <span class="feature flex flex-row gap-2 items-center">
                    <p class="text-sm font-medium text-muted-foreground">
                        Lorem ipsum dolor sit amet.
                    </p>
                </span>

                    <span class="feature flex flex-row gap-2 items-center">
                    <p class="text-sm font-medium text-muted-foreground">
                        Praesent gravida mattis scelerisque.
                    </p>
                </span>
                </div>
            </div>

            <Button
                    class="w-full mt-4"
                    size="sm"
            >
                Order Now
            </Button>


        </div>
        <div class="flex flex-col  gap-4 justify-between blur-bg rounded-lg p-8 w-[400px] border bg-background max-[430px]:w-[300px]">
            <div class="flex flex-col gap-6">
                <div>
                    <h1 class="text-xl font-semibold text-foreground">
                        Unlimited Server
                    </h1>
                    <p class="font-medium text-muted-foreground">
                        $20/month
                    </p>
                </div>

                <div class="flex flex-col gap-2">
                <span class="feature flex flex-row gap-2 items-center">
                    <p class="text-sm font-medium text-muted-foreground">
                        Lorem ipsum dolor sit amet.
                    </p>
                </span>
                    <span class="feature flex flex-row gap-2 items-center">
                    <p class="text-sm font-medium text-muted-foreground">
                        Praesent gravida mattis scelerisque.
                    </p>
                </span>
                    <span class="feature flex flex-row gap-2 items-center">
                    <p class="text-sm font-medium text-muted-foreground">
                        Lorem ipsum dolor sit amet.
                    </p>
                </span>
                    <span class="feature flex flex-row gap-2 items-center">
                    <p class="text-sm font-medium text-muted-foreground">
                        Praesent gravida mattis scelerisque.
                    </p>
                </span>
                    <span class="feature flex flex-row gap-2 items-center">
                    <p class="text-sm font-medium text-muted-foreground">
                        Lorem ipsum dolor sit amet.
                    </p>
                </span>
                    <span class="feature flex flex-row gap-2 items-center">
                    <p class="text-sm font-medium text-muted-foreground">
                        Praesent gravida mattis scelerisque.
                    </p>
                </span>
                    <span class="feature flex flex-row gap-2 items-center">
                    <p class="text-sm font-medium text-muted-foreground">
                        Lorem ipsum dolor sit amet.
                    </p>
                </span>
                    <span class="feature flex flex-row gap-2 items-center">
                    <p class="text-sm font-medium text-muted-foreground">
                        Praesent gravida mattis scelerisque.
                    </p>
                </span>
                </div>
            </div>

            <Button
                    class="w-full mt-4"
                    size="sm"
            >
                Order Now
            </Button>


        </div>
    </div>
</section>

<style>
    img {
        object-fit: cover;
    }
</style>