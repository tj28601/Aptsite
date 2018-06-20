import ApartmentInformation from '../../app/javascript/react/components/ApartmentInformation';
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

describe('ApartmentInformation', ()=>{
 let wrapper
 beforeEach(() => {
   jasmineEnzyme();
   wrapper = mount(
     <ApartmentInformation />
   )

   wrapper.setProps({ price: "$1700", title: "Amazing Apartment", description: "Beautiful apartment!",
     address: '13 4th St Boston, MA 02147',
     bedrooms: '3',
     bathrooms: '3',
   pets: 'No pets' })
 });

 it('Should return html with the data from props', () => {
   expect(wrapper.find('li').at(0)).toHaveText('Rent: $1700/month')

 })
})
