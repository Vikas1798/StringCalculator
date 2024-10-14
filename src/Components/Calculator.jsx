import React from 'react'

const Calculator = () => {
    return (
        <section className='w-full lg:w-[80%] px-[10px] xl:px-5 py-10 mx-auto animate-fade'>
            <h1 className='flex items-center justify-center text-4xl font-bold'>String Calculator</h1>
            <div className='flex flex-col rounded-lg mt-5 w-full lg:w-[40%] mx-auto p-5'>
                <input
                    type="text"
                    placeholder='Please enter number'
                    className='outline-none w-full flex items-center justify-between px-4 py-2 rounded-[25px] border-[1px] border-[#c0c7db] my-[10px] bg-[#fff]' />
                <button className='w-[30%] mx-auto bg-[#fff] mt-3 bx-shadow text-[#38bdf8] text-sm border border-[#38bdf8] p-2 border-dashed rounded-md  hover:bg-[#38bdf8] hover:text-[#fff]'>
                    + Add
                </button>
                <div className='mt-5 text-center'>
                    Result
                </div>
            </div>
        </section>
    )
}

export default Calculator;