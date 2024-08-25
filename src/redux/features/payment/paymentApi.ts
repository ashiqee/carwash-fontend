import { baseApi } from "@/redux/api/baseApi";


const paymentApi = baseApi.injectEndpoints({
    endpoints: (builder) => ({
        createPaymentIntent: builder.mutation({
            query:(amount:number)=>( {
                
                
                url:'create-payment-intent',
                method:'POST',
                body:{amount},
            })
        })

    })
    

})


export const {useCreatePaymentIntentMutation}=paymentApi;
export default paymentApi;