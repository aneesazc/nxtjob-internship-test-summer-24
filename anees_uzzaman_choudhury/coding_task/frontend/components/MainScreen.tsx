"use client";
import { useAppDispatch, useAppSelector } from "@/lib/hooks";
import React from "react";
import { FaRegCommentDots } from "react-icons/fa";
import ChangeLikes from "./ChangeLikes";

const MainScreen = () => {
  const posts = useAppSelector(state => state.posts.posts);
  const dispatch = useAppDispatch();

  return (
    <div>
      <div className="flex py-3 items-center content-center gap-custom self-stretch flex-wrap bg-white">
        <button className='flex justify-center items-center rounded-lg bg-lightPurple text-primaryPurple px-2 sm:px-3 sm:py-2 gap-1'><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none">
          <path d="M10.3333 5.99999C10.3333 6.18409 10.1841 6.33332 9.99996 6.33332C9.81586 6.33332 9.66663 6.18409 9.66663 5.99999C9.66663 5.81589 9.81586 5.66666 9.99996 5.66666C10.1841 5.66666 10.3333 5.81589 10.3333 5.99999Z" stroke="#7047EB" />
          <path d="M8.00002 3.16666H12.8334V7.99999L8.36904 12.4472C7.83632 12.9779 6.9704 12.9633 6.45582 12.415L3.52664 9.294C3.02696 8.76159 3.04846 7.9263 3.57487 7.4203L8.00002 3.16666Z" stroke="#7047EB" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        </svg>Product</button>
        <button className='flex justify-center items-center rounded-lg bg-lightPurple text-primaryPurple px-2 sm:px-3 sm:py-2 gap-1'><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none">
          <path d="M10.3333 5.99999C10.3333 6.18409 10.1841 6.33332 9.99996 6.33332C9.81586 6.33332 9.66663 6.18409 9.66663 5.99999C9.66663 5.81589 9.81586 5.66666 9.99996 5.66666C10.1841 5.66666 10.3333 5.81589 10.3333 5.99999Z" stroke="#7047EB" />
          <path d="M8.00002 3.16666H12.8334V7.99999L8.36904 12.4472C7.83632 12.9779 6.9704 12.9633 6.45582 12.415L3.52664 9.294C3.02696 8.76159 3.04846 7.9263 3.57487 7.4203L8.00002 3.16666Z" stroke="#7047EB" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        </svg>Webinar</button>
        <button className='flex justify-center items-center rounded-lg bg-lightPurple text-primaryPurple px-2 sm:px-3 sm:py-2 gap-1'><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none">
          <path d="M10.3333 5.99999C10.3333 6.18409 10.1841 6.33332 9.99996 6.33332C9.81586 6.33332 9.66663 6.18409 9.66663 5.99999C9.66663 5.81589 9.81586 5.66666 9.99996 5.66666C10.1841 5.66666 10.3333 5.81589 10.3333 5.99999Z" stroke="#7047EB" />
          <path d="M8.00002 3.16666H12.8334V7.99999L8.36904 12.4472C7.83632 12.9779 6.9704 12.9633 6.45582 12.415L3.52664 9.294C3.02696 8.76159 3.04846 7.9263 3.57487 7.4203L8.00002 3.16666Z" stroke="#7047EB" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        </svg>Training</button>
        <button className='flex justify-center items-center rounded-lg bg-lightPurple text-primaryPurple px-2 sm:px-3 sm:py-2 gap-1'><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none">
          <path d="M10.3333 5.99999C10.3333 6.18409 10.1841 6.33332 9.99996 6.33332C9.81586 6.33332 9.66663 6.18409 9.66663 5.99999C9.66663 5.81589 9.81586 5.66666 9.99996 5.66666C10.1841 5.66666 10.3333 5.81589 10.3333 5.99999Z" stroke="#7047EB" />
          <path d="M8.00002 3.16666H12.8334V7.99999L8.36904 12.4472C7.83632 12.9779 6.9704 12.9633 6.45582 12.415L3.52664 9.294C3.02696 8.76159 3.04846 7.9263 3.57487 7.4203L8.00002 3.16666Z" stroke="#7047EB" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        </svg>Label</button>
      </div>
      <hr className="h-px my-1 sm:my-2 bg-gray-200 border-0"></hr>
      <main className="flex-grow py-1 sm:py-2">
        {posts.map((post) => (
          <div key={post.userId} className="p-3 sm:p-4 bg-white border shadow rounded-lg mb-3 sm:mb-5">
            <div className="flex items-center justify-between">
              <div className="flex items-center">
                <div className='bg-primaryOrange w-6 h-6 sm:w-8 sm:h-8 rounded-full flex items-center justify-center text-white text-xs sm:text-sm'>
                  {post.username?.charAt(0).toUpperCase()}
                </div>
                <h2 className="text lg sm:text-xl font-medium ml-2">{post.username}</h2>
              </div>
              <span className="text-xs sm:text-sm text-gray-500">11/16/2021 8:14 AM</span>
            </div>
            <p className="text-base sm:text-lg">{post.content}</p>
            <div className="flex justify-between items-center mt-4">
              <div className="flex items-center space-x-4">
                <ChangeLikes post={post} />
                <div className="flex items-center">
                  <FaRegCommentDots className="mr-1 w-3 h-3 sm:w-4 sm:h-4" /><span className="text-xs sm:text-sm text-gray-500">20</span>
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
