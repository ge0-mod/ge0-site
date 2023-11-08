<script lang="ts">
	import Card from "$lib/components/Card/Card.svelte";

    let testInfo: Array<string> = [];

    for (let i = 0; i < 10; i++) {
        testInfo = [...testInfo, "test info test info test info test info test info test info test info test info test info test info"];
    }
</script>

<svelte:head>
    <title>Главная | Ge0</title>
</svelte:head>

<dummy id="about" />
<Card title="О нас" icon="about">
    { testInfo }
</Card>


<dummy id="news" />
<Card title="Новости" icon="news">
    { testInfo }
</Card>