import { writable } from 'svelte/store';
import { SpotifyApi } from '@spotify/web-api-ts-sdk';
import { browser } from '$app/environment';

function createSpotifyStore() {
	const { subscribe, set } = writable<SpotifyApi | null>(null);

	return {
		subscribe,
		init: (clientId: string, redirectUri: string) => {
			if (browser) {
				const sdk = SpotifyApi.withUserAuthorization(clientId, redirectUri, [
					'user-read-private',
					'user-read-email'
				]);
				set(sdk);
				return sdk;
			}
		},
		reset: () => set(null)
	};
}

export const spotifyStore = createSpotifyStore();
