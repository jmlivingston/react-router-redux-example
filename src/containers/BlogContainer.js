import { connect } from 'react-redux'
import uuidv4 from 'uuid/v4'

import Blog from '../components/Blog'
import { blogChange, blogGetByKeyComplete, blogSaveComplete, redirect } from '../config/actions'
import { blogGetByKey, blogRemoveByKey, blogSave } from '../reducers/BlogThunks'

const mapStateToProps = (state, ownProps) => ({
  blog: state.blog.item,
  blogKey: ownProps.match.params.blogKey,
  editMode: ownProps.editMode,
  updated: state.blog.updated
})

const mapDispatchToProps = (dispatch, ownProps) => ({
  change (property, value) {
    dispatch(blogChange(property, value))
  },
  get () {
    if (ownProps.editMode === 'new') {
      dispatch(blogGetByKeyComplete({ title: '' }))
    } else {
      blogGetByKey(ownProps.match.params.blogKey).then(
        blog => dispatch(blogGetByKeyComplete(blog)),
        error => console.log(error)
      )
    }
  },
  remove () {
    // Need redux-observable example
    blogRemoveByKey(ownProps.match.params.blogKey).then(
      result => {
        redirect('/blog')
      }
    )
  },
  save (blog) {
    const isNew = ownProps.editMode === 'new'
    const key = isNew ? uuidv4() : ownProps.match.params.blogKey
    // Need redux-observable example
    blogSave(key, blog).then(
      result => {
        if (isNew) {
          redirect('/blog/' + key)
        }
        dispatch(blogSaveComplete())
      },
      error => console.log(error)
    )
  }
})

const BlogContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(Blog)

export default BlogContainer
