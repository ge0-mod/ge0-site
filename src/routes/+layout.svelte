<script>
	import Header from "$lib/components/Header/Header.svelte";
    import "$lib/styles/app.css";
    import { onNavigate } from '$app/navigation';
	import Footer from "$lib/components/Footer/Footer.svelte";
    

    onNavigate((navigation) => {
        // @ts-ignore
        // but I copied it from SvelteKit docs...
        if (!document.startViewTransition) return;

        return new Promise((resolve) => {
            // @ts-ignore
            document.startViewTransition(async () => {
                resolve();
                await navigation.complete;
            });
        });
    });
</script>

<Header />

<div class="mt-32">
    <slot />
    <div class="mb-60"></div>
    <Footer />
</div>