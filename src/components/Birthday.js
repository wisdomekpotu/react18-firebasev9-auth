import React from "react";
import { useNavigate} from "react-router-dom";

const Birthday = () => {
	let navigate = useNavigate();
	function handleClick() {
		navigate("/name");
	}
	return (
		<div>
			<input type="text" placeholder="birthday"/>
			<input type="button" value="Next" onClick={handleClick}/>
		</div>

	)
}

export default Birthday;