import configureMockStore from 'redux-mock-store'
import thunk from 'redux-thunk'
import fetchMock from 'fetch-mock'

import * as constants from './index'
import * as actions from './queue.actions'

describe('queue actions', () => {

  const createMockStore = configureMockStore([thunk])
  const store = createMockStore({ payload: [] })

  const mockResponse = {
      body: [{
      id: 1,
      question: "random question", 
      answered: false,
      userid: 1, 
      fname: "asdf",
      cohort: "g67"
    }]
  }

  const mockHeader = { 'Authorization': 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1aWQiOjEsInJvbCI6ZmFsc2UsImV4cCI6MTUxODcyNzEwNX0.6nn_DNVqCGQ8Y7rVxGhhDHM8gnzXyPQyErANO4G-HBA' }

  fetchMock.get('https://askify-api.herokuapp.com/api/queue', mockResponse)

  describe('Fetch queue', () => {
    it('creates an async action to fetch the queue', () => {
      const expectedActions = [{ type: constants.FETCH_QUEUE_SUCCESS, payload: mockResponse.body}]

      return store.dispatch(actions.fetchQueue()).then(() => {
        expect(store.getActions()).toEqual(expectedActions)
      })
    })
  })
})
