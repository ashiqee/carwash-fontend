import { IServices } from '@/interface/interface';
import { RootState } from '@/redux/store';
import { createSlice } from '@reduxjs/toolkit';


export  type TCompareService ={
    selectedServices:IServices[];
}



const initialState: TCompareService = {
    selectedServices:[]
};

const compareSlice = createSlice({
  name: 'compare',
  initialState,
  reducers: {
    addCompare: (state, action) => {
      const service = action.payload;
      if(!state.selectedServices.find(item=>item._id === service._id)){

      }else{
        state.selectedServices.push(service)
      }
    },
    logout: (state) => {
      state.user = null;
      state.token = null;
    },
  },
});

export const { setUser,logout } = compareSlice.actions;

export default compareSlice.reducer;

export const useSelectedCompare = (state: RootState) => state.auth.token;

