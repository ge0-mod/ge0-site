<script lang="ts">
// @ts-nocheck
    import '$lib/styles/mobile-navbar.css';
	import NavItem from "./NavItem.svelte";
	import { fade, fly } from 'svelte/transition';
    import iconsD from "../iconsD.json";
    import navItems from "./nav-items.json";

    export let navbarOpen: boolean;

    function closeNavbar(e) {
        navbarOpen = false;
    }
</script>

{ #if navbarOpen }
    <!-- svelte-ignore a11y-no-static-element-interactions -->
    <div class="backdrop" on:mousedown={closeNavbar} transition:fade={{duration: 150}}></div>
    <nav class="mobile-navbar" transition:fly={{duration: 150, delay: 150, y: 400}}>
        <h1 class="text-center w-full text-3xl">Меню</h1>
        <button class="close-btn" on:mousedown={closeNavbar}>
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-8 h-8">
                <path stroke-linecap="round" stroke-linejoin="round" d="M9.75 9.75l4.5 4.5m0-4.5l-4.5 4.5M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
        </button>
        <nav class="h-full w-full">
            { #each navItems.items as navItem }
                <!-- svelte-ignore a11y-click-events-have-key-events -->
                <!-- svelte-ignore a11y-no-static-element-interactions -->
                <!-- svelte-ignore a11y-missing-attribute -->
                <!-- DONT FUCK MY BRAIN -->
                <a class="ms-10 mt-8" on:click={closeNavbar}>
                    <NavItem 
                        href={navItem.href} 
                        title={navItem.title} 
                        iconD={iconsD[navItem.d]}
                    />
                </a>
            { /each }
        </nav>
    </nav>
{ /if }