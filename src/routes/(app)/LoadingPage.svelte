<script lang="ts">

    let elapsed = 0;

    setInterval(() => {
        elapsed += 1;
    }, 1000);

</script>

<div class="page">
    <img src="/lumina-icon.svg" width="48px">
    {#if elapsed >= 2.5}
        <p>This may take a few seconds...</p>
    {/if}
</div>

<style>
    p {
        color: var(--md-sys-color-on-surface-variant);
        margin: 0;
        font-family: var(--font);
        font-size: 14px;
        font-style: normal;
        font-weight: 500;
        line-height: 20px; /* 142.857% */
        letter-spacing: 0.25px;
    }

    .page {
        width: 100%;
        height: 100vh;
        display: flex;
        justify-content: center;
        align-items: center;
        flex-direction: column;
        gap: 16px;
    }

    /*:global(html) {*/
    /*    height: 100%!important;*/
    /*}*/

    img {
        box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
    }
</style>