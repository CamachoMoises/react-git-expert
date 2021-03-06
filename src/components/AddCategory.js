import React, { useState } from 'react';
import PropTypes from 'prop-types';

export const AddCategory = ({ setCategories }) => {
	const [inputValue, setInputValue] = useState('');

	const handleInputChange = (e) => {
		setInputValue(e.target.value);
		// console.log('Handle input change is called');
	};
	const handleSubmit = (e) => {
		e.preventDefault();
		console.log('submitted');
		if (inputValue.trim().length > 2) {
			setCategories((cats) => [inputValue, ...cats]);
			setInputValue('');
		}
	};
	return (
		<form onSubmit={handleSubmit}>
			<h2> Add Category {inputValue} </h2>
			<p> {inputValue} </p>
			<input type="text" value={inputValue} onChange={handleInputChange} />
		</form>
	);
};

AddCategory.propTypes = {
	setCategories: PropTypes.func.isRequired,
};
