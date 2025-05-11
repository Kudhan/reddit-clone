import React from 'react';
import Image from 'next/image';
import {
  ChevronDownIcon,
  HomeIcon,
  StarIcon,
  BeakerIcon,
  MagnifyingGlassIcon,
  BellIcon,
  ChatBubbleLeftIcon,
  GlobeAltIcon,
  PlusIcon,
  SparklesIcon,
  VideoCameraIcon,
  MegaphoneIcon,
  Bars3Icon,
} from '@heroicons/react/16/solid';

const Header = () => {
  return (
    <div className="sticky top-0 z-50 flex items-center bg-white px-4 py-2 shadow">
      {/* Logo */}
      <div className="relative h-10 w-20 flex-shrink-0 cursor-pointer">
        <Image 
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRl5oK-fHsFKvAHYDM9e4_CB6LNZGvKIQ3_7A&s" 
          alt="Papareact Logo"
          fill
          className="object-contain"
        />
      </div>

      {/* Home section */}
      <div className="mx-7 flex items-center xl:min-w-[300px]">
        <HomeIcon className="h-5 w-5" />
        <p className="ml-2 hidden flex-1 lg:inline">Home</p>
        <ChevronDownIcon className="h-5 w-5" />
      </div>

      {/* Search bar */}
      <form className="flex flex-1 items-center space-x-2 rounded-sm border-gray-200 bg-gray-100 px-3 py-1">
        <MagnifyingGlassIcon className="h-6 w-6 text-gray-400" />
        <input 
          type="text" 
          placeholder="Search reddit" 
          className="flex-1 bg-transparent outline-none"
        />
        <button type="submit" hidden />
      </form>

      {/* Icons */}
      <div className="flex space-x-2 text-gray-500 hidden lg:inline-flex">
        <SparklesIcon className="icon" />
        <GlobeAltIcon className="icon" />
        <VideoCameraIcon className="icon" />
        <hr className='h-10 border border-gray-100'/>
        <ChatBubbleLeftIcon className="icon" />
        <BellIcon className="icon" />
        <PlusIcon className="icon" />
        <MegaphoneIcon className="icon" />
      </div>
      <div className='ml-5 flex items-center lg:hidden '>
        <Bars3Icon className='icon'/>
      </div>

      {/*Sign in/Sing out button*/}
      <div className='hidden lg:flex items-center space-x-2 border border-gray-100'>

      <div className='relative h-5 w-5 flex-shrink-0'>
        {/*Signin*/}
        <Image 
          src="https://toppng.com/uploads/preview/reddit-icon-reddit-logo-transparent-115628752708pqmsy4kgm.png" 
          alt="reddit" 
          objectFit='contain'
          layout='fill'
        />
      </div>
      <p className='text-gray-400'>Sign in</p>

      </div>
    </div>
  );
};

export default Header;
