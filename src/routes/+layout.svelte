<style>
    :root {
        --highlight-color: orange;
        --border-color: #454545;
        --content-background-color: #363636;
        --text-color: #f5f5f5;

        color: var(--text-color);
    }

    .page-wrapper {
        display: flex;
        max-width: 1024px;
        margin: auto;
        background: #242424;
        border-radius: 16px;
        box-sizing: border-box;
        box-shadow: 0 0 30px rgba(0, 0, 0, 0.25);
        overflow: hidden;
    }    
</style>

<div class="page-wrapper">
    <slot />
</div>