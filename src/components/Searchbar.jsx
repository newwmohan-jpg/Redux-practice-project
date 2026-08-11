import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { setQuery } from '../redux/SearchSlice'
const Searchbar = () => {
    const [text, setText] = useState('')

    const dispatch = useDispatch()


    const submithandeler=(e)=>{
        e.preventDefault()
        dispatch(setQuery(text))
        setText('')
    }
  return (
    <div>
      <form onSubmit={(e)=>{submithandeler(e)}} >
        <div className='flex items-center justify-center'>
            <input 
            value={text}
            onChange={(e)=>{
                setText(e.target.value)
            }}
            required
            type="text"
            placeholder='search...'
             className='text-white bg-blue-950 m-8 mr-1 text-center p-3 rounded border-none outline-none w-full'/>
             <button className='cursor-pointer active:scale-95 bg-amber-600 text-blue-950 font-bold p-2.5 rounded m-10 ml-0 border-none outline-none'>Search</button>
        </div>
      </form>
    </div>
  )
}

export default Searchbar
