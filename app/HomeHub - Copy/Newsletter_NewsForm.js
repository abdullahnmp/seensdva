import React from 'react'

function NewsForm() {
  return (
    <div className="flex flex-col gap-2 w-full  max-800:flex-row  min-950:flex-row">
              <input
                type="email"
                placeholder="Enter your email"
                className="w-full p-3 rounded-lg bg-gray-800 text-white focus:outline-none"
              />
              <button className="bg-rose-500 text-white px-4 py-2 rounded-lg hover:bg-rose-600 transition duration-300">
                Subscribe
              </button>
            </div>
  )
}

export default NewsForm