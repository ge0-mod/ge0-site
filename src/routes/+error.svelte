<script lang="ts">
	import { page } from '$app/stores';
    import '$lib/styles/error.css';
</script>

<div class="error-message">
   <div class="text-7xl mb-14">{$page.status}</div>
   <span>{$page?.error?.message}</span>
</div>