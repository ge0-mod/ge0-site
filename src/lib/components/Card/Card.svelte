<script lang="ts">
// @ts-nocheck
	import CardTitle from "./CardTitle.svelte";
    import iconsD from "../iconsD.json";

    export let icon: string;
    export let title: string;
</script>
<div class="m-8 p-8 border-gray-500 rounded-lg border border-opacity-20">
    <CardTitle>
        <svg 
            xmlns="http://www.w3.org/2000/svg" 
            fill="none" viewBox="0 0 24 24" 
            stroke-width="1.5" stroke="currentColor" 
            class="w-14 h-14 me-5"
        >
            <path stroke-linecap="round" stroke-linejoin="round" d={iconsD[icon]} />
        </svg>
        {title}
    </CardTitle>
    <div class="mt-14">
        <slot />
    </div> 
</div>