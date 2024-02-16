import axios from "axios";
import { useEffect,useState } from "react";
import Spinner from "./Spinner";
import useGif from "../hooks/useGif";

// const API_KEY=process.env.REACT_API_KEY;

export default function Random()
{
   
    // const API_KEY="w6CNLgCnhkFnouTSmIXNSm6UKqqZ6Shs"

    // const [gif,setGif]=useState("");

    // const [loading,setLoading]=useState(false);
    
    // console.log(API_KEY)
    // const url=`https://api.giphy.com/v1/gifs/random?api_key=${API_KEY}`;
    
    //  async function fetchData()
    // {
    //     setLoading(true);
    //     const {data}=await axios.get(url);

    //     let response=data?.data?.images?.downsized_large?.url;

    //     setGif(response);   
    //     setLoading(false);
    // }

    //     useEffect(()=>{
    //             fetchData()
    //     },[]);

    const {loading,fetchData,gif}=useGif();


    // fetchData();

    return (
        <div className="w-9/12 flex flex-col bg-green-500 mx-auto space-y-3  rounded-xl pb-4">
            
            <div className="flex justify-center w-full">
                 <h1 className="font-bold underline mx-auto pt-3 text-xl">Random Gif</h1>
            </div>

            {
                loading?<Spinner/>: <img src={gif} width={450}
                className="mx-auto max-h-[300px]"
            />
            }
           
            
            <button className="py-2 px-3 bg-yellow-500 rounded-xl w-1/2 mx-auto font-bold text-xl felx items-center justify-center"
                onClick={()=>fetchData()}
            >
                Generate    
            </button>
            
            
        </div>
    );
}