
export default function Detailed ({detailedJob}) {

    const clickHandler = () => {
        document.location.reload();
    }

    return (
        <>
        <div className="flex items-center justify-between w-[70%] bg-white mx-auto
        mt-[25px] pb-[10px] border-b-[2px] border-[rgba(58, 69, 98, 0.2)
        max-[600px]:flex-col max-[600px]:border-[0]">
            <h2 className="text-[25px] max-[600px]:w-full
            max-[600px]:pb-[5px] max-[600px]:border-b-[1px] max-[600px]:border-[gainsboro]">
            Job Details
            </h2>
            <div className="flex max-[600px]:mt-[10px] max-[600px]:w-full max-[600px]:items-center">
                <div className="flex cursor-pointer [&_svg]:hover:fill-black">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} 
                    stroke="currentColor" className="w-6 h-6 mr-[10px]">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M17.593 3.322c1.1.128 1.907 1.077 1.907 2.185V21L12 17.25 4.5 21V5.507c0-1.108.806-2.057 1.907-2.185a48.507 48.507 0 0111.186 0z" />
                    </svg>
                    <p className="mr-[40px]">Save to my list</p>
                </div>
                <div className="flex cursor-pointer [&_svg]:hover:fill-black">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 mr-[10px]">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M7.217 10.907a2.25 2.25 0 100 2.186m0-2.186c.18.324.283.696.283 1.093s-.103.77-.283 1.093m0-2.186l9.566-5.314m-9.566 7.5l9.566 5.314m0 0a2.25 2.25 0 103.935 2.186 2.25 2.25 0 00-3.935-2.186zm0-12.814a2.25 2.25 0 103.933-2.185 2.25 2.25 0 00-3.933 2.185z" />
                </svg>
                <p>Share</p>
                </div>
            </div>
        </div>
        <div className="w-[70%] mx-auto mt-[20px]">
            <button className="bg-[#384564] transition ease-in-out delay-150 hover:bg-blue-700 text-white w-[127px] h-[52px] py-2 px-4 rounded-lg">Apply now</button>
        </div>
        <div className="w-[70%] mx-auto mt-[20px]">
            {detailedJob.map(item => (
                <>
                <div className="flex justify-between items-center max-[600px]:flex-col max-[600px]:items-start">
                    <h1 className="text-[#3A4562] text-[24px] font-semibold w-[70%] max-[600px]:w-full">{item.title}</h1>
                    <p className="flex flex-col items-center font-semibold text-[20px]
                    max-[600px]:flex-row max-[600px]:items-center max-[600px]:mt-[20px]">$ {item.salary} 
                    <span className="font-normal text-[15px] max-[600px]:text-[16px] max-[600px]:ml-[10px]">Brutto per year</span></p>
                </div>
                <p className="font-thin mt-[10px]">Posted: {item.createdAt.slice(0,10).replace(/-/g,'/')}</p>
                <p className="mt-[20px] text-[18px]">{item.description}</p>
                <h2 className="font-semibold text-[25px] mt-[40px] w-full border-b-[2px] border-[rgba(58, 69, 98, 0.2)] pb-[10px]">Additional info</h2>
                <p className="mt-[10px] text-[18px]">Employment type</p>
                <div className="mt-[20px]">
                    {item.employment_type.map((item, index) => (
                        <button key={index} className="bg-[#55699E4D] border-[1px] 
                        rounded-[8px] border-[#55699E4D] w-[222px] h-[49px] text-[#55699E]
                         font-bold py-2 px-4 mr-[15px] max-[680px]:mb-[10px]">{item}</button> 
                    ))}
                </div>
                <p className="mt-[10px] text-[18px]">Benefits</p>
                <div className="mt-[20px]">
                    {item.benefits.map((item, index) => (
                        <button key={index} className="bg-[#FFCF0026] border-[1px]
                         rounded-[8px] border-[#FFCF00] w-[222px] h-[49px]
                          text-[#988B49] font-bold py-2 px-4 mr-[15px] max-[680px]:mb-[10px]">{item}</button>
                           ))}
                </div>
                <h2 className="font-semibold text-[25px] mt-[40px] w-full border-b-[2px] border-[rgba(58, 69, 98, 0.2)] pb-[10px]">Additional images</h2>
                <div className="flex mt-[20px] max-[600px]:overflow-x-scroll">
                    {item.pictures.map((item, index) => <img key={index} className="mr-[15px] w-[240px] h-[150px] rounded-[12px]" src={item} alt="attached images" /> )}
                </div>
                <div 
                className="flex items-center bg-[#F8F8F8] border-[1px] border-[rgba(58, 69, 98, 0.5)]
                 w-[210px] rounded-[8px] h-[50px] cursor-pointer mt-[50px] mb-[50px] hover:bg-[honeydew]"
                 onClick={clickHandler}
                >
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-[30px] h-[50px]">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 19.5L8.25 12l7.5-7.5" />
                    </svg>
                    <button className="uppercase text-[14px] text-[#3A4562] pl-[5px] font-medium">Return to job board</button>
                </div>
                </>
            ))}
        </div>
        </>
    )
}