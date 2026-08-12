
import { useDispatch, useSelector } from 'react-redux'
import { setActiveTabs } from '../redux/SearchSlice'


const Tabs = () => {
    const Tabs = [ 'photos' , 'Videos']

const dispatch = useDispatch()
const activeTab = useSelector((state)=>state.search.activeTab)

  return (
    <div className='flex justify-around '>
      {Tabs.map((elem , idx)=>{
return <button 
className={`${(activeTab == elem ? ' border border-green-500': 'border-0')} bg-amber-600 transition  p-2 w-30 rounded-xl cursor-pointer active:scale-95`}
key={idx}
onClick={()=>{
    dispatch(setActiveTabs(elem))
}}
>
    {elem}</button>
      })}
    </div>
  )
}

export default Tabs
