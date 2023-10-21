<script>
    export let validationErrors;
</script>

{#if validationErrors && validationErrors.length > 0}
    <table class="styled-table full-width">
        <thead>
            <tr>
                <th>Keyword</th>
                <th>Message</th>
                <th>Instance path</th>
                <th>Schema path</th>
            </tr>                
        </thead>
        <tbody>
            {#each validationErrors as error}
            <tr>
                <td>{error.keyword}</td>
                <td>{error.message}</td>
                <td>{error.instancePath}</td>
                <td>{error.schemaPath}</td>
            </tr>
            {/each}
        </tbody>
    </table>
{/if}