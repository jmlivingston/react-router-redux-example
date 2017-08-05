import { connect } from 'react-redux'
import uuidv4 from 'uuid/v4'

import Blog from '../components/Blog'
import { blogChange, blogGetByKeyComplete, blogRemoveByKey, blogSaveByKey, blogSaveByKeyComplete, redirect } from '../config/actions'
import { blogGetByKey, blogRemoveByKey as blogRemoveByKeyThunk, blogSaveByKey as blogSaveByKeyThunk } from '../reducers/BlogThunks'

const mapStateToProps = (state, ownProps) => ({
  blog: state.blog.item,
  blogKey: ownProps.match.params.blogKey,
  editMode: ownProps.editMode,
  updated: state.blog.updated
})

const useThunk = true // true: thunk, false: observable

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
    if (useThunk) {
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
    const key = isNew ? uuidv4() : ownProps.match.params.blogKey
    if (useThunk) {
      blogSaveByKeyThunk(key, blog).then(
        result => {
          if (isNew) {
            redirect('/blog/' + key)
          }
          dispatch(blogSaveByKeyComplete())
        },
        error => console.log(error)
      )
    } else {
      dispatch(blogSaveByKey(key, blog))
    }
  }
})

const BlogContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(Blog)

export default BlogContainer
