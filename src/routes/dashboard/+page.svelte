<script lang="ts">
	import { goto } from '$app/navigation';
	import { spotifyStore } from '$lib/stores/spotify';
	import { onMount } from 'svelte';

	let isAuthenticated = false;
	let profile: any = null;

	onMount(async () => {
		const unsubscribe = spotifyStore.subscribe(async (sdk) => {
			if (sdk) {
				try {
					await sdk.authenticate();
					isAuthenticated = true;
					profile = await sdk.currentUser.profile();
				} catch (error) {
					console.error('Authentication failed:', error);
				}
			}
		});

		return () => {
			unsubscribe();
		};
	});

	function login() {
		$spotifyStore?.authenticate();
	}

	async function logout() {
		await $spotifyStore?.logOut();
		isAuthenticated = false;
		goto('/');
	}
</script>

<main>
	{#if isAuthenticated}
		<button on:click={logout}>Logout</button>
		<h1>Lol look at this bozo</h1>
		{#if profile}
			<h2>{profile.display_name}!</h2>
			<img src={profile.images[0]?.url} alt="Profile" width="100" height="100" />
			<p>Email: {profile.email}</p>
		{/if}
	{:else}
		<button on:click={login}>Login with Spotify</button>
	{/if}
</main>

<style>
	main {
		max-width: 800px;
		margin: 0 auto;
		padding: 20px;
		text-align: center;
	}
	button {
		padding: 10px 20px;
		font-size: 16px;
		cursor: pointer;
	}
</style>
