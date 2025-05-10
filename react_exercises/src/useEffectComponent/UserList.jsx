import React, { useState, useEffect } from 'react';

function UserList() {
  // Step 1: Create a state to hold the users
  const [users, setUsers] = useState([]);

  // Step 2: Use useEffect to fetch data when component loads
  useEffect(() => {
    // Fetch data from fake API
    fetch('https://jsonplaceholder.typicode.com/users')
      .then((res) => res.json())           // Convert response to JSON
      .then((data) => setUsers(data));     // Save users to state
  }, []); // Empty array = run once when component loads

  // Step 3: Display the data
  return (
    <div>
      <h2>User List</h2>
      {users.length === 0 ? (
        <p>Loading users...</p>
      ) : (
        <ul>
          {users.map((user) => (
            <li key={user.id}>
              <b> UserName:</b>  {user.name} <br/> <b>EmailId:</b>  {user.email}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default UserList;
