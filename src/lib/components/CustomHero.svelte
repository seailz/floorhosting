<script>
import {Button} from "$lib/components/ui/button/index.ts";
import PopUpContainer from "../../routes/(promotional)/components/PopUpContainer.svelte";
import PricingSection from "../../routes/(promotional)/components/PricingSection.svelte";

let {text, wow} = $props();
</script>

<section class="hero h-[500px] mt-[96px] px-[250px] flex items-center gap-50 max-[1600px]:px-16 max-[550px]:px-4">
    <div class="flex flex-col gap-6 max-w-[600px]">
        <PopUpContainer>
            <h2 class="max-[1315px]:text-center">
                {text} <span class="gradient">{wow}</span>
            </h2>
        </PopUpContainer>
    </div>
</section>

<style>
    p {
        font-size: 24px;
        font-weight: 500;
        line-height: 32px;
        letter-spacing: -0.5px;
    }
    .gradient {
        color: hsL(var(--primary));
        text-decoration: underline;
        text-decoration-color: hsL(var(--primary));
        text-decoration-thickness: 10px;
        text-underline-offset: 20px;
    }

    h2 {
        font-size: 64px;
        font-weight: 700;
        line-height: 72px;
        letter-spacing: -1.2px;
        max-width: 600px;
    }

    .hero {
        background: linear-gradient(0deg, hsl(var(--background)), #910000);
        background-size: 100% 80%;
        background-repeat: no-repeat;
    }

    @media (max-width: 720px) {
        h2 {
            font-size: 48px;
            line-height: 56px;
        }

        p {
            font-size: 20px;
            line-height: 28px;
        }
    }
</style>