import { useDispatch, useSelector } from 'react-redux'
import { fetchPhotos, fetchVideo } from '../APIdata/MediaApi'
import { setQuery, setLoading, setError, setResults } from '../redux/SearchSlice'
import { Store } from '../redux/Store'
import { useEffect } from 'react'
import Resultcard from './Resultcard'

const ResultGrid = () => {
    const dispatch = useDispatch()
    const { query, activeTab, results, loading, error } = useSelector((Store) => Store.search)


    useEffect(() => {
    if(!query) return
         const getData = async () => {
     try {
          dispatch(setLoading())
            let data = [];
            if (activeTab == 'photos') {
              
                
                let res = await fetchPhotos(query)
                
                
                data = res.results.map((item) => ({
                    id: item.id,
                    type: 'photos',
                    title: item.alt_description
                    ,
                    thumbnail: item.urls.small,
                    src: item.urls.full,
                    url: item.links.html


                }))


            }

            if (activeTab == 'Videos') {
                let res = await fetchVideo(query)
                
                
                data = res.videos.map((item) => ({
                   id: item.id,
                     type: 'videos'
,
                     title: item.user.name || 'video'
                     ,
                    thumbnail: item.image,
                     src: item.video_files[0].link,
                     url:item.url

                 }))

            }
         
  dispatch(setResults(data))
        
        
     } catch (err) {
        dispatch(setError(err.message))
     }}
        getData()
    }, [query, activeTab])

if(error) return <h1>Error</h1>
if(loading) return <h1>Loading</h1>

    return (
        <div className='flex w-full flex-wrap gap-5 px-5 py-6 justify-center'>
            {results.map((item , idx)=>{
                return <div key={idx}>

    <Resultcard item={item}/>


                </div>
            })}
        </div>
    )
}

export default ResultGrid
