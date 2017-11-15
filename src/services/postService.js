import { getClient } from './contentfulClient'

export function loadPosts () {
	return getClient().getEntries({
		'content_type': 'post',
		'include': 1
	}).then(payload => {
		return payload.items
	})
}

export function loadPost (slug) {
	return getClient().getEntries({
		'content_type': 'post',
		'fields.slug': slug,
		'include': 2
	}).then(payload => {
		if (!payload.items.length) {
			throw new Error('Entry not found')
		}

		return payload.items[0]
	})
}
