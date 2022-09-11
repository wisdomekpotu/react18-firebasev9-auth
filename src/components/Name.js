import React, {useState} from "react";
import {useNavigate} from "react-router-dom";
import {addDoc} from "firebase/firestore";
import {userCollectionRef} from "../firestore_collection";


const Name = () => {
	const navigate = useNavigate();
	const [userName, setUserName] = useState('');
	const [userAge, setUserAge] = useState('');
	const [userGender, setUserGender] = useState('male');
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
		if (userAge === '' || userName === '' || userGender === '') {
			return
		}
		addDoc(userCollectionRef, {userAge, userName, userGender})
			.then(response => {
				console.log(response);
				navigate("/home");
			}).catch(error => console.log(error.message))
	}
	const hide1 = () => {
		let d1 = document.getElementById('1');
		let d2 = document.getElementById('2');
		let d3 = document.getElementById('3');

		d1.style.display = 'none';
		d2.style.display = 'block';
		d3.style.display = 'none';
	}
	const hide2 = () => {
		let d1 = document.getElementById('1');
		let d2 = document.getElementById('2');
		let d3 = document.getElementById('3');

		d1.style.display = 'none';
		d2.style.display = 'none';
		d3.style.display = 'block';
	}
	const hi = () => {
		let d3 = document.getElementById('3');
		console.log('hi')
	}

	return (
		<div>
			<div id='1' style={{display: 'block'}}>
				<input type='text'
					   id='name'
					   style={{display: 'block'}}
					   placeholder='type username'
					   value={userName}
					   onChange={(e) => setUserName(e.target.value)}
				/>
			<button onClick={hide1}>1</button></div>
			<div id='2'style={{display: 'none'}}>2
				<input type='number'
					   id='age'
					   style={{display: 'block'}}
					   placeholder='age'
					   value={userAge}
					   onChange={(e) => setUserAge(e.target.value)}
				/>
				<button onClick={hide2}>2</button>
			</div>
			<div id='3'style={{display: 'none'}}>
				<p>{userGender}</p>
				{/*<input type='text'*/}
				{/*	   id='gender'*/}
				{/*	   style={{display: 'block'}}*/}
				{/*	   placeholder='gender'*/}
				{/*	   value={userGender}*/}
				{/*	   onChange={(e) => setUserGender(e.target.value)}*/}
				{/*/>*/}
				<input type='radio'
					   style={{display: 'block'}}
					   value='male'
					   checked={userGender === 'male' ? true : false}
					   onChange={(event) => setUserGender(event.target.value)}
				/>

				<input type='radio'
					   style={{display: 'block'}}
					   value='female'
					   checked={userGender === 'female' ? true : false}
					   onChange={(event) => setUserGender(event.target.value)}
				/>
				<button
					onClick={saveUserAge}
					id='btn'
					style={{display: 'block'}}
				>next main</button></div>





		</div>
	)
}

export default Name;
