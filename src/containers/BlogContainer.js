import { connect } from 'react-redux'
import uuidv4 from 'uuid/v4'

import Blog from '../components/Blog'
import { blogChange, blogGetByKey, blogGetByKeyComplete, blogRemoveByKey, blogSaveByKey, blogSaveByKeyComplete, redirect } from '../config/actions'
import { blogGetByKey as blogGetByKeyThunk, blogRemoveByKey as blogRemoveByKeyThunk, blogSaveByKey as blogSaveByKeyThunk } from '../reducers/BlogThunks'

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
      if (ownProps.useThunk) {
        blogGetByKeyThunk(ownProps.match.params.blogKey).then(
          blog => {
            if (blog) {
              dispatch(blogGetByKeyComplete(blog))
            } else {
              redirect('/page-not-found')
            }
          },
          error => console.log(error)
        )
      } else {
        dispatch(blogGetByKey(ownProps.match.params.blogKey))
      }
    }
  },
  remove () {
    if (ownProps.useThunk) {
      blogRemoveByKeyThunk(ownProps.match.params.blogKey).then(
        result => {
          redirect('/blog')
        }
      )
    } else {
      dispatch(blogRemoveByKey(ownProps.match.params.blogKey))
    }
  },
  save (blog) {
    const isNew = ownProps.editMode === 'new'
    const blogKey = isNew ? uuidv4() : ownProps.match.params.blogKey
    if (ownProps.useThunk) {
      blogSaveByKeyThunk(blogKey, blog).then(
        result => {
          if (isNew) {
            redirect('/blog/' + blogKey)
          }
          dispatch(blogSaveByKeyComplete())
        },
        error => console.log(error)
      )
    } else {
      dispatch(blogSaveByKey(blogKey, blog, isNew))
    }
  }
})

const BlogContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(Blog)

export default BlogContainer
