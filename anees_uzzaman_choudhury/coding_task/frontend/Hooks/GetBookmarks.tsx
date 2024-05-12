"use client";
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useAppDispatch, useAppSelector } from '@/lib/hooks';
import { RootState } from '@/lib/store';
import { fetchBookmarksFailure, fetchBookmarksStart, fetchBookmarksSuccess } from '@/lib/features/bookmarks/bookmarksSlice';



const BookmarksComponent = () => {
    const dispatch = useAppDispatch();
    const { bookmarks, loading, error } = useAppSelector(state => state.bookmarks);
  
    useEffect(() => {
        const userId = localStorage.getItem('userId');
        if (!userId) {
            dispatch(fetchBookmarksFailure('User not logged in'));
            return;
        }
  
        dispatch(fetchBookmarksStart());
  
        axios.get(`http://127.0.0.1:8787/api/v1/users/${userId}/bookmarks`)
            .then(response => {
                dispatch(fetchBookmarksSuccess(response.data.bookmarks));
            })
            .catch(error => {
                dispatch(fetchBookmarksFailure(error.message));
            });
    }, [dispatch]);
  
    if (loading) return <p>Loading...</p>;
    if (error) return <p>Error: {error}</p>;
  
    return (
        <div>
            <h2>Your Bookmarks</h2>
            {bookmarks.map((bookmark: any) => (
                <div key={bookmark.postId}>
                    <h3>{bookmark?.User?.username}</h3>
                    <h2>{bookmark.content}</h2>
                    <h4>{bookmark.channelId}</h4>
                </div>
            ))}
        </div>
    );
  };


export default BookmarksComponent;

// const Bookmarks = () => {
//     const [bookmarks, setBookmarks] = useState<any[]>([]);
//     const [loading, setLoading] = useState<boolean>(true);
//     const [error, setError] = useState<string>('');

//   useEffect(() => {
//     const userId = localStorage.getItem('userId');
//     if (!userId) {
//       setError('User is not logged in');
//       setLoading(false);
//       return;
//     }

//     const fetchBookmarks = async () => {
//       try {
//         const response = await axios.get(`http://127.0.0.1:8787/api/v1/users/${userId}/bookmarks`);
//         setBookmarks(response.data.bookmarks);
//         setLoading(false);
//       } catch (err) {
//         setError('Failed to fetch bookmarks');
//         setLoading(false);
//       }
//     };

//     fetchBookmarks();
//   }, []);

//   if (loading) {
//     return <div>Loading bookmarks...</div>;
//   }

//   if (error) {
//     return <div>Error: {error}</div>;
//   }

//   return (
//     <div>
//       <h2>My Bookmarks</h2>
//       {bookmarks.length > 0 ? (
//         <ul>
//           {bookmarks.map(bookmark => (
//             <li key={bookmark.postId}>
//               <div>
//                 <h3>{bookmark.content}</h3>
//                 <p>Posted by: {bookmark.User.username}</p>
//               </div>
//             </li>
//           ))}
//         </ul>
//       ) : (
//         <p>No bookmarks found.</p>
//       )}
//     </div>
//   );
// };