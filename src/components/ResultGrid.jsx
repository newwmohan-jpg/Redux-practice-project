import { useDispatch, useSelector } from 'react-redux'
import {fetchPhotos , fetchVideo} from '../APIdata/MediaApi'
import {setQuery , setLoading , setError , setResults} from '../redux/SearchSlice'
import { Store } from '../redux/Store'
import { useEffect } from 'react'

const ResultGrid = () => {
  const{query , activeTab , results , loading , error} = useSelector((Store)=>Store.search)

  
  useEffect(() => {
 const getData =async ()=>{
    let data;
    if(activeTab=='photos'){
     data = await fetchPhotos(query)
        console.log(data);  
    }

      if(activeTab=='Videos'){
     data = await fetchVideo(query)
        console.log(data);  
    }
  }
getData()
  }, [query , activeTab])
  return (
    <div>
     
    </div>
  )
}

export default ResultGrid
