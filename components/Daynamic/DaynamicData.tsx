/* eslint-disable prettier/prettier */
import { useGetDaynamicDua, useGetDua } from '@/hooks/categories.hook';
import { DuaData } from '@/types';
import React from 'react';

interface DataDisplayComponentProps {
    selectedCategoryId: number | null
}


const DaynamicData: React.FC<DataDisplayComponentProps> = ({ selectedCategoryId }) => {


    const { data } = useGetDua()

    const filterData = data?.filter((one: DuaData) => one.cat_id === selectedCategoryId)


    return (
        <div className='mt-20 ml-8'>
            <div className='text-black'>

                <div className='mt-4 bg-[#FFFFFF] w-[800px] h-[55px] pt-4 rounded-lg'> <span className='text-[#1FA45B] pl-4 mt-8'>Section</span> </div>
                <div className='max-h-[640px] overflow-y-scroll scrollbar-thumb-blue-800'>
                    {
                        filterData?.map((one: DuaData) => <div key={one.id}>

                            <div className='bg-[#FFFFFF] mt-6 pt-6 rounded-lg pl-6 w-[800px]'>
                                <h1 className='text-[#1FA45B]'>{one?.dua_name_en}</h1>
                                <div className='text-[#393939] pt-4 font-bold'>{one?.top_en}</div>
                                <div className='text-right pr-4 mt-6 text-xl'>{one?.dua_arabic}</div>
                                <div className='mt-6 italic text-[#393939]'>{one.transliteration_en === null ? '' : <span className='font-semibold'> Transliteration : {one?.transliteration_en} </span>} </div>
                                <div className='mt-6 text-[#393939]'>{one.transliteration_en === null ? '' : <span className=''> Translation : {one?.translation_en} </span>} </div>
                                <h1 className='text-[#1FA45B] mt-6'>Reference</h1>
                                <h1 className='text-[#393939] pt-1 font-bold pb-3'>{one?.refference_en}</h1>
                                {/* <audio src={one?.audio} controls>
                                    <track kind="metadata" />
                                </audio> */}

                            </div>

                        </div>)
                    }
                </div>
            </div>
        </div>
    );
};

export default DaynamicData;