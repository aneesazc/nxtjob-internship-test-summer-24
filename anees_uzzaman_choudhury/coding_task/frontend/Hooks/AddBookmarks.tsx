"use client";
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { BookmarkFilledIcon, BookmarkIcon } from '@radix-ui/react-icons';

const BookmarkButton = ({ postId }: { postId: string }) => {
    const [isBookmarked, setIsBookmarked] = useState(false);
    const [isLoading, setIsLoading] = useState(false);
  
    useEffect(() => {
      const fetchBookmarks = async () => {
        const userId = localStorage.getItem('userId');
        if (!userId) {
          console.log('User not logged in');
          return;  // User not logged in
        }
  
        try {
          // Make sure to update the URL to match your API endpoint
          const response = await axios.get(`http://127.0.0.1:8787/api/v1/users/${userId}/showBookmarkIds`);
          if (response.data && response.data.bookmarkIds) {
            setIsBookmarked(response.data.bookmarkIds.includes(postId));
          }
          console.log('Bookmarks fetched:', response.data);
        } catch (error) {
          console.error('Error fetching bookmarks:', error);
        }
      };
  
      fetchBookmarks();
    }, [postId]);
  
    const toggleBookmark = async () => {
      const userId = localStorage.getItem('userId');
      if (!userId) {
        alert('You must be logged in to bookmark posts.');
        return;
      }
  
      setIsLoading(true);
  
      try {
        const url = `http://127.0.0.1:8787/api/v1/users/${userId}/bookmark/${postId}`;
        // Toggle based on the current state
        // const method = isBookmarked ? 'delete' : 'post';
        await axios.put(url);
        setIsBookmarked(!isBookmarked);  // Update the state to reflect the change
        console.log('Bookmark toggled:', !isBookmarked);
      } catch (error) {
        console.error('Failed to toggle bookmark:', error);
        alert('Failed to update bookmark.');
      } finally {
        setIsLoading(false);
      }
    };
  
    return (
      <button onClick={toggleBookmark} disabled={isLoading}>
        {isBookmarked ? 
          <BookmarkFilledIcon className="text-[#7047EB] w-4 h-4 sm:w-5 sm:h-5" /> : 
          <BookmarkIcon className="text-gray-900 w-4 h-4 sm:w-5 sm:h-5" />
        }
      </button>
    );
  };

export default BookmarkButton;
