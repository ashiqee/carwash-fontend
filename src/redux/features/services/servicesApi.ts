import { baseApi } from '@/redux/api/baseApi';

const serviceApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    getServices: builder.query({
      query: (filters) => {
       
        const params = new URLSearchParams(
          filters,
        );
        return `services?${params}`;
      },
      providesTags: ['services'],
    }),
    getSingleServices: builder.query({
      query: (id) => ({
        url: `/services/${id}`,
        method: 'GET',
      }),
      providesTags: ['services'],
    }),
    getCartsServices: builder.query({
      query: (serviceIds) => {
        if (serviceIds.length > 0) {
         

          return {
            url: `/services/carts`,
            method: 'GET',
            params: { serviceIds: serviceIds },
          };
        }
        return {
          url: `/services/carts`,
          method: 'GET',
          params: ['asdad'],
        };
      },
      providesTags: ['services'],
    }),

    // addProduct api 
    addProduct: builder.mutation({
      query: (data) => ({
        url: '/services',
        method: 'POST',
        body: data,
      }),
      invalidatesTags: ['services'],
    }),

    // updateProduct api 
    updateProduct: builder.mutation({
      query: (data) => ({
        url: `/services/${data.id}`,
        method: 'PUT',
        body: data,
      }),
      invalidatesTags: ['services'],
    }),

    // delete service api 
    deleteProduct: builder.mutation({
      query: (id) => ({
        url: `/services/${id}`,
        method: 'DELETE',
      }),
      invalidatesTags: ['services'],
    })
  }),
});

export const {
  useGetServicesQuery,
  useAddProductMutation,
  useGetSingleServicesQuery,
  useGetCartsServicesQuery,
  useDeleteProductMutation,
  useUpdateProductMutation,
} = serviceApi;
