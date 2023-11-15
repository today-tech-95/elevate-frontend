import React from 'react'
import ErrorOutlineIcon from '@mui/icons-material/ErrorOutline'
export const ErrorResponse = ({errorMsg,retryHandler}) => {
  return (
    <div className='flex justify-center px-4 py-4 w-full'>
        <div className='w-2/4 text-gray-500 text-center'>
            <ErrorOutlineIcon className='text-5xl w-full my-2'/>
            <div className='w-full'>
                <h5 className="font-bold text-sm">
                    {errorMsg.message}
                </h5>
                <label className='text-xs'>{errorMsg.code}</label>
                <button
                    onClick={()=>retryHandler()}
                    className="flex justify-center items-center gap-4 w-1/2 mx-auto px-4 py-2 mt-4 text-sm font-medium leading-5 text-center text-white transition-colors duration-150 bg-[#1C1F23] border border-transparent rounded-lg active:bg-[#1C1F23] hover:bg-[#1C1F23] focus:outline-none"
                >
                  Retry
                </button>
            </div>
        </div>
    </div>
  )
}
