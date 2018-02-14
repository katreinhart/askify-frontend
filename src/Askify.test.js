import React from 'react';
import { mount, shallow } from 'enzyme';
import thunk from 'redux-thunk';
import configureMockStore from 'redux-mock-store';
import { Askify } from './Askify';

describe('Askify', () => {
  let askify = shallow(<Askify />)

  const createMockStore = configureMockStore([thunk])
  const store = createMockStore({ user: {} })

  it('renders without crashing', () => {
    expect(askify).toMatchSnapshot()
  })

  // describe('when there is no user logged in', () => {
  //   let askify = mount(<Askify />)
  //   it('renders sign in page', () => {
  //     expect(askify.find('Connect(SignIn)').exists()).toBe(true)
  //   })
  // })
})
