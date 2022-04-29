import React from 'react'
import { shallow } from 'enzyme';
import { GifGrid } from '../../components/GifGrid';
import useFetchGifs from '../../hooks/useFetchGifs';
jest.mock('../../hooks/useFetchGifs');

describe('Test in GifGrid component', () => {
	const category = 'test';
	beforeEach(() => {});
    
	test('should show the component snapshot', () => {
        useFetchGifs.mockReturnValue({
            data:[],
            load: true
        })
        let wrapper = shallow(<GifGrid category={category} />);
		expect(wrapper).toMatchSnapshot();
	});
	test('should show the items when is charge images from useFetchGif', () => {
        const gifs=[{
            id:'ABC',
            url:'http://example.com',
            title:'test title'
        },{
            id:'DEF',
            url:'http://example.com',
            title:'test titless'
        }
    ]
        useFetchGifs.mockReturnValue({
            data:gifs,
            load: false
        })
        
        
        let wrapper = shallow(<GifGrid category={category} />);
        
        expect(wrapper.find('p').exists()).toBe(false)
        expect(wrapper.find('GifGridItem').length).toBe(gifs.length)
		expect(wrapper).toMatchSnapshot();
    });
});
