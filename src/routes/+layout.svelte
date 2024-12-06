<!-- <script lang="ts"> -->
<!-- 	import '../app.css'; -->
<!-- 	let { children } = $props(); -->
<!-- </script> -->
<!---->
<!-- {@render children()} -->

<script lang="ts">
	import '../app.css';
	import { onMount } from 'svelte';
	import { spotifyStore } from '$lib/stores/spotify';
	import { PUBLIC_CLIENT_ID } from '$env/static/public';
	import { PUBLIC_REDIRECT_URL } from '$env/static/public';

	onMount(() => {
		spotifyStore.init(PUBLIC_CLIENT_ID, PUBLIC_REDIRECT_URL);
	});
</script>

<slot />
