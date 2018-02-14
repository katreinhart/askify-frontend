import React from 'react';
import { mount, shallow } from 'enzyme';
import { SignIn } from './SignIn'
import { StaticRouter } from 'react-router-dom'

describe('SignIn', () => {
  const mockSignIn = jest.fn()

  let signin = mount(
    <StaticRouter>
      <SignIn signIn={mockSignIn}/>
    </StaticRouter>
  )
  it('renders without crashing', () => {
    expect(signin).toMatchSnapshot()
  })

  it('renders an email field', () => {
    expect(signin.find('#Form-email1').exists()).toBe(true)
  })

  it('renders a password field', () => {
    expect(signin.find('#Form-pass1').exists()).toBe(true)
  })

  describe('submit button', () => {
    it('renders', () => {
      expect(signin.find('.signin-btn').exists()).toBe(true)
    })

    it('submits the signin form on click', () => {
      signin.find('.signin-btn').simulate('click')

      expect(mockSignIn).toHaveBeenCalled()
    })
  })

})