import news from '$lib/news.json';

type News = {
    title: string,
    content: string,
    imageURL: string
}

function getNews() : Array<News> {
    console.info("Getting news from backend...");
    return news as unknown as Array<News>;
}

export { getNews }
export type { News }