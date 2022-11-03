import { useState } from 'react';

import Detailed from './Detailed';

export default function Vacancies ({jobs, isShown, setIsShown}) {

    const [detailedJob, setDetailedJob] = useState([]);

    const clickHandler = (e) => {
        setIsShown(current => !current);
        jobs.map((item, index) => (
            e.currentTarget.id == index ?
            setDetailedJob([item])
            :
            null
        ))
    }
    

    return(
        <>
        {isShown ?
        <Detailed
        detailedJob={detailedJob}
        setIsShown={setIsShown}
        isShown={isShown}
        />
        :
        <div className="pt-10">
        {jobs.map( (item, index) => (
                <div 
                className="mx-auto max-w-7xl py-12 px-4 sm:px-6 lg:flex lg:items-center 
                lg:justify-between lg:py-16 lg:px-8 bg-white mb-5 rounded-lg h-60 
                hover:shadow hover:scale-105 cursor-pointer transition ease-in-out
                duration-300 max-[1250px]:w-[90%]
                max-[1024px]:flex max-[610px]:flex-col max-[610px]:items-center max-[610px]:justify-center"
                onClick={clickHandler}
                id={index}
                key={index + 1}
                >
                    <img src={item.pictures[0]} alt="place" className="rounded-[50%]
                    w-[170px] h-[140px] mr-10 max-[610px]:h-[40%] max-[610px]:w-[15%]" />
                    <div key={index}>
                        <h2 className="font-proxima font-bold mb-5 max-[610px]:text-[15px] max-[440px]:text-[14px] max-[440px]:mb-[5px]">{item.title}</h2>
                        <p key={item.id} className="font-proxima mb-5 max-[610px]:text-[14px] max-[440px]:text-[13px] max-[440px]:mb-[5px]">{item.description.slice(0, 150)}...</p>
                        <div key={index + 2} className="flex">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                            strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 max-[610px]:w-[20px] max-[610px]:h-[20px]">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" />
                                <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" />
                            </svg>
                            <p key={item.phone} className="font-proxima ml-2 max-[610px]:text-[14px] max-[440px]:text-[13px]">{item.address}</p>
                        </div>
                    </div>
                </div>
        ))}
        </div>
        }
        </>
    )
}