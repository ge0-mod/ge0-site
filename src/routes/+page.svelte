<script lang="ts">
	import Card from "$lib/components/Card/Card.svelte";

    let testInfo: Array<string> = [];

    for (let i = 0; i < 5; i++) {
        testInfo = [...testInfo, "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas scelerisque neque ac tristique gravida."];
    }
</script>

<svelte:head>
    <title>Главная | Ge0</title>
</svelte:head>

<dummy id="about" />
<Card title="О нас" icon="about">
    <div class="card-image">
        <img alt="example" src="/example.jpg" />
    </div>
    <div class="card-text">
        { testInfo }
    </div>
</Card>


<dummy id="news" />
<Card title="Новости" icon="news">
    <div class="card-image">
        <img alt="example1" src="/example1.jpg" />
    </div>
    <div class="card-text">
        { testInfo }
    </div>
</Card>