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
    <title>О нас | Ge0</title>
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
                <ul class="adaptive-list">
                    <li>Разрабатываем ботов для разных платформ.</li>
                    <li>Создаем уникальные веб-сайты с индивидуальным дизайном.</li>
                    <li>Готовимся предложить захватывающие игровые проекты в ближайшем будущем.</li>
                    <li>Работаем над различными программными решениями, соответствующими вашим уникальным потребностям.</li>
                </ul>
            </div>
        </div>
    </div>
</Card>

<div class="flex w-full justify-center">
    <a href="/order" class="bg-blue-900 text-white font-bold text-2xl p-6 rounded-xl px-9 mt-10 scale-125 flex gap-6 items-center transition hover:-translate-y-1 hover:bg-blue-800 active:translate-y-1 active:bg-blue-950">
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-11 h-11">
            <path stroke-linecap="round" stroke-linejoin="round" d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 00-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 00-16.536-1.84M7.5 14.25L5.106 5.272M6 20.25a.75.75 0 11-1.5 0 .75.75 0 011.5 0zm12.75 0a.75.75 0 11-1.5 0 .75.75 0 011.5 0z" />
        </svg>
        ЗАКАЗАТЬ
    </a>
</div>