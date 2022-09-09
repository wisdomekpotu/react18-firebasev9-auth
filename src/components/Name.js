import React, {useState} from "react";
import {useNavigate} from "react-router-dom";
import {addDoc} from "firebase/firestore";
import {userCollectionRef} from "../firestore_collection";


const Name = () => {
	const navigate = useNavigate();
	const [userName, setUserName] = useState('')
	const saveUserName =  (e) => {
		e.preventDefault();
	if (userName === '') {
		return
	}
	addDoc(userCollectionRef, {userName})
		.then(response => {
			console.log(response);
			navigate("/birthday");
		}).catch(error => console.log(error.message))
	}

	return (
		<div>
			<input type='text'
				   placeholder='type username'
				   value={userName}
				   onChange={(e) => setUserName(e.target.value)}
			/>
			<button onClick={saveUserName}>next</button>
		</div>
	)
}

export default Name;
