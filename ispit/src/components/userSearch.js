import React, { useState } from 'react';

const UserSearch = () => {
	const [username, setUsername] = useState('');
	const [user, setUser] = useState(null);

	const fetchUser = async () => {
		const response = await fetch(`https://api.github.com/users/${username}`);
		const data = await response.json();
		setUser(data);
	};

	return (
		<div>
			<input
				type='text'
				placeholder='Enter GitHub username'
				value={username}
				onChange={(e) => setUsername(e.target.value)}
			/>
			<button onClick={fetchUser}>Search</button>
			{user && (
				<div>
					<h2>{user.name}</h2>
					<p>{user.bio}</p>
					<img src={user.avatar_url} alt='User avatar' />
				</div>
			)}
		</div>
	);
};

export default UserSearch;
