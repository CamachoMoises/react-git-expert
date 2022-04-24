import React, { useState } from 'react';

export const AddCategory = () => {
    const [inputValue, setInputValue] = useState('New category')

    const handleInputChange=(e)=>{
        setInputValue(e.target.value)
    }
    const handleSubmit= (e)=>{
        e.preventDefault()
        console.log('submitted');
    }   
	return (
		<form onSubmit={handleSubmit}>
			<h2> Add Category {inputValue} </h2> 
            <input
                type="text"
                value={inputValue}
                onChange={handleInputChange}
            />

		</form>
	);
};
