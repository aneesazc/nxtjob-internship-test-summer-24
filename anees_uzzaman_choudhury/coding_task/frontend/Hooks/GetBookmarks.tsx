"use client";
import React, { useEffect, useState } from 'react';
import axios from 'axios';

const Bookmarks = () => {
    const [bookmarks, setBookmarks] = useState<any[]>([]);
    const [loading, setLoading] = useState<boolean>(true);
    const [error, setError] = useState<string>('');

  useEffect(() => {
    const userId = localStorage.getItem('userId');
    if (!userId) {
      setError('User is not logged in');
      setLoading(false);
      return;
    }

    const fetchBookmarks = async () => {
      try {
        const response = await axios.get(`http://127.0.0.1:8787/api/v1/users/${userId}/bookmarks`);
        setBookmarks(response.data.bookmarks);
        setLoading(false);
      } catch (err) {
        setError('Failed to fetch bookmarks');
        setLoading(false);
      }
    };

    fetchBookmarks();
  }, []);

  if (loading) {
    return <div>Loading bookmarks...</div>;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  return (
    <div>
      <h2>My Bookmarks</h2>
      {bookmarks.length > 0 ? (
        <ul>
          {bookmarks.map(bookmark => (
            <li key={bookmark.postId}>
              <div>
                <h3>{bookmark.content}</h3>
                <p>Posted by: {bookmark.User.username}</p>
              </div>
            </li>
          ))}
        </ul>
      ) : (
        <p>No bookmarks found.</p>
      )}
    </div>
  );
};

export default Bookmarks;
