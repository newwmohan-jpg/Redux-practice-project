import React from 'react'

import { fetchPhotos , fetchVideo } from './APIdata/MediaApi'


const App = () => {
  return (
    <div>
      <button 
      className='bg-black text-white p-4 m-10 rounded-2xl'
      onClick={ async ()=>
        {const data = await fetchPhotos('dog')

          console.log(data.results);
        }
      }>
        images
      </button>
      <button 
      className='bg-black text-white p-4 m-10 rounded-2xl'
      onClick={ async ()=>
        {const data = await fetchVideo('dog')

          console.log(data.videos);
        }
      }>
      videos
      </button>
    </div>
  )
}

export default App
