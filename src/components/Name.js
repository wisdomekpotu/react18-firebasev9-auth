import React, {useEffect, useState} from "react";
import {useNavigate} from "react-router-dom";
import {collection, getDocs} from "firebase/firestore";
import {db} from "../firebase-config";


const Name = () => {
	const [userName, setUserName] = useState('');
	const [users, setUsers] = useState([]);

	useEffect(() => {
		getUsers()
	}, [])

	useEffect(() => {
		console.log(users);
	}, [users])

	const getUsers = () => {
		const userCollectionRef = collection(db, 'users');
		getDocs(userCollectionRef).then(response => {
			const usrs = response.docs.map(doc => ({
				data: doc.data(),
				id: doc.id,
			}))
			setUsers(usrs)
		}).catch(error => console.log(error.message))
	}

	let navigate = useNavigate();
	function handleClick() {
		navigate("/home");
	}

	const handleSubmit = (e) => {
		e.preventDefault();
		if (userName === '') {
			return
		}
		alert(userName);
	}

	return (
		<div>
			<label>
				<input value={userName}
					   onChange={(event) => setUserName(event.target.value)}
				/>
				<button onClick={handleClick}>NEXT</button>
				<ul>
					{users.map(user =>
						<li key={user.id}>{user.data.name}</li>
					)}
				</ul>
				<button onClick={() => getUsers()}>REFRESH USERS</button>
			</label>
			<h4>Add user</h4>
			<form onSubmit={handleSubmit}>
				<label htmlFor='name'>user name</label>
				<input id='name'
					   type='text'
					   value={userName}
					   onChange={(e) => setUserName(e.target.value)}
				/>
				<button type='submit'>ADD USER</button>
			</form>
		</div>
	)
}

export default Name;
