import React, { useState } from "react";

const UserForm = ({ handleFormSubmit }) => {
  const [username, setUsername] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    handleFormSubmit(username);
  };

  return (
    <form className="max-w-md" onSubmit={handleSubmit}>
      <input
        type="text"
        id="search"
        placeholder="Search a GitHub User"
        className="w-full bg-indigo-700 border-none rounded-lg px-4 py-2 mb-4 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-indigo-500 text-xl"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
      />
    </form>
  );
};

export default UserForm;
