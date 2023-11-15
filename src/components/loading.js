import { BounceLoader } from "react-spinners";
import React from "react";

export function Loading(){
    return (
        <div className="flex justify-center items-center h-[500px] w-full">
            <BounceLoader color="#2467F6" />
        </div>
    )
}