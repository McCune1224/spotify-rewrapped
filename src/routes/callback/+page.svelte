<script lang="ts">
	import { onMount } from 'svelte';
	import { goto } from '$app/navigation';
	import { spotifyStore } from '$lib/stores/spotify';

	onMount(async () => {
		const unsubscribe = spotifyStore.subscribe(async (sdk) => {
			if (sdk) {
				try {
					await sdk.authenticate();
					goto('/dashboard');
				} catch (error) {
					console.error('Authentication failed:', error);
				}
			}
		});

		return () => {
			unsubscribe();
		};
	});
</script>

<p>Authenticating...</p>
