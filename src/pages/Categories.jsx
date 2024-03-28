import React from 'react'
import Nav from '../components/Nav'
import { data } from '../components/list'
import Sidebar from '../components/Sidebar'
import InputBox from '../components/InputBox'
const Categories = () => {
    return (
        <>
            <div className="container">
                <Nav />
                <div className="container mt-5 d-flex justify-content-center align-items-center" style={{}}>
                    <div className="row w-100 align-items-center justify-content-center">
                        <div className="col-lg-3 my-4 text-white">
                            <Sidebar />
                        </div>
                        <div className="col-lg-9">
                            <InputBox />
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Categories