import { getClient } from './contentfulClient'

export function loadEntries (contentTypeId, include = 1) {
	return getClient().getEntries({
		'content_type': contentTypeId,
		'include': include
	}).then(payload => {
		return payload.items
	})
}

export function loadEntry (contentTypeId, slug, include = 1) {
	return getClient().getEntries({
		'content_type': contentTypeId,
		'fields.slug': slug,
		'include': include
	}).then(payload => {
		if (!payload.items.length) {
			throw new Error('Entry not found')
		}

		return payload.items[0]
	})
}
