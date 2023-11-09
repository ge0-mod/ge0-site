<script lang="ts">
	import Card from "$lib/components/Card/Card.svelte";
	import Footer from "$lib/components/Footer/Footer.svelte";
    import News from "$lib/components/News/News.svelte";
    import type { PageServerData } from './$types';

    export let data: PageServerData;

    let testInfo: Array<string> = [];

    for (let i = 0; i < 10; i++) {
        testInfo = [...testInfo, "Привет! Я Саша диктор с канала \"Мастерская настроения\"! "];
    }
</script>

<svelte:head>
    <title>Главная | Ge0</title>
</svelte:head>

<dummy id="about" />
<Card title="О нас" icon="about">
    <div class="flex card-contain">
        <div class="card-image">
            <img alt="example" src="/example.jpg" />
        </div>
        <div class="card-text">
            { testInfo.join('\n') }
        </div>
    </div>
</Card>


<dummy id="news" />
<Card title="Новости" icon="news">
    { #each data.news as news}
        <News news={news} />
    {/each }
</Card>

<Footer />