/* eslint-disable @next/next/no-img-element */
/* eslint-disable react/self-closing-comp */
/* eslint-disable prettier/prettier */
import React from 'react';

const Settings = () => {
    return (
        <div className='bg-white ml-8 mt-24 shadow-lg rounded-2xl w-[300px]'>
            <h1 className='text-[#393939] text-xl pl-28 pt-14 font-semibold'>Settings</h1>
            <div className='bg-[#F7F8FA] w-[270px] ml-4 mt-4 h-[50px]'>
                <div className='flex'>
                    <div className='bg-[#1FA45B] w-[3px] h-[50px] rounded-xl'>
                    </div>
                    <div className='bg-[#E8F0F5] mt-2 w-9 h-9 rounded-full  ml-6 '>
                        <img className='mt-2 ml-[5px]' src="https://i.ibb.co.com/jDfh93q/language.png" alt="" />
                    </div>
                    <div>
                        <h1 className='text-[#1FA45B] ml-6 mt-[14px]'>Language Settings</h1>
                    </div>
                </div>
                <div className='flex'>
                    
                    <div className='bg-[#E8F0F5] mt-2 w-9 h-9 rounded-full  ml-6 '>
                        <img className='mt-[5px] ml-[5px]' src="https://i.ibb.co.com/Hg2H9FD/general.png" alt="" />
                    </div>
                    <div>
                        <h1 className='text-[#868686] ml-6 mt-[14px]'>General Settings</h1>
                    </div>
                </div>
                <div className='flex'>
                    
                    <div className='bg-[#E8F0F5] mt-2 w-9 h-9 rounded-full  ml-6 '>
                        <img className='mt-[8px] ml-[7px]' src="https://i.ibb.co.com/GQbmBXQ/ruqyah.png" alt="" />
                    </div>
                    <div>
                        <h1 className='text-[#868686] ml-6 mt-[14px]'>Font Settings</h1>
                    </div>
                </div>
                <div className='flex'>
                   
                    <div className='bg-[#E8F0F5] mt-2 w-9 h-9 rounded-full  ml-6 '>
                        <img className='mt-[8px] ml-[7px]' src="https://i.ibb.co.com/8KKCzsD/books.png" alt="" />
                    </div>
                    <div>
                        <h1 className='text-[#868686] ml-6 mt-[14px]'>Appearence Settings</h1>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Settings;