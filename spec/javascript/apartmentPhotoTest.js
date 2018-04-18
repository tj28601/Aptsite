import ApartmentPhotos from '../../app/javascript/react/components/ApartmentPhotos'
import { shallow, mount } from 'enzyme';
import jasmineEnzyme from 'jasmine-enzyme';
import React from 'react';
import 'jasmine-ajax';
import fetch from 'isomorphic-fetch'


Object.assign(global, {
  jasmineEnzyme,
  mount,
  React,
  shallow,
});

let requireAll = requireContext => {
  requireContext.keys().forEach(requireContext);
};

describe('ApartmentPhotos', ()=>{
  let wrapper
  beforeEach(() => {
    jasmineEnzyme();
    wrapper = mount(
      <ApartmentPhotos />
    )

  wrapper.setProps({ id: 1, image: undefined, apartment_id: 1, description: 'A description' })
});

  it('Should return html with the data from props', () => {
    expect(wrapper.find('li').at(1)).toHaveText('*** A description ***')

})
})
