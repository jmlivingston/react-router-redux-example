import { getBlogItems, setBlogItems } from './dummyData'

export const blogGet = () => {
  return new Promise((resolve, reject) => {
    resolve(getBlogItems())
  })
}

export const blogGetByKey = key => {
  return new Promise((resolve, reject) => {
    resolve(getBlogItems()[key])
  })
}

export const blogRemoveByKey = key => {
  return new Promise((resolve, reject) => {
    const {
      [key]: filteredValue,
      ...filteredItems
    } = getBlogItems()
    setBlogItems(filteredItems)
    resolve()
  })
}

export const blogSaveByKey = (key, blog) => {
  return new Promise((resolve, reject) => {
    const newStorageItems = {
      ...getBlogItems(),
      [key]: blog
    }
    setBlogItems(newStorageItems)
    resolve()
  })
}
