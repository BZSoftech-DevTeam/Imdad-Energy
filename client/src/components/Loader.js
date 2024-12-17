import React from 'react'

function Loader() {
    return (
        <div className="max-w-7xl mx-auto flex items-center justify-center h-screen text-6xl">
            <l-ring
                size="75"
                speed="2"
                color="#166534"
            ></l-ring>
        </div>
    )
}

export default Loader
