import { SpotifyApi, type AccessToken } from '@spotify/web-api-ts-sdk';
import type { PageServerLoad } from './$types';
import { error } from '@sveltejs/kit';
import { CLIENT_ID } from '$env/static/private';

export const load: PageServerLoad = async ({ cookies }) => {
	const accessToken = cookies.get('access_token');
	const refresh_token = cookies.get('refresh_token');

	if (!accessToken || !refresh_token) {
		throw error(401, 'Unauthorized: No access token found');
	}
	const at: AccessToken = {
		access_token: accessToken,
		token_type: '',
		expires_in: 60 * 60,
		refresh_token: refresh_token
	};

	if (!accessToken) {
		throw error(401, 'Unauthorized: No access token found');
	}
	const spotify = SpotifyApi.withAccessToken(CLIENT_ID, at);
	const me = await spotify.currentUser.profile();
	console.log(me);
	return {
		accessToken,
		me
	};
};
