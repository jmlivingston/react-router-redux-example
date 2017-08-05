import { BLOG } from './constants'
import history from '../config/history'

export const blogGetComplete = items => ({
  type: BLOG.GET_COMPLETE,
  items
})

export const blogGetByKeyComplete = blog => ({
  type: BLOG.GET_BY_KEY_COMPLETE,
  blog
})

export const blogChange = (property, value) => ({
  type: BLOG.CHANGE,
  property,
  value
})

export const blogSaveComplete = () => {
  return {
    type: BLOG.SAVE_COMPLETE
  }
}

export const redirect = url => {
  history.push(url)
}
