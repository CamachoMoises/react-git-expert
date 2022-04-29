import { shallow } from 'enzyme';
import React from 'react';
import GifExpertApp from '../GifExpertApp.js';

describe('Test in GifExpertApp component', () => {
	test('should ', () => {
		const wrapper = shallow(<GifExpertApp />);
		expect(wrapper).toMatchSnapshot();
	});
	test('should show a list of categories', () => {
		const categories = ['Batman', 'Superhero'];
		const wrapper = shallow(<GifExpertApp defaultCategories={categories} />);
		expect(wrapper.find('GifGrid').length).toBe(categories.length);
	});
});
