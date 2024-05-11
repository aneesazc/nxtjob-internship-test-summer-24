"use client";
import React, { useEffect } from 'react';
import axios from 'axios';
import { useAppDispatch } from '@/lib/hooks';
import { setPosts } from '@/lib/features/posts/postSlice';

const GetPosts = ({channelId}: {channelId: string}) => {
  const dispatch = useAppDispatch();

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const response = await axios.get(`http://127.0.0.1:8787/api/v1/posts/${channelId}`);
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







// import { fetchPostsByChannel, setPosts } from '@/lib/features/posts/postSlice';
// import { useAppDispatch, useAppSelector } from '@/lib/hooks';
// import React, { useEffect } from 'react';

// const GetPosts = ({ channelId }: { channelId: string }) => {
//   const dispatch = useAppDispatch();
//   const postsStatus = useAppSelector(state => state.posts.status);
//   const postsError = useAppSelector(state => state.posts.error);

//   useEffect(() => {
//     dispatch(fetchPostsByChannel(channelId));
//   }, [channelId, dispatch]);

//   // You can render a loading indicator or error message based on the posts status or error
//   if (postsStatus === 'loading') {
//     return <p>Loading posts...</p>;
//   }

//   if (postsError) {
//     return <p>Error fetching posts: {postsError}</p>;
//   }
//   return null; // or your actual component that requires the posts data
// };

// export default GetPosts;