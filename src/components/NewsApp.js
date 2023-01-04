import React, { useEffect, useState } from 'react'
import './NewsApp.css'
import { BsFacebook } from 'react-icons/bs';
import { BsInstagram } from 'react-icons/bs';
import { ImYoutube2 } from 'react-icons/im'
import { BsTwitter } from 'react-icons/bs';
import { BsFillPlayCircleFill } from 'react-icons/bs'
// import '../components/Pagination'
const NewsApp = ({ datas }) => {
    const [data, setData] = useState([])
  

    const getItem = async () => {
        const getApi = await fetch("https://626a314d737b438c1c436eba.mockapi.io/api/news")
        setData(await getApi.json())
        console.log(data)
    }
    useEffect(() => {
        getItem();
    }, [])
    return (
        <>
            <div>
                <header className="text-gray-600 body-font  ">
                    <div className="container mx-auto  flex-wrap p-3 flex-col md:flex-row items-center grid grid-rows-1 sm:grid-rows-1 md:grid-cols-3 lg:grid-cols-3">
                        <a className=" title-font font-medium items-center text-gray-900 mb-2 md:mb-0 ">
                            {/* <svg xmlns="http://www.w3.org/2000/svg" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" className="w-10 h-10 text-white p-2 bg-indigo-500 rounded-full" viewBox="0 0 24 24">
                                <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"></path>
                            </svg> */}
                            <img className='w-1/4' src="https://i2.wp.com/zone24x7.com/wp-content/uploads/2019/07/Zone24x7-Logo.png?fit=1123%2C411&ssl=1" alt="" />
                            {/* <span className="ml-3 text-xl">Tailblocks</span> */}
                        </a>
                        {/* <nav className="md:ml-auto md:mr-auto flex flex-wrap items-center text-base justify-center">
                            <a className="mr-5 hover:text-gray-900">First Link</a>
                            <a className="mr-5 hover:text-gray-900">Second Link</a>
                            <a className="mr-5 hover:text-gray-900">Third Link</a>
                            <a className="mr-5 hover:text-gray-900">Fourth Link</a>
                        </nav> */}
                        <input className='' type='text' placeholder='saerch...' />
                        <div className=" items-center border-0 py-1 px-3 focus:outline-none hover:bg-gray-200 rounded text-base gap-3 md:mt-0 flex">
                            <span><BsFacebook /></span>
                            <span><BsInstagram /></span>
                            <span><ImYoutube2 /></span>
                            <span><BsTwitter /></span>
                        </div>
                    </div>
                </header>
            </div>


            {/* //NewsApp */}

            {




                data.map((item) => {
                    return (
                        <section class="text-gray-600 body-font py-3 border-solid border-4 border-b-white bg-cyan-100 px-16">
                            <div class="container mx-auto flex px-5  md:flex-row flex-col items-center">
                                <div class="lg:max-w-xs lg:w-full md:w-1/2 w-5/6 mb-10 md:mb-0">
                                    <img class="object-cover object-center rounded" alt="hero" src={item.avatar} />
                                </div>
                                <div class="lg:flex-grow md:w-1/2 lg:pl-24 md:pl-16 flex flex-col md:items-start md:text-left items-center text-center">
                                    <h1 class="title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-900">{item.name}

                                    </h1>
                                    <p class="mb-8 leading-relaxed">{item.para}</p>
                                    <div class="flex justify-center">
                                        <div class="flex text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg">play<span className='p-2 text-red-600'><BsFillPlayCircleFill /></span> </div>
                                        <button class="ml-4 inline-flex text-gray-700 bg-gray-100 border-0 py-2 px-6 focus:outline-none hover:bg-gray-200 rounded text-lg">News # {item.title}</button>
                                    </div>
                                </div>
                            </div>
                        </section>
                    )

                })
            }
        </>
    )
}

export default NewsApp