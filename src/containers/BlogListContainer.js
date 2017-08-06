import { connect } from 'react-redux'

import { blogRemoveByKey, blogGetComplete } from '../config/actions'
import { blogGet, blogRemoveByKey as blogRemoveByKeyThunk } from '../reducers/BlogThunks'
import BlogList from '../components/BlogList'

const mapStateToProps = (state, ownProps) => ({
  items: state.blog.items
})

const mapDispatchToProps = (dispatch, ownProps) => ({
  get () {
    blogGet().then(
      items => dispatch(blogGetComplete(items)),
      error => console.log(error)
    )
  },
  remove (blogKey) {
    if (ownProps.useThunk) {
      blogRemoveByKeyThunk(blogKey).then(
        result => {
          this.get()
        }
      )
    } else {
      dispatch(blogRemoveByKey(blogKey, false))
    }
  }
})

const BlogListContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(BlogList)

export default BlogListContainer
