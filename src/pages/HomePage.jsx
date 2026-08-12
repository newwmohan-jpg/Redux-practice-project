import React from 'react'
import Searchbar from '../components/Searchbar'
import Tabs from '../components/Tabs'
import ResultGrid from '../components/ResultGrid'
import { useSelector } from 'react-redux'
import { Store } from '../redux/Store'
import { Link } from 'react-router-dom'
const HomePage = () => {
    const { query } = useSelector((store) => store.search)


    return (
        <div>
            <div className='flex justify-between items-center bg-blue-400'>
                <div className='text-2xl font-bold text-blue-900 p-4 pl-10 '>Media Search</div>
                <div className='items-center pr-10 p-4 text-white '>
                   
                    <Link className='bg-blue-900 rounded p-1.5' to='/collection'>Collection</Link>
                </div>
             </div>
            
            
            <div>
                <Searchbar />
                {query != '' ? <div>
                    <Tabs />
                    <ResultGrid />
                </div> : ''}
            </div>
        </div>
    )
}

export default HomePage
