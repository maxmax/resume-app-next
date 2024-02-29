'use client';
import React, { useState } from 'react';

const RedirectForm: React.FC = () => {
  const [username, setUsername] = useState('');

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setUsername(event.target.value);
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (username.trim() !== '') {
      window.location.href = `/resume/${username}`;
    }
  };

  return (
    <form onSubmit={handleSubmit} className="pt-4">
      <div className="flex">
        <input
          type="text"
          value={username}
          onChange={handleInputChange}
          placeholder="Enter username"
          className="px-4 py-2 shadow-sm focus:ring-indigo-500 focus:border-indigo-500 block w-full sm:text-sm border-gray-300 rounded-md"
        />
        <button
          type="submit"
          className="ml-2 px-4 py-2 bg-indigo-600 text-white rounded-md hover:bg-indigo-700 focus:outline-none focus:ring focus:border-indigo-300 active:bg-indigo-800"
        >
          Generate
        </button>
      </div>
    </form>
  );
};

export default RedirectForm;

