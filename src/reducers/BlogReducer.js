import { BLOG } from '../config/constants'

const blog = (state = { item: { title: '' } }, action) => {
  switch (action.type) {
    case BLOG.GET_COMPLETE:
      return {
        ...state,
        items: {
          ...action.items
        }
      }
    case BLOG.GET_BY_KEY_COMPLETE:
      return {
        ...state,
        updated: false,
        item:
        {
          ...state.item,
          ...action.blog
        }
      }
    case BLOG.CHANGE:
      return {
        ...state,
        item:
        {
          ...state.item,
          [action.property]: action.value
        }
      }
    case BLOG.SAVE:
      return {
        ...state,
        items:
        {
          ...state.items,
          [action.key]: action.blog
        }
      }
    case BLOG.SAVE_BY_KEY_COMPLETE:
      return {
        ...state,
        updated: true
      }
    default:
      return state
  }
}

export default blog
