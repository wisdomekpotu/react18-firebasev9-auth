import React, {useState} from "react";
import {useNavigate} from "react-router-dom";
import {addDoc} from "firebase/firestore";
import {userCollectionRef} from "../firestore_collection";
import Birthday from "./Birthday";
import Home from "./Home";
import Gender from "./Gender";


const Name = () => {
	const navigate = useNavigate();
	const [userName, setUserName] = useState('');
	const [userAge, setUserAge] = useState('');
	const [toggle, setToggle] = useState(false);
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
	const saveUserAge =  (e) => {
		e.preventDefault();
		if (userAge === '' || userName === '') {
			return
		}
		addDoc(userCollectionRef, {userAge, userName})
			.then(response => {
				console.log(response);
				navigate("/birthday");
			}).catch(error => console.log(error.message))
	}
	const shovHide = () => {
		let a = document.getElementById('name')
		let b = document.getElementById('age')
		let c = document.getElementById('btn')
		let d = document.getElementById('show')
		d.style.display = 'none';
		if (a.style.display === 'none') {
			a.style.display = 'block'
		} else if (a.style.display === 'block') {
			a.style.display = 'none'
		}
		if (b.style.display === 'none') {
			b.style.display = 'block'
		} else if (b.style.display === 'block') {
			b.style.display = 'none'
		}
		if (c.style.display === 'none') {
			c.style.display = 'block'
		} else if (c.style.display === 'block') {
			c.style.display = 'none'
		}
	}

	return (
		<div>
			<input type='text'
				   id='name'
				   style={{display: 'block'}}
				   placeholder='type username'
				   value={userName}
				   onChange={(e) => setUserName(e.target.value)}
			/>
			<input type='text'
				   id='age'
				   style={{display: 'none'}}
				   placeholder='age'
				   value={userAge}
				   onChange={(e) => setUserAge(e.target.value)}
			/>
			<button onClick={shovHide}
					id='show'
					style={{display: 'block'}}
			>
				NEXT
			</button>
			<button
				onClick={saveUserAge}
				id='btn'
				style={{display: 'none'}}
			>next main</button>
		</div>
	)
}

export default Name;
