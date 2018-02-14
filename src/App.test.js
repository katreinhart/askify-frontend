import React from 'react';
import { shallow } from 'enzyme';
import App from './App';


describe('App', () => {
  const app = shallow(<App />)

  it('renders without crashing', () => {
    expect(app).toMatchSnapshot()
  })

  it('contains a connected Askify component', () => {
    expect(app.find('Connect(Askify)').exists()).toBe(true)
  })
})

