import React, {useState} from "react";
import {useNavigate} from "react-router-dom";


const Name = () => {
	const [userName, setUserName] = useState('');

	let navigate = useNavigate();
	function handleClick() {
		navigate("/home");
	}

	return (
		<label>
			<input value={userName}
				   onChange={(event) => setUserName(event.target.value)}
			/>
			<button onClick={handleClick}>NEXT</button>

		</label>
	)
}

export default Name;
