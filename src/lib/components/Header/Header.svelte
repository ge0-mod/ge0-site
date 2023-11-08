<script>
	import MobileNavbar from "./MobileNavbar.svelte";
	import Navbar from "./Navbar.svelte";
	import '$lib/styles/header.css';

    let mobileNavbarOpen = false;
</script>

<Navbar bind:mobileNavbarOpen={mobileNavbarOpen} />
<MobileNavbar bind:navbarOpen={mobileNavbarOpen} />