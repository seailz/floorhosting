<script>
import {Button} from "$lib/components/ui/button/index.js";
import PopUpContainer from "./PopUpContainer.svelte";
</script>

<section class="hero h-[700px] mt-[96px] px-[250px] flex items-center justify-center gap-50 max-[1600px]:px-16 max-[550px]:px-4">
    <div class="flex flex-col gap-6 max-w-[600px]">
        <PopUpContainer>
            <h2 class="max-[1315px]:text-center">
                Hosting that will make you say <span class="gradient">wow.</span>
            </h2>
        </PopUpContainer>
        <PopUpContainer delay={1}>
            <p class="text-muted-foreground max-[1315px]:text-center">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent gravida mattis scelerisque.
            </p>
        </PopUpContainer>
        <div class="flex flex-row gap-2 max-[1315px]:justify-center">
            <PopUpContainer delay={2}>
                <Button>
                    Order Now
                </Button>
            </PopUpContainer>

            <PopUpContainer delay={3}>
                <Button variant="outline" href="/about">
                    Learn More
                </Button>
            </PopUpContainer>
        </div>
    </div>

    <PopUpContainer delay={2}>
        <img src="/server.svg" alt="Server" class="w-[600px] h-[600px] max-[1315px]:hidden" />
    </PopUpContainer>
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