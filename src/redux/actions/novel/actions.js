import {
  NOVEL_GET_ALL
} from './types'
import { authHeader } from '../../../config/headers'
import { NOVELS_GET_ALL } from '../../../config/constants'

const createAction = (type, payload) => ({ type, payload })

export function fetchAllNovels () {
  return async dispatch => {
    try {
      const result = await fetch(NOVELS_GET_ALL, authHeader('GET'))
      const novels = await result.json()
      dispatch(createAction(NOVEL_GET_ALL, novels))
    } catch (error) {
      console.log('Error', error)
    }
  }
}
