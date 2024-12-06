import type { PageServerLoad } from './$types';

import { CLIENT_ID } from '$env/static/private';
import { REDIRECT_URL } from '$env/static/private';
import { redirect } from '@sveltejs/kit';

export const load = (async ({}) => {
	const state = 'some-random-state';
	const scopes = 'playlist-read-private user-library-read';
	const base_url = 'https://accounts.spotify.com/authorize';
	const query = new URLSearchParams({
		client_id: CLIENT_ID,
		response_type: 'code',
		redirect_uri: REDIRECT_URL,
		state,
		scope: scopes
	});

	const url = `${base_url}?${query.toString()}`;

	throw redirect(301, url);
}) satisfies PageServerLoad;
