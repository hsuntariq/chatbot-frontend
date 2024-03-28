import React from 'react'
import { BsTrash } from "react-icons/bs";
import { MdOutlineContentCopy } from "react-icons/md";
import { RiFileUploadLine } from "react-icons/ri";

const InputBox = () => {
    return (
        <>
            <div className="row">
                <div className="col-lg-10">

                    <div className="d-flex flex-column w-100 gap-2">

                        <textarea style={{
                            background: 'linear-gradient(135deg,#170935,#3B1F7A)'
                        }} name="" id="" cols="30" className='form-control border-0 rounded-0 text-white' rows="15"></textarea>
                        <button style={{ background: '#B3ABFF' }} className="btn fw-bolder text-dark">
                            Summarize
                        </button>
                    </div>
                </div>
                <div className="col-lg-2">`
                    <div className="d-flex flex-column gap-3">
                        <div className="icon align-self-start p-2 bg-white rounded-circle">

                            <BsTrash cursor="pointer" className='' style={{ color: '#13072E' }} size={30} />
                        </div>
                        <div className="icon align-self-start p-2 bg-white rounded-circle">

                            <MdOutlineContentCopy cursor="pointer" className='' style={{ color: '#13072E' }} size={30} />
                        </div>
                        <div className="icon align-self-start p-2 bg-white rounded-circle">

                            <RiFileUploadLine cursor="pointer" className='' style={{ color: '#13072E' }} size={30} />
                        </div>
                    </div>

                </div>
            </div>
        </>
    )
}
export default InputBox