"use client"
import Link from "next/link";
import { usePathname } from 'next/navigation'
import React, { useState, useEffect, useRef } from "react";

const SideBar = () => {
  const pathname = usePathname()
  const [isOpen, setIsOpen] = useState(false);
  const sidebarRef = useRef<HTMLElement | null>(null);

  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };

  const handleClickOutside = (event: MouseEvent) => {
    if (sidebarRef.current && !sidebarRef.current.contains(event.target as Node)) {
      setIsOpen(false);
    }
  };

  const handleResize = () => {
    if (window.innerWidth >= 1024) {
      setIsOpen(false);
    }
  };

  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);
    window.addEventListener("resize", handleResize);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <>
      <button onClick={toggleSidebar} aria-controls="default-sidebar" type="button" className="inline-flex items-center p-2 mt-2 ms-3 text-sm text-gray-500 rounded-lg lg:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600">
        <span className="sr-only">Open sidebar</span>
        <svg className="w-6 h-6" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
          <path clip-rule="evenodd" fill-rule="evenodd" d="M2 4.75A.75.75 0 012.75 4h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 4.75zm0 10.5a.75.75 0 01.75-.75h7.5a.75.75 0 010 1.5h-7.5a.75.75 0 01-.75-.75zM2 10a.75.75 0 01.75-.75h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 10z"></path>
        </svg>
      </button>

      <aside ref={sidebarRef} id="default-sidebar" className={`fixed top-16 left-0 z-40 w-[243px] h-screen transition-transform bg-white ${isOpen ? 'translate-x-0' : '-translate-x-full'} lg:translate-x-0`} aria-label="Sidebar">
        <div className="h-full px-3 py-4 overflow-y-auto bg-white">
          <ul className="space-y-2 font-medium">
            <li>
              <Link href="#" className="flex items-center p-2 text-black rounded-lg hover:bg-gray-100 group">
                <span className="ms-3">Rules</span>
              </Link>
            </li>
            <li>
              <Link href="introduction" className={`flex items-center p-2 text-gray-900 rounded-lg hover:bg-purple-400 link ${pathname === '/introduction' ? 'bg-lightPurple text-primaryPurple' : ''}`}>

                <span className="flex-1 ms-3 whitespace-nowrap">Introduction</span>
                <span className="inline-flex items-center justify-center px-2 ms-3 text-sm font-medium text-gray-800 bg-gray-100 rounded-full dark:bg-gray-700 dark:text-gray-300">Pro</span>
              </Link>
            </li>
            <li>
              <Link href="/announcements" className={`flex items-center p-2 text-gray-900 rounded-lg hover:bg-purple-400 link ${pathname === '/announcements' ? 'bg-lightPurple text-primaryPurple' : ''}`}>

                <span className="flex-1 ms-3 whitespace-nowrap">Announcements</span>
                <span className="inline-flex items-center justify-center w-3 h-3 p-3 ms-3 text-sm font-medium text-blue-800 bg-blue-100 rounded-full">3</span>
              </Link>
            </li>
            <li>
              <Link href="/success" className={`flex items-center p-2 text-gray-900 rounded-lg hover:bg-purple-400 link ${pathname === '/success' ? 'bg-lightPurple text-primaryPurple' : ''}`}>

                <span className="flex-1 ms-3 whitespace-nowrap">Success Stories</span>
              </Link>
            </li>
            <li>
              <Link href="/" className={`flex items-center p-2 text-gray-900 rounded-lg hover:bg-purple-400 link ${pathname === '/' ? 'bg-lightPurple text-primaryPurple' : ''}`}>

                <span className={`flex-1 ms-3 whitespace-nowrap link `}>Career Discussions</span>
              </Link>
            </li>
            <li>
              <Link href="#" className="flex items-center p-2 text-gray-900 rounded-lg hover:bg-gray-100  group">

                <span className="flex-1 ms-3 whitespace-nowrap">Sign Up</span>
              </Link>
            </li>
          </ul>
        </div>
      </aside>
    </>
  );
};

export default SideBar;
