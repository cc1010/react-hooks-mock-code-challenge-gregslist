import React from "react";
import ListingCard from "./ListingCard";

function ListingsContainer({ currentList, deleteCard }) {
	const renderList = currentList.map((item) => (
		<ListingCard key={item.id} info={item} deleteCard={deleteCard} />
	));
	return (
		<main>
			<ul className="cards">{renderList}</ul>
		</main>
	);
}

export default ListingsContainer;
