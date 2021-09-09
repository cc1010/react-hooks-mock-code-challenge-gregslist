import React, { useState } from "react";

function Search({ searchData }) {
	const [formData, setFormData] = useState("");
	function handleData(e) {
		setFormData(e.target.value);
		console.log(formData);
	}

	function handleSubmit(e) {
		e.preventDefault();
		searchData(formData);
	}

	return (
		<form className="searchbar" onSubmit={handleSubmit}>
			<input
				type="text"
				id="search"
				placeholder="search free stuff"
				value={formData}
				onChange={handleData}
			/>
			<button type="submit">🔍</button>
		</form>
	);
}

export default Search;
