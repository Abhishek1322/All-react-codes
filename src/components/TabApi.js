import React, { useState, useEffect } from 'react'
import './TabApi.css'
import { Pagination } from 'antd'
import axios from 'axios'
import DataTable from 'react-data-table-component';




const TabApi = () => {

    const columns = [
        {
            name: 'id',
            selector: row => row.id,
        },
        {
            name: 'Name',
            selector: 'name',
            sortable: true,
        },
        {
            name: 'Phone',
            selector: 'phone',
            sortable: true,
        },
        {
            name: 'Email',
            selector: 'email',
            sortable: true,
        },

    ];

    const [posts, setPosts] = useState([])
    const [text, setText] = useState("");
    // const [total, setTotal] = useState(0)
    // const [page, setPage] = useState('')
    // const [postPerPage, setPostPerPage] = useState(10)

    const search = (event) => {
        event.preventDefault()
        setText(event.target.value);

    }
    useEffect(() => {
        const getItem = async () => {
            const response = await axios.get('https://626a314d737b438c1c436eba.mockapi.io/api/news');
            setPosts(response.data);
            // setTotal(response.data.length);
            console.log(response)
            // alert("data fetching... plz wait")
        };
        getItem()
    }, [])
    // const indexOfLastPage = page + postPerPage;
    // const indexOfFirstPage = indexOfLastPage - postPerPage;
    // const currentPosts = posts.slice(indexOfFirstPage, indexOfLastPage)

    // const onShowSizeChange = (current, pageSize) => {
    //     setPostPerPage(pageSize)
    // }

    // const itemRender = (current, type, originalElement) => {
    //     if (type == "prev") {
    //         return <a>previous</a>
    //     }
    //     if (type == "next") {
    //         return <a>next</a>
    //     }
    //     return originalElement;
    // }
    return (
        <>
            {/* {JSON.stringify(columns[1].name)} */}
            <h1 className='text-center text-2xl font-extrabold text-red-500'>USER DATA</h1>
            <input
                className='filter-data'
                type='text'
                placeholder='filter data...'
                value={text}
                onChange={search}
            />
            <div className='container mt-5'>
                <table>
                    {/* <tr>
                        <th>ID</th>
                        <th>NAME</th>
                        <th>PHONE NO.</th>
                        <th>EMAIL ADDRESS</th>
                    </tr> */}
                    {
                        posts.filter((val) => {
                            if (text === "") {
                                return val;
                            } else if (isNaN(+text)) {
                                if (val.name.toLowerCase().startsWith(text.toLowerCase())) {
                                    return val;

                                }
                                console.log(val.name)


                            } else if (!isNaN(+text)) {
                                if (
                                    val.name
                                        .toString()
                                        .toLowerCase()
                                        .startsWith(text.toString().toLowerCase())
                                ) {
                                    return val;
                                }
                            }
                            if (text === "") {
                                return val;
                            } else if (isNaN(+text)) {
                                if (val.email.toLowerCase().startsWith(text.toLowerCase())) {
                                    return val;
                                }
                            } else if (!isNaN(+text)) {
                                if (
                                    val.email
                                        .toString()
                                        .toLowerCase()
                                        .startsWith(text.toString().toLowerCase())
                                ) {
                                    return val;
                                }
                            }

                            if (text === "") {
                                return val;
                            } else if (isNaN(+text)) {
                                if (val.phone.toLowerCase().startsWith(text.toLowerCase())) {
                                    return val;
                                }
                            } else if (!isNaN(+text)) {
                                if (
                                    val.phone
                                        .toString()
                                        .toLowerCase()
                                        .startsWith(text.toString().toLowerCase())
                                ) {
                                    return val;
                                }
                            }

                            if (text === "") {
                                return val;
                            } else if (isNaN(+text)) {
                                if (val.id.toLowerCase().startsWith(text.toLowerCase())) {
                                    return val;
                                }
                            } else if (!isNaN(+text)) {
                                if (
                                    val.id
                                        .toString()
                                        .toLowerCase()
                                        .startsWith(text.toString().toLowerCase())
                                ) {
                                    return val;
                                }
                            }

                        })
                            .map((item) => {
                                return (
                                    <>
                                        {/* <tr>
                                            <td>{item.id}</td>
                                            <td>{item.name}</td>
                                            <td>{item.phone}</td>
                                            <td>{item.email}</td>
                                        </tr> */}
                                    </>
                                )
                            })}
                </table>
            </div>
            <DataTable
                // title="Employees"
                columns={columns}
                // setPosts={setPosts}
                search={search}
                data={posts}
                highlightOnHover
                pagination
                paginationPerPage={5}
                paginationRowsPerPageOptions={[5, 15, 25, 50, 100]}
                paginationComponentOptions={{
                    rowsPerPageText: 'Records per page:',
                    rangeSeparatorText: 'out of',
                }}


            />
        </>
    )
}
export default TabApi