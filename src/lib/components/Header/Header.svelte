<script>
	import MobileNavbar from "./MobileNavbar.svelte";
	import Navbar from "./Navbar.svelte";
    let mobileNavbarOpen = false;
</script>

<Navbar bind:mobileNavbarOpen={mobileNavbarOpen} />
<MobileNavbar bind:navbarOpen={mobileNavbarOpen} />