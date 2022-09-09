import React, {useState} from "react";
import { useNavigate} from "react-router-dom";
import {addDoc} from "firebase/firestore";
import {userCollectionRef} from "../firestore_collection";

const Birthday = () => {
	const navigate = useNavigate();
	const [userAge, setUserAge] = useState('')
	const saveUserAge =  (e) => {
		e.preventDefault();
		if (userAge === '') {
			return
		}
		addDoc(userCollectionRef, {userAge})
			.then(response => {
				console.log(response);
				navigate("/gender");
			}).catch(error => console.log(error.message))
	}

	return (
		<div>
			<input type='text'
				   placeholder='type age'
				   value={userAge}
				   onChange={(e) => setUserAge(e.target.value)}
			/>
			<button onClick={saveUserAge}>next</button>
		</div>
	)
}

export default Birthday;