import React, {useState} from "react";
import {useNavigate} from "react-router-dom";
import {addDoc} from "firebase/firestore";
import {userCollectionRef} from "../firestore_collection";

const UserDetails = () => {
	const navigate = useNavigate();
	const [userName, setUserName] = useState('');
	const [userAge, setUserAge] = useState('');
	const [userGender, setUserGender] = useState('male');

	const addUserInfo =  (e) => {
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
	const showGender = () => {
		let user_gender = document.getElementById('user_gender');
		let user_birthday = document.getElementById('user_birthday');
		let user_name = document.getElementById('user_name');

		user_gender.style.display = 'block';
		user_birthday.style.display = 'none';
		user_name.style.display = 'none';
	}
	const showBirthday = () => {
		let user_gender = document.getElementById('user_gender');
		let user_birthday = document.getElementById('user_birthday');
		let user_name = document.getElementById('user_name');

		user_gender.style.display = 'none';
		user_birthday.style.display = 'block';
		user_name.style.display = 'none';
	}
	const showName = () => {
		let user_gender = document.getElementById('user_gender');
		let user_birthday = document.getElementById('user_birthday');
		let user_name = document.getElementById('user_name');

		user_gender.style.display = 'none';
		user_birthday.style.display = 'none';
		user_name.style.display = 'block';
	}

	return (
		<div>
			<div id='user_gender' style={{display: 'block'}}>
				<p>{userGender}</p>
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
				<button onClick={showBirthday}>NEXT</button>
			</div>

			<div id='user_birthday' style={{display: 'none'}}>
				<div id='return_gender' onClick={showGender}>back</div>
				<input type='number'
					   id='age'
					   style={{display: 'block'}}
					   placeholder='age'
					   value={userAge}
					   onChange={(e) => setUserAge(e.target.value)}
				/>
				<button onClick={showName}>NEXT</button>
			</div>

			<div id='user_name' style={{display: 'none'}}>
				<div id='return_birthday' onClick={showBirthday}>back</div>
				<input type='text'
					   id='name'
					   style={{display: 'block'}}
					   placeholder='type username'
					   value={userName}
					   onChange={(e) => setUserName(e.target.value)}
				/>
				<button onClick={addUserInfo}>NEXT</button></div>
		</div>
	)
}

export default UserDetails;
