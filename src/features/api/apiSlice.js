import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'




export const apiSlice = createApi({
    reducerPath: "todoApi",
    baseQuery: fetchBaseQuery({
        baseUrl: 'http://localhost:9006/'
        //   baseUrl: 'https://videortkquery.herokuapp.com'

    }),
    tagTypes: ["Todos"],
    endpoints: (builder) => ({
        getTodos: builder.query({
            query: () => '/todos',
            keepUnusedDataFor: 600,
            providesTags: ["Todos"]
        }),
        addTodo: builder.mutation({
            query: (data) => ({
                url: "/todos",
                method: 'POST',
                body: data
            }),
            invalidatesTags: (result, error, arg) => {
                // console.log(result)
                return [
                    "Todos"
                ]
            }
        }),
        addStatus: builder.mutation({
            query: ({ id, status }) => ({
                url: `/todos/${id}`,
                method: "PATCH"
            })
        })
    })
})


export const {
    useGetTodosQuery,
    useAddTodoMutation
} = apiSlice


