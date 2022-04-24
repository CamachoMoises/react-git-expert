import React, { useEffect, useState } from 'react';

export const GifGrid = ({ category }) => {
	const [images, setImages] = useState([]);
	useEffect(() => {
		getGif();
	}, []);

	const getGif = async () => {
		const url = 'https://api.giphy.com/v1/gifs/search?q=Speed+Racer&limit=10&api_key=wnzsNoA0er1NfL4znwh2pMAqRWa5BTi2';
		const resp = await fetch(url);
		const { data } = await resp.json();
		const gifs = data.map((gif) => {
			return {
				id: gif.id,
				title: gif.title,
				url: gif.images?.downsized_small.mp4,
			};
		});
		console.log(gifs);
		setImages(gifs);
	};

	return (
		<div>
			<h3> {category} </h3>
			<ol>
				{images.map(({id, title}) => (
					<li key={id}> {title}</li>
				))}
			</ol>
		</div>
	);
};
