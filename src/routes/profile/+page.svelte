<script lang="ts">
	import { spotifyStore } from '$lib/stores/spotify';
	import { onMount } from 'svelte';

	let profile: any = null;

	onMount(async () => {
		const unsubscribe = spotifyStore.subscribe(async (sdk) => {
			if (sdk) {
				try {
					profile = await sdk.currentUser.profile();
				} catch (error) {
					console.error('Failed to fetch profile:', error);
				}
			}
		});

		return () => {
			unsubscribe();
		};
	});
</script>

{#if profile}
	<h1>Profile Page</h1>
	<p>Name: {profile.display_name}</p>
	<p>Email: {profile.email}</p>
	<!-- Add more profile information as needed -->
{:else}
	<p>Loading profile...</p>
{/if}
