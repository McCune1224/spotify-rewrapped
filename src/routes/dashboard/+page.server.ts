import { SpotifyApi, type AccessToken } from '@spotify/web-api-ts-sdk';
import type { PageServerLoad } from './$types';
import { error } from '@sveltejs/kit';
import { CLIENT_ID } from '$env/static/private';

export const load: PageServerLoad = async ({ cookies }) => {
	return {};
};
