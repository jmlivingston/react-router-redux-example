import { connect } from 'react-redux'

import { blogGetComplete } from '../config/actions'
import { blogGet } from '../reducers/BlogThunks'
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
  }
})

const BlogListContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(BlogList)

export default BlogListContainer
