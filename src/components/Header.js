import React from "react";
import Search from "./Search";

function Header({ searchData }) {
	return (
		<header>
			<h1>
				<span className="logo" role="img">
					☮
				</span>
				gregslist
			</h1>
			<Search searchData={searchData} />
		</header>
	);
}

export default Header;
