import React, { useState } from 'react'

const Calculator = () => {
    const [state, setState] = useState({
        inputData: '',
        result: {
            data: null,
            message: '',
            isNegative: false
        }
    })

    //onChange input value
    const handleChange = (e) => {
        setState((prev) => {
            return {
                ...prev,
                inputData: e.target.value,
                result: {
                    data: null,
                    message: '',
                    isNegative: false
                }
            }
        })
    };

    function isOnlyNumbers(str) {
        return /^\d+$/.test(str);
    }

    //onClick button - res calculation
    const calculateSum = () => {
        if (state?.inputData === "") {
            setState((prev) => {
                return {
                    ...prev,
                    result: {
                        data: null,
                        message: `Please enter number`
                    },
                }
            })
            return;
        }
        //check entered number is negative or not
        if (state?.inputData.replace(/\n/g, ",").split(",").map(Number).some(num => num < 0)) {
            setState((prev) => {
                return {
                    ...prev,
                    result: {
                        data: state?.inputData,
                        message: "negative numbers not allowed",
                        isNegative: true
                    },
                    inputData: '',
                }
            })
            return;
        }
        //check entered number is only number or not
        if (isOnlyNumbers(state?.inputData)) {
            setState((prev) => {
                return {
                    ...prev,
                    result: {
                        data: Number(state?.inputData),
                        message: `Input: “${state.inputData}”, Output: ${Number(state?.inputData)}`
                    },
                    inputData: '',
                }
            })
            return;
        }

        const numbers = state?.inputData?.replace(/\n/g, ",").split("").map(Number).filter(d => d);
        const sum = numbers.reduce((acc, curr) => acc + curr, 0);
        setState((prev) => {
            return {
                ...prev,
                result: {
                    data: sum,
                    message: `Input: “${state.inputData}”, Output: ${sum}`
                },
                inputData: '',
            }
        })
    };

    const { inputData, result } = state;
    return (
        <section className='w-full lg:w-[80%] px-[10px] xl:px-5 py-10 mx-auto animate-fade  h-screen '>
            <div className='bg-gray-50 p-5 h-full rounded-xl flex items-center justify-center flex-col'>
                <h1 className='flex items-center justify-center text-6xl font-black bg-gradient-to-r from-[#38bdf8] via-slate-300 to-[#38bdf8] bg-clip-text text-transparent pb-5'>String Calculator</h1>
                <div className='h-[1px]  bg-gray2 bg-gray-300 w-full lg:w-[40%] mx-auto'></div>
                <div className='flex flex-col rounded-lg mt-5 w-full lg:w-[40%] mx-auto p-5 '>
                    <input
                        value={inputData}
                        onChange={handleChange}
                        type="text"
                        placeholder='Please enter number'
                        className='text-xl outline-none w-full flex items-center justify-between px-4 py-2 rounded-md border-[1px] border-[#c0c7db] mb-3 bg-[#fff]' />
                    <button onClick={calculateSum} className='w-[30%] mx-auto bg-[#fff] mt-3 bx-shadow text-[#38bdf8] text-sm border border-[#38bdf8] py-1 px-5 border-dashed rounded-full hover:bg-[#38bdf8] hover:text-[#fff]'>
                        Add
                    </button>
                    {
                        <div className={`mt-5 text-center  ${result?.isNegative ? ' text-red-400' : ' text-green-400'} text-xl font-semibold`}>
                            {
                                result?.message && <p>{result.message}</p>
                            }
                        </div>
                    }
                </div>
            </div>
        </section>
    )
}

export default Calculator;