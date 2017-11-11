import * as entryService from '../services/entryStore'

export function setAppClientState (authState) {
  return {
    type: 'LOADED_CLIENT',
    authState
  }
}

export function loadEntries ({ contentTypeId }) {
  return {
    type: 'LOAD_POSTS',
    payload: entryService.loadEntries(contentTypeId)
  }
}

export function loadEntry (id) {
  return {
    type: 'LOAD_POST',
    payload: entryService.loadEntry(id),
    meta: {
      id
    }
  }
}