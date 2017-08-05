import { Observable } from 'rxjs/Observable'
import 'rxjs/add/observable/empty'
import 'rxjs/add/observable/fromPromise'
import 'rxjs/add/observable/merge'
import 'rxjs/add/observable/of'
import 'rxjs/add/operator/catch'
import 'rxjs/add/operator/map'
import 'rxjs/add/operator/switchMap'

import { BLOG } from '../config/constants'
import { getBlogItems, setBlogItems } from './dummyData'

const blogEpic = action$ => Observable.merge(
  action$.ofType(BLOG.SAVE)
    .switchMap(action =>
      Observable.fromPromise(
        new Promise((resolve, reject) => {
          const newStorageItems = {
            ...getBlogItems(),
            [action.key]: action.blog
          }
          setBlogItems(newStorageItems)
        })
      )
        .switchMap(results =>
          Observable.of({
            ...action,
            type: BLOG.SAVE_COMPLETE
          })
        )
    )
)

export default blogEpic
