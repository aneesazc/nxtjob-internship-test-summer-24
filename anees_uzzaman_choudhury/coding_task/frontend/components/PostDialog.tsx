"use client";
import { Dialog, DialogOverlay, DialogContent, DialogTitle, DialogDescription, DialogClose } from '@radix-ui/react-dialog';
import * as Switch from '@radix-ui/react-switch';
import { CiText } from "react-icons/ci";
import { CgAttachment } from "react-icons/cg";
import { BsEmojiSmile } from "react-icons/bs";

const PostDialog = ({ open, setOpen }: { open: any, setOpen: any }) => {
  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogOverlay className="fixed inset-0 bg-black bg-opacity-25"  onClick={() => setOpen(false)} />

      <DialogContent className="fixed inset-0 flex items-center justify-center"
      >
        <div className="bg-gray-100 py-6 rounded-lg w-5/6 max-w-4xl h-[70%] mx-auto my-8 overflow-auto">
          <div className='px-6 bg-gray-100'>
            <DialogTitle className="text-lg font-bold">Introduce Yourself</DialogTitle>
            <DialogDescription className="text-sm">
              It will help you increase the reach within the community.
            </DialogDescription>
          </div>

          <textarea className="p-2 lg:p-4 rounded w-full mt-4 h-[55%]"
            placeholder="What's on your mind?"></textarea>
          <div className="flex p-3 items-center content-center gap-custom self-stretch flex-wrap bg-white">
            <button className='flex justify-center items-center rounded-lg bg-lightPurple px-2 py-1 gap-1'><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none">
              <path d="M10.3333 5.99999C10.3333 6.18409 10.1841 6.33332 9.99996 6.33332C9.81586 6.33332 9.66663 6.18409 9.66663 5.99999C9.66663 5.81589 9.81586 5.66666 9.99996 5.66666C10.1841 5.66666 10.3333 5.81589 10.3333 5.99999Z" stroke="#7047EB" />
              <path d="M8.00002 3.16666H12.8334V7.99999L8.36904 12.4472C7.83632 12.9779 6.9704 12.9633 6.45582 12.415L3.52664 9.294C3.02696 8.76159 3.04846 7.9263 3.57487 7.4203L8.00002 3.16666Z" stroke="#7047EB" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
            </svg>Product</button>
            <button className='flex justify-center items-center rounded-lg bg-lightPurple px-2 py-1 gap-1'><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none">
              <path d="M10.3333 5.99999C10.3333 6.18409 10.1841 6.33332 9.99996 6.33332C9.81586 6.33332 9.66663 6.18409 9.66663 5.99999C9.66663 5.81589 9.81586 5.66666 9.99996 5.66666C10.1841 5.66666 10.3333 5.81589 10.3333 5.99999Z" stroke="#7047EB" />
              <path d="M8.00002 3.16666H12.8334V7.99999L8.36904 12.4472C7.83632 12.9779 6.9704 12.9633 6.45582 12.415L3.52664 9.294C3.02696 8.76159 3.04846 7.9263 3.57487 7.4203L8.00002 3.16666Z" stroke="#7047EB" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
            </svg>Webinar</button>
            <button className='flex justify-center items-center rounded-lg bg-lightPurple px-2 py-1 gap-1'><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none">
              <path d="M10.3333 5.99999C10.3333 6.18409 10.1841 6.33332 9.99996 6.33332C9.81586 6.33332 9.66663 6.18409 9.66663 5.99999C9.66663 5.81589 9.81586 5.66666 9.99996 5.66666C10.1841 5.66666 10.3333 5.81589 10.3333 5.99999Z" stroke="#7047EB" />
              <path d="M8.00002 3.16666H12.8334V7.99999L8.36904 12.4472C7.83632 12.9779 6.9704 12.9633 6.45582 12.415L3.52664 9.294C3.02696 8.76159 3.04846 7.9263 3.57487 7.4203L8.00002 3.16666Z" stroke="#7047EB" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
            </svg>Training</button>
            <button className='flex justify-center items-center rounded-lg bg-lightPurple px-2 py-1 gap-1'><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none">
              <path d="M10.3333 5.99999C10.3333 6.18409 10.1841 6.33332 9.99996 6.33332C9.81586 6.33332 9.66663 6.18409 9.66663 5.99999C9.66663 5.81589 9.81586 5.66666 9.99996 5.66666C10.1841 5.66666 10.3333 5.81589 10.3333 5.99999Z" stroke="#7047EB" />
              <path d="M8.00002 3.16666H12.8334V7.99999L8.36904 12.4472C7.83632 12.9779 6.9704 12.9633 6.45582 12.415L3.52664 9.294C3.02696 8.76159 3.04846 7.9263 3.57487 7.4203L8.00002 3.16666Z" stroke="#7047EB" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
            </svg>Label</button>
          </div>
          <div className='flex justify-start gap-4 pl-6 bg-white pb-2'>
            <div className="bg-gray-100 rounded-full p-2 text-xl">
              <CiText />
            </div>
            <div className="bg-gray-100 rounded-full p-2 text-xl">
              <CgAttachment />
            </div>
            <div className="bg-gray-100 rounded-full p-2 text-xl">
              <BsEmojiSmile />
            </div>
          </div>
          <div className='flex justify-between'>
            <div>
              <form className='pl-6 pt-4 pb-1'>
                <Switch.Root
                  className="w-[38px] h-[20px] bg-[#D1D1DB] rounded-full relative shadow-[0 2px 10px] shadow-[#D1D1DB] focus:shadow-[0 0 0 2px] focus:shadow-[#D1D1DB] data-[state=checked]:bg-[#D1D1DB] outline-none cursor-default"
                  id="airplane-mode"
                >
                  <Switch.Thumb className="block w-[18px] h-[18px] bg-[#FFFFFF] rounded-full shadow-[0 2px 2px] shadow-[#D1D1DB] transition-transform duration-100 translate-x-0.5 will-change-transform data-[state=checked]:translate-x-[19px]" />
                </Switch.Root>
              </form>
              <p className="font-medium pl-6">
                Post Anonymously
              </p>

            </div>
            <div className="flex justify-end space-x-2 mt-4 px-6">
              <DialogClose asChild>
                <button className="px-4 py-1 lg:px-10 lg:py-2 border-2 rounded-xl border-gray-300 text-lg text-black bg-white hover:bg-gray-200">Cancel</button>
              </DialogClose>
              <button className="px-5 py-1 lg:px-10 lg:py-2 border-2 rounded-xl border-gray-300 text-lg text-white bg-primaryPink hover:bg-pink-600">Post</button>
            </div>
          </div>

        </div>
      </DialogContent>
    </Dialog>
  );
};

export default PostDialog;
