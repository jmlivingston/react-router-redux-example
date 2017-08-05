const sampleBlogItems = {
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

export const getBlogItems = () => {
  if (window.localStorage.getItem('blogItems') === null) {
    window.localStorage.setItem('blogItems', JSON.stringify(sampleBlogItems))
  }
  return JSON.parse(window.localStorage.getItem('blogItems'))
}

export const setBlogItems = blogItems => {
  window.localStorage.setItem('blogItems', JSON.stringify(blogItems))
}
