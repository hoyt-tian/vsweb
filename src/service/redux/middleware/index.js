import { ActionMap } from '../action'
import { states } from '../states'
export const logger = process.env.NODE_ENV === 'production' ? store => next => action => next(action) 
: store => next => action => {
  console.group(action.type)
  console.debug('dispatching', action)
  const result = next(action)
  console.debug('next state', store.getState())
  console.groupEnd(action.type)
  return result
}

export const dop = store => next => action => {
  switch(action.type) {
    case 'activitybar':
      states.enqueue(store.getState())
      console.debug('save state', store.getState())
      break
    default:
      break
  }
  const result = next(action)
  return result
}