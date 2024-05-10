"use client";
import React, { useEffect } from 'react';
import axios from 'axios';
import { useAppDispatch } from '@/lib/hooks';
import { setPosts } from '@/lib/features/posts/postSlice';

const GetPosts = () => {
  const dispatch = useAppDispatch();

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const response = await axios.get("http://127.0.0.1:8787/api/v1/posts/introduction");
        dispatch(setPosts(response.data)); // Dispatch the setPosts action with the fetched data
        console.log('Posts fetched:', response.data);
      } catch (error) {
        console.error('Failed to fetch posts:', error);
      }
    };

    fetchPosts();
  }, [dispatch]);

  return <></>;
};

export default GetPosts;
