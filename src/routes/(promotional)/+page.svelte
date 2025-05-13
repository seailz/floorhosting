<script>
    import HeaderComponent from "./components/HeaderComponent.svelte";
    import HeroComponent from "./components/HeroComponent.svelte";
    import FeaturesSection from "./components/FeaturesSection.svelte";
    import SpecificFeature from "./components/SpecificFeature.svelte";
    import ReviewsSection from "./components/ReviewsSection.svelte";
    import PopUpContainer from "./components/PopUpContainer.svelte";
    import PricingSection from "./components/PricingSection.svelte";
    import FinalSection from "./components/FinalSection.svelte";
</script>


<div class="flex flex-col gap-64">
    <HeroComponent />
    <FeaturesSection />
    <div class="flex flex-col gap-16">
        <PopUpContainer>
            <SpecificFeature />
        </PopUpContainer>
        <PopUpContainer delay={1}>
            <SpecificFeature />
        </PopUpContainer>
    </div>
    <div class="flex flex-col gap-16">
        <PopUpContainer delay={2}>
            <ReviewsSection />
        </PopUpContainer>
        <PopUpContainer delay={3}>
            <ReviewsSection />
        </PopUpContainer>
    </div>

    <PricingSection displayTitle />
    <FinalSection />
</div>