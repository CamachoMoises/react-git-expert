import React from 'react';
import useFetchGifs from '../../hooks/useFetchGifs';
import { renderHook } from '@testing-library/react-hooks';

describe('Test in the hooks useFetchGifs', () => {
	test('should return ini state with a empty array and loading like treu  ', async () => {
		const { result, waitForNextUpdate } = renderHook(() => useFetchGifs('Dune'));

		const { data: images, loading } = result.current;
		await waitForNextUpdate({timeout:3000});
		// const { data: images, loading } = useFetchGifs('Dune');
		// console.log(images, loading);
		expect(images).toEqual([]);
		expect(loading).toBe(true);
	});
	test('should return an array of images and loading in false', async () => {
		const { result, waitForNextUpdate } = renderHook(() => useFetchGifs('Dune'));
		await waitForNextUpdate({timeout:3000});
		const { data: images, loading } = result.current;

		expect(images.length).toBe(10);
		expect(loading).toBe(false);
	});
});
