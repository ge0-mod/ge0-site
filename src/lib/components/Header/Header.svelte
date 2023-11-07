<script>
// @ts-nocheck
	import NavItem from "./NavItem.svelte";
    import iconsD from "../iconsD.json";
    import navItems from "./nav-items.json";
</script>

<div class="flex bg-blue-400 text-white w-100 items-center p-5">
    <a href="/" class="bg-white px-5 rounded-xl scale-on-hover w-32 flex justify-center">
        <img alt="ge0-favicon" class="h-14 object-contain" src="/favicon.png" />
    </a>
    <nav class="h-full ms-9 w-full">
        <ul class="list-none flex items-center h-full text-lg">
            { #each navItems.items as navItem }
                <NavItem 
                    href={navItem.href} 
                    title={navItem.title} 
                    iconD={iconsD[navItem.d]} 
                />
            { /each }
        </ul>
    </nav>
    <button class="expand-menu-btn">
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-8 h-8">
            <path stroke-linecap="round" stroke-linejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
        </svg>
    </button>
</div>

