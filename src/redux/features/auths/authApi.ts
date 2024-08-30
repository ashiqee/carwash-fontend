import { baseApi } from '@/redux/api/baseApi';

const authApi = baseApi.injectEndpoints({
endpoints:(builder)=>({
    login: builder.mutation({
        query:(userInfo)=>({
            url: '/auth/login',
            method:'POST',
            body:userInfo,
        }),
    }),

    signup: builder.mutation({
        query: (userInfo)=>({
            url:"/auth/signup",
            method:"POST",
            body: userInfo,
        })
    }),

    getUserinfo: builder.query({
        query:(userEmail)=>({
            url:`/auth/user?userEmail=${userEmail}`,
            method:"GET",

        }),
        providesTags: ['auth'],
    }),
    getAllUserinfo: builder.query({
        query: (payload:any) => {
       
            const params = new URLSearchParams(
              payload,
            );
                                  
            return `/auth/users?${params}`
          },
          providesTags: ['auth'],
        }),
    
      

    updateUserRole: builder.mutation({
        query: (data) => ({
          url: `/auth/user/${data.userId}`,
          method: 'PUT',
          body: data,
        }),
        invalidatesTags: ['auth'],
      }),
  
}),

});
 


export const {
 useLoginMutation,
  useSignupMutation,
   useGetUserinfoQuery,
   useGetAllUserinfoQuery,
   useUpdateUserRoleMutation
} = authApi;
