<script>
import {Button} from "$lib/components/ui/button/index.js";
</script>

<section class="hero px-[250px] flex flex-col gap-4 max-[1415px]:px-16">
    <div class=" w-full h-[300px] flex flex-row items-center gap-16 justify-between max-[1531px]:flex-col max-[1531px]:gap-2">
        <div>
            <h2 class="scroll-m-20 pb-2 text-3xl font-semibold tracking-tight transition-colors first:mt-0 max-[1531px]:text-center">
                Lorem ipsum dolor <span class="text-primary">sit amet</span>.
            </h2>
            <p class="scroll-m-20 text-lg font-medium text-muted-foreground max-[1531px]:text-center">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent gravida  <span class="text-primary">mattis scelerisque</span>.
            </p>
        </div>

        <img src="https://picsum.photos/600/200" alt="Image" class="rounded-lg mt-4 " />
    </div>
</section>

<style>
    img {
        object-fit: cover;
    }
</style>