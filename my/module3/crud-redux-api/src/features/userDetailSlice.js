import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'

// create action
export const createUser = createAsyncThunk(
    "createUser", 
    async (data, {rejectWithValue}) =>{
    const response = await fetch("https://64ed6675f9b2b70f2bfb7937.mockapi.io/crud",{
        method: "POST",
        headers:{
            "Content-Type": "application/json",
        },
        body: JSON.stringify(data)
    });
    try {
        const result =  await response.json();
        return result;
    } catch (error) {
        return rejectWithValue(error);        
    }
});

//read action

export const showUsers = createAsyncThunk("showUsers", async(args, {rejectWithValue})=>{
    const response = await fetch("https://64ed6675f9b2b70f2bfb7937.mockapi.io/crud");

    try {
        const result = await response.json();
        return result;

    } catch (error) {
        return rejectWithValue(error);
    }
});

// delete action
export const deleteUser = createAsyncThunk("deleteUser", async(id,{rejectWithValue})=>{
    const response = await fetch(`https://64ed6675f9b2b70f2bfb7937.mockapi.io/crud/${id}`,
        {method: "DELETE"}    
    );

    try {
        const result = await response.json();
        return result;
    } catch (error) {
        return rejectWithValue(error);
    }
});

//Update action
export const updateUser = createAsyncThunk("updateUser", async(data,{rejectWithValue})=>{

    const response = await fetch(`https://64ed6675f9b2b70f2bfb7937.mockapi.io/crud/${data.id}`,
    {
        method: "PUT",
        headers:{
            "Content-Type": "application/json",
        },
        body: JSON.stringify(data)
    });
    try {
        const result =  await response.json();
        return result;
    } catch (error) {
        return rejectWithValue(error);        
    }
})

export const userDetail = createSlice({
    name: "userDetail",
    initialState: {
        users: [],
        loading: false,
        error: null,
    },
        extraReducers:{
            [createUser.pending]:(state)=>{
                state.loading=true;
            },
            [createUser.fulfilled]:(state, action)=>{
                state.loading=false;
                state.users.push(action.payload);
            },
            [createUser.rejected]:(state, action)=>{
                state.loading=false;
                state.error = action.payload;
            },



            [showUsers.pending]:(state)=>{
                state.loading=true;
            },
            [showUsers.fulfilled]:(state, action)=>{
                state.loading=false;
                state.users = action.payload;
            },
            [showUsers.rejected]:(state, action)=>{
                state.loading=false;
                state.error = action.payload.message;
            },


            [deleteUser.pending]:(state)=>{
                state.loading=true;
            },
            [deleteUser.fulfilled]:(state, action)=>{
                state.loading=false;
                const {id} = action.payload;
                if(id){
                    state.users = state.users.filter((ele)=> ele.id !== id);
                }
            },
            [deleteUser.rejected]:(state, action)=>{
                state.loading=false;
                state.error = action.payload.message;
            },


            [updateUser.pending]:(state)=>{
                state.loading=true;
            },
            [updateUser.fulfilled]:(state, action)=>{
                state.loading=false;
                state.users = state.users.map((ele)=>
                    ele.id === action.payload.id ? action.payload : ele
                )
            },
            [updateUser.rejected]:(state, action)=>{
                state.loading=false;
                state.error = action.payload;
            },
        },
    
});
export default userDetail.reducer;