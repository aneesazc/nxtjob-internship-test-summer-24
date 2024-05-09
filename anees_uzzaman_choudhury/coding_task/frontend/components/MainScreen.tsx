"use client";
import React from "react";
import { FaRegCommentDots } from "react-icons/fa";

const MainScreen = () => {
  // dummy posts
  const posts = [
    {
      id: 1,
      username: "Name",
      content: "This is the content of post 1",
      likes: 10,
      comments: 5
    },
    {
      id: 2,
      username: "Name",
      content: "This is the content of post 2",
      likes: 20,
      comments: 5
    },
    {
      id: 3,
      username: "Name",
      content: "This is the content of post 3",
      likes: 30,
      comments: 5
    }
  ]
  return (
    <div>
      <div className="flex p-3 items-center content-center gap-custom self-stretch flex-wrap bg-white">
        <button className='flex justify-center items-center rounded-lg bg-lightPurple text-primaryPurple px-2 py-1 gap-1'><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none">
          <path d="M10.3333 5.99999C10.3333 6.18409 10.1841 6.33332 9.99996 6.33332C9.81586 6.33332 9.66663 6.18409 9.66663 5.99999C9.66663 5.81589 9.81586 5.66666 9.99996 5.66666C10.1841 5.66666 10.3333 5.81589 10.3333 5.99999Z" stroke="#7047EB" />
          <path d="M8.00002 3.16666H12.8334V7.99999L8.36904 12.4472C7.83632 12.9779 6.9704 12.9633 6.45582 12.415L3.52664 9.294C3.02696 8.76159 3.04846 7.9263 3.57487 7.4203L8.00002 3.16666Z" stroke="#7047EB" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
        </svg>Product</button>
        <button className='flex justify-center items-center rounded-lg bg-lightPurple text-primaryPurple px-2 py-1 gap-1'><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none">
          <path d="M10.3333 5.99999C10.3333 6.18409 10.1841 6.33332 9.99996 6.33332C9.81586 6.33332 9.66663 6.18409 9.66663 5.99999C9.66663 5.81589 9.81586 5.66666 9.99996 5.66666C10.1841 5.66666 10.3333 5.81589 10.3333 5.99999Z" stroke="#7047EB" />
          <path d="M8.00002 3.16666H12.8334V7.99999L8.36904 12.4472C7.83632 12.9779 6.9704 12.9633 6.45582 12.415L3.52664 9.294C3.02696 8.76159 3.04846 7.9263 3.57487 7.4203L8.00002 3.16666Z" stroke="#7047EB" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
        </svg>Webinar</button>
        <button className='flex justify-center items-center rounded-lg bg-lightPurple text-primaryPurple px-2 py-1 gap-1'><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none">
          <path d="M10.3333 5.99999C10.3333 6.18409 10.1841 6.33332 9.99996 6.33332C9.81586 6.33332 9.66663 6.18409 9.66663 5.99999C9.66663 5.81589 9.81586 5.66666 9.99996 5.66666C10.1841 5.66666 10.3333 5.81589 10.3333 5.99999Z" stroke="#7047EB" />
          <path d="M8.00002 3.16666H12.8334V7.99999L8.36904 12.4472C7.83632 12.9779 6.9704 12.9633 6.45582 12.415L3.52664 9.294C3.02696 8.76159 3.04846 7.9263 3.57487 7.4203L8.00002 3.16666Z" stroke="#7047EB" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
        </svg>Training</button>
        <button className='flex justify-center items-center rounded-lg bg-lightPurple text-primaryPurple px-2 py-1 gap-1'><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none">
          <path d="M10.3333 5.99999C10.3333 6.18409 10.1841 6.33332 9.99996 6.33332C9.81586 6.33332 9.66663 6.18409 9.66663 5.99999C9.66663 5.81589 9.81586 5.66666 9.99996 5.66666C10.1841 5.66666 10.3333 5.81589 10.3333 5.99999Z" stroke="#7047EB" />
          <path d="M8.00002 3.16666H12.8334V7.99999L8.36904 12.4472C7.83632 12.9779 6.9704 12.9633 6.45582 12.415L3.52664 9.294C3.02696 8.76159 3.04846 7.9263 3.57487 7.4203L8.00002 3.16666Z" stroke="#7047EB" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
        </svg>Label</button>
      </div>

      <main className="flex-grow p-5">
        {posts.map((post) => (
          <div key={post.id} className="p-4 bg-white border shadow rounded-lg mb-5">
            <div className="flex items-center">
              <div className='bg-green-500 w-6 h-6 rounded-full flex items-center justify-center text-white text-sm'>
                {post.username.charAt(0).toUpperCase()}
              </div>
              <h2 className="text-xl font-bold ml-2">{post.username}</h2>
            </div>
            <p>{post.content}</p>
            <div className="flex justify-between items-center mt-4">
              <div className="flex items-center space-x-4">
                <span className="text-sm text-gray-500">{post.likes} Likes</span>
                <div className="flex items-center">
                  <FaRegCommentDots className="mr-1" /><span className="text-sm text-gray-500">{post.comments}</span>
                </div>
              </div>
              <button className="text-blue-500">Save</button>
            </div>
          </div>
        ))}
      </main>
    </div>
  );
};

export default MainScreen;
