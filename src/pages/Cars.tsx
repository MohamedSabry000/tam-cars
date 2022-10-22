import React from 'react'

function Cars() {
  return (
    <div className='h-full'>
      <h1>Cars</h1>
      <div className="flex flex-wrap justify-between">
        <div>
          <button id="newBtn" data-dropdown-toggle="newBtn" className="text-white bg-white-700 focus:ring-4 focus:outline-none font-medium rounded-lg text-sm px-4 py-2.5 text-center inline-flex items-center dark:bg-white-600 dark:hover:bg-white-700 dark:focus:ring-white-800" type="button">New <svg className="ml-2 w-4 h-4" aria-hidden="true" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7"></path></svg></button>

        </div>
      </div>
    </div>
  )
}

export default Cars