/* eslint-disable prettier/prettier */

"use client"

import { useGetDaynamicDua } from '@/hooks/categories.hook';
import React from 'react';

const DaynamicPage = ({ params }: { params: { id: number } }) => {

    const id = Number(params.id); 

    const {data} = useGetDaynamicDua(id)
    console.log(data)

    return (
        <div>
            
        </div>
    );
};

export default DaynamicPage;