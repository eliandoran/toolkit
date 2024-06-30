<button on:click>
    <slot />
</button>

<style>
    button {
        display: inline-block;
        color: var(--text-color);
        position: relative;
        appearance: none;
        border: 0;
        background: transparent;
        cursor: pointer;
    }

    button :global(.icon) {
        display: inline-block;
        width: 24px;
        height: 24px;        
    }

    button :global(.icon svg) {
        color: var(--text-color);
    }

    button :global(.icon svg) {
        position: absolute;
        top: 50%;
        left: 0;
        width: 24px;
        height: 24px;   
        transform: translateY(-50%);
    }

</style>