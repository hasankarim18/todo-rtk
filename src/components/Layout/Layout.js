import React from 'react'
import Header from '../Header/Header'
const Layout = (props) => {
    return (
        <div className="App">
            <div
                className="grid place-items-center bg-blue-100 h-screen px-6 font-sans"
            >
                {/* <!-- navbar --> */}
                <Header />

                <div className="w-full max-w-3xl shadow-lg rounded-lg p-6 bg-white">
                    {props.children}
                </div>

            </div>
        </div >
    )
}

export default Layout