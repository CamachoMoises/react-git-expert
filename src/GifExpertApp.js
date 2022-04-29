import React, { useState } from 'react';
import {AddCategory} from './components/AddCategory';
import { GifGrid } from './components/GifGrid';

const GifExpertApp = ({defaultCategories=[]}) => {
	// const categories = [' One Punch', 'Samurai X', 'Dragon Ball'];
	const [categories, setCategories] = useState(defaultCategories);
	// const handleAdd = () => {
	// 	// setCategories([...categories, 'Naruto']);
    //     setCategories(cats => ['One Piece',...cats])
	// };
	return (
		<>
			<h2> GifExpertApp </h2>
			<AddCategory setCategories={setCategories} />
            <hr />
			<ol>
				{categories.map((category) =>
                <GifGrid 
                    category={category} 
                    key={category}
                />
                )}
			</ol>
		</>
	);
};

export default GifExpertApp;
