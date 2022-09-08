import React, {useState} from "react";
import { useNavigate} from "react-router-dom";

const Gender = () => {
	const [userGender, setUserGender] = useState('male');
	let navigate = useNavigate();
	function handleClick() {
		navigate("/birthday");
	}
	return (
		<div>
			<p>{userGender}</p>
			<input type='radio'
				   value='male'
				   checked={userGender === 'male' ? true : false}
				   onChange={(event) => setUserGender(event.target.value)}
			/>

			<input type='radio'
				   value='female'
				   checked={userGender === 'female' ? true : false}
				   onChange={(event) => setUserGender(event.target.value)}
			/>

			<button onClick={handleClick}>Submit</button>
		</div>	)

}

export default Gender;


