import React, { useState, useEffect } from 'react'
import axios from 'axios'
import NewsCard from './NewsCard'
// import { BsFacebook } from 'react-icons/bs';
// import { BsInstagram } from 'react-icons/bs';
// import { ImYoutube2 } from 'react-icons/im'
// import { BsTwitter } from 'react-icons/bs';
import { BiNotepad } from 'react-icons/bi'
import ReactPaginate from 'react-paginate';
import './NewsPagination.css'
import { Link } from 'react-router-dom'
import { Spin } from 'antd';
// import useDarkMode from 'use-dark-mode';

// import Toggle from 'react-toggle';

const NewsPagination = () => {
    const [currentPage, setCurrentPage] = useState(0)
    const [articles, setArticles] = useState([])
    const [isLoading, setIsLoading] = useState(true)
    const [totalPages, setTotalpages] = useState(50)
    const [maxPageLimit, setMaxPageLimit] = useState(5);

    // const darkMode = useDarkMode(initialState, darkModeConfig);
    // const darkMode = useDarkMode(false);



    const [query, setQuery] = useState("")
    const [searchInput, setSearchInput] = useState("")

    const handlePageChange = event => {
        console.log(event)
        setCurrentPage(event.selected)
    }

    const handleSubmit = event => {
        event.preventDefault();
        setCurrentPage(0)
        setQuery(searchInput)
    }

    useEffect(() => {
        setIsLoading(true)
        const fetchData = async () => {
            try {
                const { data } = await axios.get("https://hn.algolia.com/api/v1/search?",

                    {
                        params: { page: currentPage, query },
                    },

                )
                console.log(data)

                const { hits } = data;
                setArticles(hits)

            } catch (err) {
                console.log(err)
            }
            finally {
                setIsLoading(false)
            }
        };
        fetchData();
    }, [currentPage, query])


    return (
        <>
            <div className='container'>
                {/* <div className='toggle-switch'>
                    <button type="button" onClick={darkMode.disable}>
                        🔆
                    </button>

                    <label class="switch">
                        <input type="checkbox" className='checked' checked={darkMode.value} onChange={darkMode.toggle} />
                        <span class="slider round"></span>
                    </label>
                    <button type="button" onClick={darkMode.enable}>
                        🌙
                    </button>
                </div> */}
                <div>
                    <header className="text-gray-600 body-font  ">
                        <div className="container mx-auto  flex-wrap  flex-col md:flex-row items-center grid grid-rows-1 sm:grid-rows-1 md:grid-cols-3 lg:grid-cols-3">
                            <a className=" title-font font-medium items-center text-gray-900 mb-2 md:mb-0 ">
                                <img className='w-3/4' src="https://i2.wp.com/zone24x7.com/wp-content/uploads/2019/07/Zone24x7-Logo.png?fit=1123%2C411&ssl=1" alt="" />
                            </a>
                            <form className='search-form text-white' onSubmit={handleSubmit}>
                                <input
                                    className='search-input'
                                    placeholder='Search for news...'
                                    value={searchInput}
                                    onChange={event => setSearchInput(event.target.value)}
                                />
                                <button className='search-button' type='submit'>Search</button>
                            </form>

                            <div className="social-icons items-center border-0 py-1 px-3 focus:outline-none  rounded text-2xl gap-3 md:mt-0 flex">
                                {/* <span className='px-2'><BsFacebook /></span>
                                <span className='px-2'><BsInstagram /></span>
                                <span className='px-2'><ImYoutube2 /></span>
                                <span><BsTwitter /></span> */}
                                <Link to='notepad'>
                                    <div className='notepad-button float-right'>
                                        <button className='notepad-text'>Notepad</button>
                                        <span className='notepad-logo '><BiNotepad /></span>
                                    </div>
                                </Link>
                            </div>
                        </div>
                    </header>
                </div>




                <div className='news-container'>
                    {
                        isLoading ? 
                        (
                            <div class="d-flex justify-content-center loader">
                                <div className="example">
                                    <Spin />
                                </div>

                            </div>
                        ) : (

                            articles.map((article) => (
                                <NewsCard article={article} key={article.ObjectID} />
                            ))
                        )}

                </div>
                <ReactPaginate
                    previousLabel="<<"
                    nextLabel=">>"
                    breakLabel='...'
                    forcePage={currentPage}
                    pageCount={totalPages}
                    renderOnZeroPageCount={null}
                    onPageChange={handlePageChange}
                    className='pagination'
                    activeClassName='active-page'
                    previousClassName='previous-page'
                    nextClassName='next-page'
                />
            </div>

        </>
    )
}

export default NewsPagination