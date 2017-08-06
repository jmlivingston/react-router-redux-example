import { BLOG } from './constants'
import history from '../config/history'

export const blogGet = () => ({
  type: BLOG.GET
})

export const blogGetComplete = items => ({
  type: BLOG.GET_COMPLETE,
  items
})

export const blogGetByKey = blogKey => ({
  type: BLOG.GET_BY_KEY,
  blogKey
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

export const blogRemoveByKey = (blogKey, redirect) => {
  return {
    type: BLOG.REMOVE_BY_KEY,
    blogKey,
    redirect
  }
}

export const blogSaveByKey = (blogKey, blog, isNew) => {
  return {
    type: BLOG.SAVE_BY_KEY,
    blogKey,
    blog,
    isNew
  }
}

export const blogSaveByKeyComplete = () => ({
  type: BLOG.SAVE_BY_KEY_COMPLETE
})

export const redirect = url => {
  history.push(url)
}
