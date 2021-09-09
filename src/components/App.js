import React, { useState, useEffect } from "react";
import Header from "./Header";
import ListingsContainer from "./ListingsContainer";
import Search from "./Search";

function App() {
	const [list, getList] = useState([]);
	const [useSelected, setUseSelected] = useState("");
	// GET
	useEffect(() => {
		fetch("http://localhost:6001/listings")
			.then((response) => response.json())
			.then((data) => {
				//console.log(data)
				getList(data);
			});
	}, []);
	console.log(list);
	// DELETE
	function deleteCard(id) {
		console.log(id);
		fetch(`http://localhost:6001/listings/${id}`, {
			method: "DELETE",
			headers: {
				"Content-type": "application/json",
			},
		})
			.then((response) => response.json())
			.then((data) => {
				const updatedList = list.filter((item) => item.id !== id);
				console.log("DELETE", data);
				getList(updatedList);
			});
	}
	//SEARCH NY NAME
	function searchData(e) {
		setUseSelected(e);
	}
	const renderList = list.filter(
		(item) => useSelected === "" || useSelected === item.description
	);

	/////
	return (
		<div className="app">
			<Header searchData={searchData} />

			<ListingsContainer
				currentList={renderList}
				deleteCard={deleteCard}
			/>
		</div>
	);
}

export default App;
