import { createSlice } from "@reduxjs/toolkit";
import { toast } from "react-toastify";
import { Bounce } from "react-toastify";


const initialState = {
    items: JSON.parse(localStorage.getItem('collection')) || []
}
const CollectionSlice = createSlice({
    name :'collection',
    initialState,
    reducers: {
        addCollection: (state, action) => {
            const alreadyExists = state.items.find(
                item => item.id === action.payload.id
            )
            if (!alreadyExists) {
                state.items.push(action.payload);
                localStorage.setItem('collection', JSON.stringify(state.items))
            }
        },
        removeCollection: (state, action) => {
            state.items = state.items.filter(
                item=>item.id != action.payload)
             localStorage.setItem('collection', JSON.stringify(state.items))


        },
        clearCollection: (state, action) => {
state.items = []
localStorage.removeItem('collection')
        },

        addedToast:()=>{
toast.success('added to collection ', {
position: "top-right",
autoClose: 5000,
hideProgressBar: false,
closeOnClick: true,
pauseOnHover: false,
draggable: true,
progress: undefined,
theme: "dark",
transition: Bounce,
});
        },
        removedToast:()=>{
toast.success('Removed from collection ', {
position: "top-right",
autoClose: 5000,
hideProgressBar: false,
closeOnClick: true,
pauseOnHover: false,
draggable: true,
progress: undefined,
theme: "dark",
transition: Bounce,
});
        }
    }
})
export const {
    addCollection , removeCollection , clearCollection ,addedToast, removedToast
} = CollectionSlice.actions

export default CollectionSlice.reducer;