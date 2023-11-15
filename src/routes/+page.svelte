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
            <p>
                Ge0 Team – ваш партнер в мире программирования и инноваций. 
                Мы – коллектив профессиональных программистов, готовых 
                воплощать в жизнь самые сложные проекты.
            </p>

            <div class="mt-6">
                <b>Что мы умеем:</b>
                <ul class="list-disc">
                    <li>Разрабатываем ботов для разных платформ.</li>
                    <li>Создаем уникальные веб-сайты с индивидуальным дизайном.</li>
                    <li>Готовимся предложить захватывающие игровые проекты в ближайшем будущем.</li>
                    <li>Работаем над различными программными решениями, соответствующими вашим уникальным потребностям.</li>
                </ul>
            </div>
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