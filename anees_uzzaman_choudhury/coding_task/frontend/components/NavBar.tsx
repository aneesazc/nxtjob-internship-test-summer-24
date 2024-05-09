import React from 'react'
import LogoHeader from './LogoHeader'
import { MagnifyingGlassIcon, BookmarkIcon, BellIcon, QuestionMarkCircledIcon } from '@radix-ui/react-icons'

const NavBar = ({headingVal}: {headingVal: string}) => {
    return (
        <div className='flex w-full'>
            <div>
                <LogoHeader />
            </div>
            <div className='flex w-full'>
                <nav className="flex justify-between space-x-4 border-b px-4 w-full h-[var(--spacing-16,4rem)]">
                    <div className='flex justify-center items-center'>
                        < svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" >
                            <path d="M19.2543 12.0043C19.2538 16.0083 16.0074 19.2538 12.0033 19.2533C7.99925 19.2528 4.75376 16.0064 4.7543 12.0023C4.75484 7.99825 8.00121 4.75276 12.0053 4.7533C16.0093 4.75384 19.2548 8.00022 19.2543 12.0043Z" stroke="#3F3F50" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                            <path d="M16.2543 12.0039C16.254 14.3511 14.3509 16.2536 12.0037 16.2533C9.65651 16.253 7.75398 14.3499 7.7543 12.0027C7.75462 9.65552 9.65766 7.75298 12.0049 7.7533C14.3521 7.75362 16.2546 9.65667 16.2543 12.0039Z" stroke="#3F3F50" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                            <path d="M13.2543 12.0035C13.2542 12.6938 12.6945 13.2534 12.0041 13.2533C11.3138 13.2532 10.7542 12.6935 10.7543 12.0031C10.7544 11.3128 11.3141 10.7532 12.0045 10.7533C12.6948 10.7534 13.2544 11.3131 13.2543 12.0035Z" stroke="#3F3F50" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                        </svg >
                        <span className='ml-2 text-lg font-semibold'>{headingVal}</span>
                    </div>
                    <div className='flex items-center'>
                        <div className="flex items-center justify-between bg-[#F7F7F8] rounded-md px-4">
                            <input type="text" placeholder="Search..." className="w-full py-2 outline-none bg-transparent focus:ring focus:ring-blue-500 focus:border-blue-500" />
                            <div className="flex items-center ml-4">
                                <MagnifyingGlassIcon className="w-6 h-6 text-gray-500" />
                            </div>
                        </div>

                        <BookmarkIcon className="ml-3 w-6 h-6" />
                        <BellIcon className="ml-2 w-6 h-6" />
                        <QuestionMarkCircledIcon className="ml-2 w-6 h-6" />
                    </div>
                </nav>
            </div>
        </div>
    )
}

export default NavBar