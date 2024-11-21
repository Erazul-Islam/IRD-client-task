/* eslint-disable prettier/prettier */
"use server"

import axiosInstance from "@/libs/axiosInstance"





export const getAllCategory = async () => {
    try {
        const { data } = await axiosInstance.get('/')

        return data
    }
    catch (err) {
        throw new Error("yaap")
    }
}
export const getAllSubCategory = async () => {
    try {
        const { data } = await axiosInstance.get('/sub-categories')

        return data
    }
    catch (err) {
        throw new Error("yaap")
    }
}

export const getAllDua = async () => {
    try {
        const { data } = await axiosInstance.get('/dua')

        return data
    }
    catch (err) {
        throw new Error("yaap")
    }
}