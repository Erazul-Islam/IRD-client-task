/* eslint-disable prettier/prettier */
import React from 'react';
import { IoMdSearch } from "react-icons/io";


const Categories = () => {
    return (
        <div className='md:ml-14'>
            <div className='mt-12 '>
                <h1 className='text-black'>Dua page</h1>
                <button className='bg-[#1FA45B] w-[329px] mt-6 h-[57px] rounded-t-lg'>Categories</button>
                <div className='bg-[#f7f2f2] w-[329px] h-[637px] rounded-lg'>
                    <div className="relative ">
                        <input
                            className="bg-[#f7f2f2] mt-5 ml-4 border text-black border-gray-400 w-[300px] h-[35px] pl-12 rounded-md"
                            placeholder="Search by Categories"
                            type="text"
                        />
                        <IoMdSearch
                            className="absolute top-10 left-7 transform -translate-y-1/2 text-gray-500"
                            size={25}
                        />
                    </div>

                </div>
            </div>
        </div>
    );
};

export default Categories;