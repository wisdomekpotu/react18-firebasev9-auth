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
