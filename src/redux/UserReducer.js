import { createSlice } from '@reduxjs/toolkit'
import { userList } from './Data.jsx';

const userSlice =createSlice({
    name:"users",
    initialState: userList,
    reducers:{
        addUser:(state,action)=>{
            state.push(action.payload)
        },
        updateUser: (state, action) => {
            const { id, name, email } = action.payload;
            const userIndex = state.findIndex(user => user.id === id);
            if (userIndex !== -1) {
                state[userIndex] = { ...state[userIndex], name, email };
            }
        },
        deleteUser: (state, action) => {
            const { id } = action.payload;
            const userIndex = state.findIndex(user => user.id === id);
            if (userIndex !== -1) {
                state.splice(userIndex, 1);
            }
        }
        
        // updateUser:(state,action)=>{
        //     const [id,name,email] =action.payload;
        //     const uu =state.find(user=>user.id == id);
        //     if(uu){
        //         uu.name=name;
        //         uu.email=email
        //     }
        // }
    }
})

export const {addUser,updateUser,deleteUser} =userSlice.actions;
export default userSlice.reducer