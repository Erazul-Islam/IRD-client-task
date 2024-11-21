/* eslint-disable import/order */
/* eslint-disable prettier/prettier */
import React from 'react';
import { IoMdSearch } from "react-icons/io";
import AccordionComponent from './Accordion';


const Categories = () => {

    return (
        <div className='md:ml-14 '>
            <div className='mt-12 '>
                <h1 className='text-black'>Dua page</h1>
                <button className='bg-[#1FA45B] w-[329px] mt-6 h-[57px] rounded-t-lg'>Categories</button>
                <div className=' bg-white w-[329px] h-[637px] rounded-lg'>
                    <div className="relative ">
                        <input
                            className=" mt-4 ml-4 border bg-white text-black border-gray-400 w-[300px] h-[45px] pl-12 rounded-sm"
                            placeholder="Search by Categories"
                            type="text"
                        />
                        <IoMdSearch
                            className="absolute top-10 left-7 transform -translate-y-1/2 text-gray-500"
                            size={25}
                        />
                    </div>
                    <div>
                        <AccordionComponent />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Categories;