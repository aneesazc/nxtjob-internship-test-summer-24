"use client";
import { useState } from 'react';
import PostDialog from './PostDialog';
import MainScreen from './MainScreen';
; // Make sure the path matches where your PostDialog component is located

const TopView = () => {
    const [dialogOpen, setDialogOpen] = useState(false);

    return (
        <div className='bg-gray-100 flex justify-center w-full'>
            <div className='flex flex-col w-full max-w-4xl bg-white lg:ml-28 text-left pl-8'>
                <div>
                    < svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" >
                        <path d="M19.2543 12.0043C19.2538 16.0083 16.0074 19.2538 12.0033 19.2533C7.99925 19.2528 4.75376 16.0064 4.7543 12.0023C4.75484 7.99825 8.00121 4.75276 12.0053 4.7533C16.0093 4.75384 19.2548 8.00022 19.2543 12.0043Z" stroke="#3F3F50" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                        <path d="M16.2543 12.0039C16.254 14.3511 14.3509 16.2536 12.0037 16.2533C9.65651 16.253 7.75398 14.3499 7.7543 12.0027C7.75462 9.65552 9.65766 7.75298 12.0049 7.7533C14.3521 7.75362 16.2546 9.65667 16.2543 12.0039Z" stroke="#3F3F50" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                        <path d="M13.2543 12.0035C13.2542 12.6938 12.6945 13.2534 12.0041 13.2533C11.3138 13.2532 10.7542 12.6935 10.7543 12.0031C10.7544 11.3128 11.3141 10.7532 12.0045 10.7533C12.6948 10.7534 13.2544 11.3131 13.2543 12.0035Z" stroke="#3F3F50" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                    </svg >
                </div>
                <div className='mb-4'>
                    <h1 className="text-3xl font-bold mb-3">Welcome to NxtJob</h1>
                    <p className="text-gray-500 text-xs font-light mb-2">Share your thoughts and ideas with the community</p>
                </div>
                <div className='flex w-full mb-4'>
                    <div className='bg-green-500 w-12 h-12 rounded-full flex items-center justify-center'>
                        A
                    </div>
                    <button
                        className="py-2 px-4 bg-gray-100 rounded-3xl text-gray-400 font-semibold shadow-md hover:bg-purple-300 w-full mx-2"
                        onClick={() => setDialogOpen(true)} // Triggers the dialog to open
                    >
                        Start a post
                    </button>
                </div>
                <hr className="h-px my-4 bg-gray-200 border-0"></hr>
                <MainScreen />


                {/* PostDialog component, passing props to control its visibility */}
                <PostDialog open={dialogOpen} setOpen={setDialogOpen} />
            </div>
        </div>
    );
}

export default TopView;


