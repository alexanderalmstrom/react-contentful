import { createClient } from 'contentful'

let client
let authorized

export function initClient () {
	client = createClient({
		accessToken: process.env.NODE_ENV == 'production' ? process.env.DELIVERY_ACCESS_TOKEN : process.env.PREVIEW_ACCESS_TOKEN,
		space: process.env.SPACE_ID,
		host: process.env.NODE_ENV == 'production' ? 'cdn.contentful.com' : 'preview.contentful.com'
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
