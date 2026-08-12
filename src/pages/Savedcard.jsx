import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { removeCollection, removedToast } from '../redux/CollectionSlice'
import { Link } from 'react-router-dom'


const Savedcard = ({item}) => {


const dispatch = useDispatch()
const removefromCollection = (item) =>{

dispatch(removeCollection(item.id))
dispatch(removedToast())

}
  const collection = useSelector(state => state.collection.items)
 return (<div>
    <div className='flex justify-between items-center bg-blue-400'>
                <div className='text-2xl font-bold text-blue-900 p-4 pl-10 '>Collection</div>
                <div className='items-center pr-10 p-4 text-white '>
                    <Link className='bg-blue-900 rounded p-1.5'  to='/'>Search</Link>
                  
                </div>
             </div>
    <div className="flex flex-wrap gap-5 px-5 py-6 justify-center">
   
      {collection.map((item, idx) => (
        <div key={idx} className="w-80 h-80 relative">
          <a href={item.url} className="block w-full h-full">
            {item.type == 'photos' ? (
              <img src={item.src} alt="" className="object-cover w-full h-full rounded p-2" />
            ) : ''}
            {item.type == 'videos' ? (
              <video autoPlay loop muted className="object-cover w-full h-full" src={item.src}></video>
            ) : ''}
          </a>
          <button className='bg-red-600 text-white absolute left-3 bottom-3 p-1 rounded active:scale-95' onClick={()=>removefromCollection(item)}>remove</button>
        </div> 
      ))}
    </div>
 </div>
)
}

export default Savedcard
