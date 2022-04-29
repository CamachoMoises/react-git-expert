import getGif from '../../helpers/getGifs';

describe('Test in the method getGif and the fetch', () => {
	test('should bring ten elements', async () => {
		const gifs = await getGif('Batman');
		expect(gifs.length).toBe(10);
	});
	test("shouldn't bring elements ", async () => {
		const gifs = await getGif('');
		expect(gifs.length).toBe(0);
	});
});
