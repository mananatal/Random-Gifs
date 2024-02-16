import { useState,useEffect } from "react";
import axios from "axios";


export default function useGif(tag)
{
    const API_KEY="w6CNLgCnhkFnouTSmIXNSm6UKqqZ6Shs"

    const [gif,setGif]=useState(tag);

    const [loading,setLoading]=useState(false);
    
   
    const url=`https://api.giphy.com/v1/gifs/random?api_key=${API_KEY}`;
    
     async function fetchData()
    {
        setLoading(true);
        const {data}=await axios.get(tag ? `${url}&tag=${tag}`: url );

        let response=data?.data?.images?.downsized_large?.url;

        setGif(response);   
        setLoading(false);
    }

        useEffect(()=>{
                fetchData()
        },[]);



        return {gif,loading,fetchData};
}