import React, { useState } from "react";
import UserForm from "./UserForm";
import UserProfile from "./UserProfile";

const APIURL = "https://api.github.com/users/";

const GithubProfiles = () => {
  const [userData, setUserData] = useState(null);
  const [reposData, setReposData] = useState([]);
  const [error, setError] = useState("");

  const getUser = (username) => {
    fetch(APIURL + username)
      .then((response) => {
        if (response.ok) {
          return response.json();
        } else {
          throw new Error("There is no profile with this username !");
        }
      })
      .then((data) => {
        setUserData(data);
        getRepos(username);
      })
      .catch((error) => {
        setUserData(null);
        setReposData([]);
        setError(error.message);
      });
  };

  const getRepos = (username) => {
    fetch(APIURL + username + "/repos?sort=created")
      .then((response) => {
        if (response.ok) {
          return response.json();
        } else {
          throw new Error("Problem fetching repos");
        }
      })
      .then((data) => {
        setReposData(data.slice(0, 5));
      })
      .catch((error) => {
        setReposData([]);
        setError(error.message);
      });
  };

  const handleFormSubmit = (username) => {
    if (username) {
      getUser(username);
      setError("");
    }
  };

  return (
    <div className="flex flex-col items-center justify-center h-screen bg-purple-600 text-white">
      <UserForm handleFormSubmit={handleFormSubmit} />
      {userData ? (
        <UserProfile userData={userData} reposData={reposData} />
      ) : (
        error && <p className="text-red-500 font-extrabold">{error}</p>
      )}
    </div>
  );
};

export default GithubProfiles;
