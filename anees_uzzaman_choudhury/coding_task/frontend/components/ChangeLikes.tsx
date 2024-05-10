"use client";
import LoginModal from '@/framer/LoginModal';
import axios from 'axios';
import React, { useState } from 'react';

const ChangeLikes = ({ post }: {post: any}) => {
  const [isOpen, setIsOpen] = useState(false);
  const [liked, setLiked] = useState(false);
  const [likes, setLikes] = useState(post?.likes);
  const [isLoading, setIsLoading] = useState(false);

  const toggleLike = async () => {
    const userId = localStorage.getItem('userId'); // Retrieve userId from local storage
    if (!userId) {
      console.error('No user ID found, user must be logged in to like posts');
      setIsOpen(true);
      return;
    }

    setIsLoading(true);
    const expectedLikes = liked ? likes - 1 : likes + 1; // Optimistically calculate the expected likes count
    setLikes(expectedLikes);
    setLiked(!liked);

    try {
      const response = await axios.post(`http://127.0.0.1:8787/api/v1/posts/${post.postId}/like`, { userId });

      // Verify the server response
      if (response.data.message !== (liked ? 'Unliked' : 'Liked')) {
        // Rollback if not successful
        setLikes(likes);
        setLiked(liked);
      } else {
        // Optionally update likes count based on response if necessary
        // setLikes(response.data.newLikeCount); // If the server sends back the new count
      }
    } catch (error) {
      console.error('Failed to toggle like:', error);
      // Rollback in case of error
      setLikes(likes);
      setLiked(liked);
    }
    setIsLoading(false);
  };

  return (
    <button onClick={toggleLike} disabled={isLoading} className="text-xs sm:text-sm text-gray-500" aria-pressed={liked}>
      {likes} Likes
      <LoginModal isOpen={isOpen} setIsOpen={setIsOpen} />
    </button>
  );
};

export default ChangeLikes;


