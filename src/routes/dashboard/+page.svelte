<script lang="ts">
	import type { PageServerData } from './$types';

	let error: string | null = null;
	let { data }: { data: PageServerData } = $props();
</script>

<!-- <main> -->
<!-- 	{#if error} -->
<!-- 		<p class="error">{error}</p> -->
<!-- 	{:else if profile} -->
<!-- 		<h1>Welcome {profile.display_name}</h1> -->
<!-- 		<img src={profile.images?.[0]?.url} alt="Profile" height="64" width="64" /> -->
<!-- 		<p>Followers: {profile.followers.total}</p> -->
<!-- 	{:else} -->
<!-- 		<p>Loading...</p> -->
<!-- 	{/if} -->
<!-- </main> -->

<main>
	<h1>Whats good</h1>
	<p>Here is JSON SOUP: {JSON.stringify(data)}</p>
</main>
