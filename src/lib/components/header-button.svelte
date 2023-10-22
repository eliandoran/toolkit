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

    a :global(.icon) {
        display: inline-block;
        width: 24px;
        height: 20px;
    }

    a :global(.icon svg) {
        position: absolute;
        top: 50%;
        left: 0;
        width: 24px;
        height: 24px;   
        transform: translateY(-50%);
    }

</style>