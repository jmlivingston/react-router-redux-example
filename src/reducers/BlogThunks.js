import { getBlogItems, setBlogItems } from './dummyData'

export const blogGet = () => {
  return new Promise((resolve, reject) => {
    resolve(getBlogItems())
  })
}

export const blogGetByKey = blogKey => {
  return new Promise((resolve, reject) => {
    resolve(getBlogItems()[blogKey])
  })
}

export const blogRemoveByKey = blogKey => {
  return new Promise((resolve, reject) => {
    const {
      [blogKey]: filteredValue,
      ...filteredItems
    } = getBlogItems()
    setBlogItems(filteredItems)
    resolve()
  })
}

export const blogSaveByKey = (blogKey, blog) => {
  return new Promise((resolve, reject) => {
    const newStorageItems = {
      ...getBlogItems(),
      [blogKey]: blog
    }
    setBlogItems(newStorageItems)
    resolve()
  })
}
