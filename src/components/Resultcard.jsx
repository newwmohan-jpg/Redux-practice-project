import {useDispatch} from 'react-redux'

import { addCollection, addedToast } from '../redux/CollectionSlice'
import collectionslice from '../redux/CollectionSlice'

const Resultcard = ({item}) => {
  const dispatch = useDispatch()
  const addToCollection=(item)=>{

   dispatch(addCollection(item))
   dispatch(addedToast())
    

  }
  return (
   
      <div className=' relative flex justify-center'>
       
          <a href=
          {item.url} target='_blank' className=' w-80 h-70 bg-white rounded '>
            {item.type == 'photos'? <img src={item.src} alt="" className='object-cover object-center h-full w-full' /> :''}
              {item.type == 'videos'?  <video autoPlay loop muted className='object-cover object-center h-full w-full' src={item.src}></video>: ''}
          </a>
   <div>
        <button 
        onClick={()=>addToCollection(item)}
        className='bg-blue-900 rounded bottom-1 left-1 p-1 active:scale-95 absolute'>save</button>
      </div>
      </div>
 

  
  )
}

export default Resultcard
