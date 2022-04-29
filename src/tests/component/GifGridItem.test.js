import React from 'react';
import { GifGridItem } from '../../components/GifGridItem';
import { shallow } from 'enzyme';

describe('test in GifGridItem.js file', () => {
	const title = 'test title';
	const url = 'http://localhost.something.jpg';
	const wrapper = shallow(<GifGridItem title={title} url={url} />);

	test('should show the component GridItem', () => {
		expect(wrapper).toMatchSnapshot();
	});
	test('it should have a paragraph with the title', () => {
		const p = wrapper.find('p');
		expect(p.text().trim()).toBe(title);
	});
	test('it should have a image from url and alt of props', () => {
		const img = wrapper.find('img');
		console.log('Props', img.prop('src'));
		expect(img.props().src).toBe(url);
        expect(img.props().alt).toBe(title);
	});
    test('main tag should have in class animate__fadeIn', () => {
        const div = wrapper.find('div');
		// console.log('Props', div.prop('className'));
        const className= div.prop('className')
        // console.log('Watch out!', className.includes('animate__fadeIn') );
        expect(className.includes('animate__fadeIn')).toBe(true);

    })
    
});
