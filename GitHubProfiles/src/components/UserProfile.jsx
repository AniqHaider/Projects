import React from "react";

const UserProfile = ({ userData, reposData }) => {
  return (
    <div className="max-w-md bg-indigo-700 rounded-lg shadow-lg p-8">
      <div className="flex items-center">
        <img
          src={userData.avatar_url}
          alt={userData.name}
          className="w-24 h-24 rounded-full border-4 border-indigo-800"
        />
        <div className="ml-4">
          <h2 className="text-2xl font-bold">
            {userData.name || userData.login}
          </h2>
          {userData.bio && <p>{userData.bio}</p>}
          <ul className="flex mt-2">
            <li className="mr-4">
              {userData.followers} <strong>Followers</strong>
            </li>
            <li className="mr-4">
              {userData.following} <strong>Following</strong>
            </li>
            <li className="mr-4">
              {userData.public_repos} <strong>Repos</strong>
            </li>
          </ul>
        </div>
      </div>
      <div className="mt-4">
        {reposData.length > 0 ? (
          <div>
            <h3 className="text-lg font-semibold mb-2">Latest Repositories:</h3>
            <ul>
              {reposData.map((repo) => (
                <li key={repo.id} className="mb-1">
                  <a
                    href={repo.html_url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-indigo-200 hover:underline"
                  >
                    {repo.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        ) : (
          <p>No repositories found.</p>
        )}
      </div>
    </div>
  );
};

export default UserProfile;
