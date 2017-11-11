import { createClient } from 'contentful'

let client
let authorized

export function initClient (spaceId, accessToken) {
	client = createClient({
		accessToken: accessToken,
		space: spaceId,
		host: 'cdn.contentful.com'
	})
	return client.getSpace()
		.then((space) => {
			authorized = true
			return space
		})
}

export function getClient () {
	return authorized && client
}
