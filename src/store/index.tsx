import { createStore } from '@reduxjs/toolkit'

const initState = 0

type Action = {
  type: string
}

const reducer = (state = initState, action: Action) => {
  switch (action.type) {
    case 'Add':
      return state + 1
    case 'remove':
      return state - 1
    default:
      return state
  }
}

export default createStore(reducer)
