import * as postService from '../services/postService'

export function setAppClientState (authState) {
  return {
    type: 'LOADED_CLIENT',
    authState
  }
}

export function loadPosts () {
  return {
    type: 'LOAD_POSTS',
    payload: postService.loadPosts()
  }
}

export function loadPost (slug) {
  return {
    type: 'LOAD_POST',
    payload: postService.loadPost(slug),
    meta: {
      slug
    }
  }
}