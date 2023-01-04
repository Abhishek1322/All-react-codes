import React from 'react'
import { BsFillPlayCircleFill } from 'react-icons/bs'


const NewsCard = ({ article }) => {
    if (!article.title) return;
    return (
        <>
            {/* <div className='news-card'>
                <h3>
                    {article.title}
                </h3>
                <a href={article.url}>Read More</a>
            </div> */}
            <section className="text-gray-600 body-font py-3 border-solid border-4 border-b-white bg-cyan-100 px-16">
                <div className="container mx-auto flex px-5  md:flex-row flex-col items-center">
                    <div className="lg:max-w-xs lg:w-full md:w-1/2 w-5/6 mb-10 md:mb-0">
                        <img className="object-cover object-center rounded" alt="hero" src='https://images.pexels.com/photos/1577882/pexels-photo-1577882.jpeg?auto=compress&cs=tinysrgb&w=600  ' />
                    </div>
                    <div className="lg:flex-grow md:w-1/2 lg:pl-24 md:pl-16 flex flex-col md:items-start md:text-left items-center text-center">
                        <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-900">{article.author}</h1>
                        <h6 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-900">{article.title}</h6>

                        <a href={article.url} className="mb-8 leading-relaxed text-blue-600"> Read More</a>

                        <div className="flex justify-center">
                            <div className="flex text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg">play<span className='p-2 text-red-600'><BsFillPlayCircleFill /></span> </div>
                            <button className="ml-4 inline-flex text-gray-700 bg-gray-100 border-0 py-2 px-6 focus:outline-none hover:bg-gray-200 rounded text-lg">Created At # {article.created_at}</button>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default NewsCard