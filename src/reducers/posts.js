import { makeReducer } from './util'

export const posts = makeReducer(function (action) {
	switch (action.type) {
		case 'LOAD_POSTS_PENDING':
			return { fetching: true }

		case 'LOAD_POSTS_FULFILLED':
			return {
				fetching: false,
				entries: action.payload.reduce((collection, entry) => {
					collection[ entry.sys.id ] = entry
					return collection
				}, {})
			}

		case 'LOAD_POSTS_REJECTED':
			return { error: true, fetching: false }

		case 'LOAD_POST_PENDING':
			return {
				entry: {
					[ action.meta.slug ]: {
						fetching: true
					}
				}
			}

		case 'LOAD_POST_FULFILLED':
			action.payload.fetching = false

			return {
				entry: {
					[ action.meta.slug ]: action.payload
				}
			}

		case 'LOAD_POST_REJECTED':
			return {
				entry: {
					error: true,
					fetching: false
				}
			}
	}
}, { entries: [], entry: [] })