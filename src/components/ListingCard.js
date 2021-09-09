import Reac, { useState } from "react";

function ListingCard({ info, deleteCard }) {
	const [toggleLike, setToggleLike] = useState(false);

	function handleLike() {
		setToggleLike(!toggleLike);
	}
	function handleDelete() {
		deleteCard(info.id);
	}
	return (
		<li className="card">
			<div className="image">
				<span className="price">$0</span>
				<img src={info.image} alt={info.description} />
			</div>
			<div className="details">
				{toggleLike ? (
					<button
						className="emoji-button favorite active"
						onClick={handleLike}
					>
						★
					</button>
				) : (
					<button
						className="emoji-button favorite"
						onClick={handleLike}
					>
						☆
					</button>
				)}
				<strong>{info.description}</strong>
				<span> · {info.location}</span>
				<button className="emoji-button delete" onClick={handleDelete}>
					🗑
				</button>
			</div>
		</li>
	);
}

export default ListingCard;
