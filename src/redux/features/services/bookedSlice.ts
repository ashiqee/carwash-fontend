import { RootState } from "@/redux/store";

import { createSlice,PayloadAction  } from "@reduxjs/toolkit";

type TBookItem={
    service:string;
    slot:string;
 
}
// type TBookItem={
//     service:string;
//     slot:string;
//     vehicleType:string;
//     vehicleBrand: string;
//     vehicleModel:string;
//     manufaturingYear: number;
//     registrationPlate: string;
// }

export type TBookedState = {

    items:TBookItem[];
    loading: boolean;
    error: string | null;
    
}


const initialState: TBookedState= {
    items:[],
    loading:false,
    error:null
 
}

const bookedSlice = createSlice({
    name: 'booked',
    initialState,
    reducers:{
       addBookingCart: (state,action: PayloadAction<TBookItem>)=>{
     
        const {service,slot}=action.payload;

       const exitstingItem = state.items.find(item=> item.service === service);
       if(exitstingItem){
     
       
         
        exitstingItem.slot +=slot;
       }else{
        state.items.push({service,slot})
       }

        
        
       },
       removeBookedFromCart:(state,action: PayloadAction<string[]>)=>{
        state.items = state.items.filter(item=>!action.payload.includes(item.service));
       }
    }
})


export const {addBookingCart,removeBookedFromCart}= bookedSlice.actions;

export default bookedSlice.reducer;

export const useCurrentBookedCart = (state: RootState)=>state.booked;
