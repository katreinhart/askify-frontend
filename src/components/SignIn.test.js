import React from 'react';
import { mount, shallow } from 'enzyme';
import { SignIn } from './SignIn'

describe('SignIn', () => {
  let signin = mount(<SignIn />)
  it('renders without crashing', () => {
    expect(signin).toMatchSnapshot()
  })
})