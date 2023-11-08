<script lang="ts">
	import { page } from '$app/stores';
	import Card from '$lib/components/Card/Card.svelte';
    import '$lib/styles/error.css';
</script>

<svelte:head>
    <title>{$page?.status} | Ge0</title>
</svelte:head>

<div class="error-message">
    <Card title={"Ошибка " + $page?.status?.toString()} icon="error">
        <span>{$page?.error?.message}</span>
    </Card>
</div>