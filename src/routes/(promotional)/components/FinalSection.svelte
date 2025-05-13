<script>
import {Button} from "$lib/components/ui/button/index.js";
</script>

<section class="hero px-[250px] flex flex-col gap-4 max-[1415px]:px-16">
    <div class=" w-full flex items-center justify-between flex-col gap-8">
        <div>
            <h2 class="scroll-m-20 pb-2 text-3xl font-semibold tracking-tight transition-colors first:mt-0 text-center">
                What are you waiting for? Host your server better.
            </h2>
            <p class="scroll-m-20 text-lg font-medium text-muted-foreground text-center">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent gravida  <span class="text-primary">mattis scelerisque</span>.
            </p>
        </div>

        <Button size="lg">
            Order Now
        </Button>

    </div>
</section>

<style>
    img {
        object-fit: cover;
    }
</style>