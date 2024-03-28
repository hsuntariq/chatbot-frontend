import React from 'react'
import { data } from './list'
import { Link, useLocation } from 'react-router-dom'

const Sidebar = () => {
    const text = useLocation();
    let path = text.pathname.split('/')[2]
    return (
        <>
            <h3>Categories</h3>
            {data.map((list) => {
                return (
                    <>
                        <div className="row my-5" key={list.id}>
                            <div className="col-lg-12 col-md-4">

                                <Link to={`/categories/${list.text}`} className="btn  d-block text-capitalize px-5 rounded-pill p-2" style={{
                                    border: '1px solid white',
                                    background: `${path == list.text ? 'white' : 'transparent'}`,
                                    color: `${path == list.text ? 'black' : 'white'}`,
                                }}>
                                    {list.text}
                                </Link>
                            </div>

                        </div>
                    </>
                )
            })}
            <Link to='/' className="btn text-white mt-5  d-block text-capitalize px-5 rounded-pill p-2" style={{
                border: '1px solid white',
            }} >
                Login
            </Link>
        </>
    )
}

export default Sidebar