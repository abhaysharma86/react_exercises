import React, { useState } from "react";

const UserProfile = () => {
  const [user, setUser] = useState({ name: "John", age: 30 });

  const updateAge = () => {
    setUser((prevUser) => ({
      ...prevUser, // Spread previous state
      age: prevUser.age + 1 // Update only the age
    }));
  };

  return (
    <div>
      <h1>{user.name}'s Profile</h1>
      <p>Age: {user.age}</p>
      <button onClick={updateAge}>Increment Age</button>
    </div>
  );
};

export default UserProfile;
