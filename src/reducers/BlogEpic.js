import { Observable } from 'rxjs/Observable'
import 'rxjs/add/observable/fromPromise'
import 'rxjs/add/observable/empty'
import 'rxjs/add/observable/merge'
import 'rxjs/add/observable/of'
import 'rxjs/add/operator/map'
import 'rxjs/add/operator/mapTo'
import 'rxjs/add/operator/switchMap'

import { BLOG } from '../config/constants'
import { getBlogItems, setBlogItems } from './dummyData'
import history from '../config/history'

const blogEpic = action$ => Observable.merge(
  action$.ofType(BLOG.GET).switchMap(action =>
    Observable.fromPromise(new Promise((resolve, reject) => {
      resolve(getBlogItems())
    })).switchMap(items => {
      return Observable.of({
        type: BLOG.GET_COMPLETE,
        items
      })
    })
  ),
  action$.ofType(BLOG.GET_BY_KEY).switchMap(action =>
    Observable.fromPromise(new Promise((resolve, reject) => {
      resolve(getBlogItems()[action.blogKey])
    })).switchMap(blog => {
      if (!blog) {
        history.push('/page-not-found')
        return Observable.empty()
      } else {
        return Observable.of({
          type: BLOG.GET_BY_KEY_COMPLETE,
          blog
        })
      }
    })
  ),
  action$.ofType(BLOG.SAVE_BY_KEY).switchMap(action =>
    Observable.fromPromise(new Promise((resolve, reject) => {
      const newStorageItems = {
        ...getBlogItems(),
        [action.key]: action.blog
      }
      setBlogItems(newStorageItems)
      resolve()
    })).switchMap(() => {
      if (action.isNew) {
        history.push('/blog/' + action.key)
        return Observable.empty()
      } else {
        return Observable.of({
          type: BLOG.SAVE_BY_KEY_COMPLETE
        })
      }
    })
  ),
  action$.ofType(BLOG.REMOVE_BY_KEY).switchMap(action =>
    Observable.fromPromise(new Promise((resolve, reject) => {
      const {
        [action.blogKey]: filteredValue,
        ...filteredItems
      } = getBlogItems()
      setBlogItems(filteredItems)
      resolve()
    })).switchMap(() => {
      if (action.redirect) {
        history.push('/blog/')
        return Observable.of({
          ...action,
          type: BLOG.REMOVE_BY_KEY_COMPLETE
        })
      } else {
        return Observable.of({
          type: BLOG.GET
        })
      }
    })
  )
)

export default blogEpic
