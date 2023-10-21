<style>
    :root {
        --highlight-color: orange;
        --border-color: #cfcfcf;
        --background-color: #fafafa;
        --header-background-color: #ebebeb;
        --content-background-color: #ffffff;
        --text-color: #323232;

        color: var(--text-color);
    }

    @media (prefers-color-scheme: dark) {
        :root {
            --highlight-color: orange;
            --border-color: #454545;
            --background-color: #242424;
            --header-background-color: #303030;
            --content-background-color: #363636;
            --text-color: #f5f5f5;
        }
    }

    .page-wrapper {
        display: flex;
        max-width: 1024px;
        margin: auto;
        background: var(--background-color);
        border-radius: 16px;
        box-sizing: border-box;
        box-shadow: 0 0 30px rgba(0, 0, 0, 0.25);
        overflow: hidden;
    }    
</style>

<div class="page-wrapper">
    <slot />
</div>