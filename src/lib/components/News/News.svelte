<script lang="ts">
    import type { News } from "$lib/news";
    import '$lib/styles/news.css';

    export let news: News;
</script>

<div class="news flex card-contain">
    <div class="card-image">
        <img alt={news.imageURL} src={news.imageURL} />
    </div>
    <div class="card-text">
        <h1 class="font-semibold text-4xl">{@html news.title}</h1>
        <div class="mt-5">
            {@html news.content}
        </div>
    </div>
</div>

<hr class="mt-14" />