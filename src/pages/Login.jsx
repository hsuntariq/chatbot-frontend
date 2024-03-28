import React from 'react'
import logo from '../assets/main.png'
import './login.css'
const Login = () => {
    return (
        <>
            <div className="container d-flex justify-content-center align-items-center" style={{ height: '100vh' }}>
                <div className="row gap-4 align-items-center justify-content-center w-100">
                    <div className="col-lg-4 text-center text-white d-flex flex-column gap-2">
                        <h1 className="fw-bolder display-3 text-center">
                            BriefSnap
                        </h1>
                        <h5 className='text-uppercase'>nutshell</h5>

                        <form className='d-flex flex-column gap-3 '>
                            <input style={{ background: '#B3ABFF' }} type="text" placeholder='username' className="form-control" />
                            <input style={{ background: '#B3ABFF' }} type="password" placeholder='password' className="form-control" />
                            <a href="" className="text-center text-white fs-4">
                                Forget password?
                            </a>
                            <button style={{ background: '#B3ABFF' }} className="btn rounded-pill text-center fw-bolder text-white">
                                login
                            </button>
                        </form>


                    </div>
                    <div className="col-lg-6">
                        <img src={logo} width="100%" alt="" />
                    </div>
                </div>
            </div>
        </>
    )
}

export default Login