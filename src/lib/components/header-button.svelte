<a href="#" on:click>
    <slot />
</a>

<style>
    a {
        display: inline-block;
        color: black;
        text-decoration: none;        
        position: relative;
    }

    a :global(.icon svg) {
        position: absolute;
        top: 0;
        left: 0;
        width: 24px;
        height: 24px;   
        transform: translateY(-50%);
    }

</style>