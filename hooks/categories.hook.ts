/* eslint-disable prettier/prettier */

import { useQuery } from "@tanstack/react-query";

import { getAllCategory, getAllDua, getAllSubCategory } from "@/services/getData";



export const useGetCategory = () => {
    return useQuery({
        queryKey : ['GET_POSTS'],
        queryFn : async () => await getAllCategory()
    })
};
export const useGetSubCategory = () => {
    return useQuery({
        queryKey : ['SUB_CATEGOY'],
        queryFn : async () => await getAllSubCategory()
    })
};
export const useGetDua = () => {
    return useQuery({
        queryKey : ['DUa'],
        queryFn : async () => await getAllDua()
    })
};