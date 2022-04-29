import React from 'react';
import { shallow } from 'enzyme';
import { AddCategory } from '../../components/AddCategory';
import '@testing-library/jest-dom';

describe('Test in AddCategory component', () => {
	const setCategories = jest.fn();
	let wrapper = shallow(<AddCategory setCategories={setCategories} />);
	beforeEach(() => {
		jest.clearAllMocks();
		wrapper = shallow(<AddCategory setCategories={setCategories} />);
	});
	test('should show the component snapshot ', () => {
		expect(wrapper).toMatchSnapshot();
	});
	test('should change text box', () => {
		const input = wrapper.find('input');
		input.simulate('change', { target: { value: 'value' } });
		const inputValue = wrapper.find('p');
		expect(inputValue.text().trim()).toBe('value');
	});
	test("shouldn't post the information with submit", () => {
		// wrapper.find('form').simulate('submit', {preventDefault: ()=>{}});
		wrapper.find('form').simulate('submit', { preventDefault() {} });
		expect(setCategories).not.toHaveBeenCalled();
	});
    test('should call setCategories an clean text box', () => {
        const input = wrapper.find('input');
		input.simulate('change', { target: { value: 'value' } });
		wrapper.find('form').simulate('submit', { preventDefault() {} });
		expect(setCategories).toHaveBeenCalled();
		// expect(setCategories).toHaveBeenCalledTimes(2);
        expect(setCategories).toHaveBeenCalledWith( expect.any(Function) );
        expect( input.prop('value') ).toBe('');

    })
    

});
