import configureMockStore from 'redux-mock-store'
import thunk from 'redux-thunk'
import fetchMock from 'fetch-mock'

import * as constants from './index'
import * as actions from './user.actions'

describe('User actions', () => {

  const createMockStore = configureMockStore([thunk])
  const store = createMockStore({})

  describe('fetch User', () => {
    it('creates an async action to fetch the user', () => {
      
      
    })
  })
})