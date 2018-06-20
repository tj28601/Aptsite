import ApartmentTile from '../../app/javascript/react/components/ApartmentTile'

import { shallow, mount } from 'enzyme';
import jasmineEnzyme from 'jasmine-enzyme';
import React from 'react';


Object.assign(global, {
  jasmineEnzyme,
  mount,
  React,
  shallow,
});

let requireAll = requireContext => {
  requireContext.keys().forEach(requireContext);
};

describe('ApartmentTile', ()=>{
  let wrapper
  beforeEach(() => {
    jasmineEnzyme();
    wrapper = mount(
      <ApartmentTile />
    )
    wrapper.setProps({price: '$1200',
    title: 'Here is a title', description: 'here is another apt description', address: '12 Hawthorne St Boston, MA 02144', pets: 'no pets'
    })
  });

  // it('Should return html with the data from props', () => {
  //   console.log(wrapper.find('h4').first());
  //   expect(wrapper.find('h4').first()).toHaveText('$1200')
  //
  // })
})
