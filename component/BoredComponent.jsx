"use client"
import React, { useEffect, useState } from 'react'
import { CSSProperties } from "react";
import PropagateLoader from "react-spinners/PropagateLoader";

const BoredComponent = () => {
  const [data, setData] = useState('');
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    getThingsToDo()
  }, [])


  const getThingsToDo = async () => {
    try {
      const timestamp = new Date().getTime();
      const url = `https://www.boredapi.com/api/activity?timestamp=${timestamp}`;
      const response = await fetch(url);
      const result = await response.json();
      setData(result);
      setIsLoading(false)
    } catch (e) {
      console.log('Error:', e);
      setIsLoading(false)
    }
  };



  return (
    <div className="grid h-screen px-4 bg-[#f5f5f7] place-content-center">
      <div className="text-center rounded-lg shadow-lg px-28 py-8 bg-white">
        {
          isLoading ? (
            <div className = "py-4">
              <PropagateLoader color="#36d7b7" />
            </div>
          ) : (
            <div>
              <p className="text-2xl font-bold tracking-tight text-gray-900 sm:text-4xl">
                {data.activity}
              </p>
              <br />
              <span className='px-2 py-1 text-xs rounded-full bg-blue-200'>
                {data.type}
              </span>
              <br />
            </div>
          )
        }


        <a
          onClick={getThingsToDo}
          className="cursor-pointer inline-block px-5 py-3 mt-6 text-sm font-medium text-white bg-indigo-600 rounded hover:bg-indigo-700 focus:outline-none focus:ring"
        >
          Generate
        </a>
      </div>
    </div>

  )
}

export default BoredComponent