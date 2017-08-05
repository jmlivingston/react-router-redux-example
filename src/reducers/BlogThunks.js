const items = {
  item1: {
    title: 'Create World Peace'
  },
  item2: {
    title: 'Ensure No One Goes Hungry'
  },
  item3: {
    title: 'Make Everyone Learn Cowbell'
  },
  item4: {
    title: 'Prevent Political Bickering'
  },
  item5: {
    title: 'Teach Pigs To Fly'
  }
}

export const blogGet = () => {
  return new Promise((resolve, reject) => {
    if (window.localStorage.getItem('blogItems') === null) {
      window.localStorage.setItem('blogItems', JSON.stringify(items))
    }
    resolve(JSON.parse(window.localStorage.getItem('blogItems')))
  })
}

export const blogGetByKey = key => {
  return new Promise((resolve, reject) => {
    if (window.localStorage.getItem('blogItems') === null) {
      window.localStorage.setItem('blogItems', JSON.stringify(items))
    }
    resolve(JSON.parse(window.localStorage.getItem('blogItems'))[key])
  })
}

export const blogRemoveByKey = key => {
  return new Promise((resolve, reject) => {
    if (window.localStorage.getItem('blogItems') === null) {
      window.localStorage.setItem('blogItems', JSON.stringify(items))
    }
    let storageItems = JSON.parse(window.localStorage.getItem('blogItems'))
    const {
      [key]: filteredValue,
      ...filteredItems
    } = storageItems
    window.localStorage.setItem('blogItems', JSON.stringify(filteredItems))
    resolve()
  })
}

export const blogSave = (key, blog) => {
  return new Promise((resolve, reject) => {
    if (window.localStorage.getItem('blogItems') === null) {
      window.localStorage.setItem('blogItems', JSON.stringify(items))
    }
    const storageItems = JSON.parse(window.localStorage.getItem('blogItems'))
    const newStorageItems = {
      ...storageItems,
      [key]: blog
    }
    window.localStorage.setItem('blogItems', JSON.stringify(newStorageItems))
    resolve()
  })
}