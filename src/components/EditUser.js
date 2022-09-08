import React, {useState} from "react";
import { db } from "../firebase-config";
import { doc, updateDoc } from "firebase/firestore";


const EditUser = () => {
	const [userName, setUserName] = useState('');
	const [id, setId] = useState('');

	const handleSubmit = (e) => {
		e.preventDefault();
		if (userName === '' || id === '') {
			return
		}
		const docRef = doc(db, 'users', id);
		updateDoc(docRef, {userName})
			.then(response => {
				console.log(response)
			}).catch(error => console.log(error.message))
	}
	return (
		<div>
			<h4>Edit user</h4>
			<form onSubmit={handleSubmit}>
				<label htmlFor='name'>user id</label>
				<input id='id'
					   type='text'
					   value={id}
					   onChange={(e) => setId(e.target.value)}
				/>
				<label htmlFor='name'>user name</label>
				<br/>
				<input id='name'
					   type='text'
					   value={userName}
					   onChange={(e) => setUserName(e.target.value)}
				/>

				<button type='submit'>update USER</button>
			</form>
		</div>
	)
}

 export default EditUser;