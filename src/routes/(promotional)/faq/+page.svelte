<script>
import CustomHero from "$lib/components/CustomHero.svelte";
import * as Accordion from "$lib/components/ui/accordion/index.js";
</script>

<CustomHero text="FAQ" wow="" />
<Accordion.Root type="single" class="w-full px-[30%] max-[1170px]:px-[10%] max-[600px]:px-[5%]">
    <Accordion.Item value="item-1">
        <Accordion.Trigger>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit?
        </Accordion.Trigger>
        <Accordion.Content>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent gravida mattis scelerisque. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent gravida mattis scelerisque.
        </Accordion.Content>
    </Accordion.Item>

    <Accordion.Item value="item-2">
        <Accordion.Trigger>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit?
        </Accordion.Trigger>
        <Accordion.Content>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent gravida mattis scelerisque. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent gravida mattis scelerisque.
        </Accordion.Content>
    </Accordion.Item>

    <Accordion.Item value="item-5">
        <Accordion.Trigger>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit?
        </Accordion.Trigger>
        <Accordion.Content>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent gravida mattis scelerisque. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent gravida mattis scelerisque.
        </Accordion.Content>
    </Accordion.Item>

    <Accordion.Item value="item-4">
        <Accordion.Trigger>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit?
        </Accordion.Trigger>
        <Accordion.Content>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent gravida mattis scelerisque. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent gravida mattis scelerisque.
        </Accordion.Content>
    </Accordion.Item>

    <Accordion.Item value="item-3">
        <Accordion.Trigger>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit?
        </Accordion.Trigger>
        <Accordion.Content>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent gravida mattis scelerisque. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent gravida mattis scelerisque.
        </Accordion.Content>
    </Accordion.Item>


</Accordion.Root>