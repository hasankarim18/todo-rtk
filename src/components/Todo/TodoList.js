import React from 'react'
import { useGetTodosQuery } from '../../features/api/apiSlice'
import Loader from '../ui/Loader'
import Success from '../ui/Success'
import Error from '../ui/Error'
import Todo from './Todo'


const TodoList = () => {

  const { data: todos, isLoading, isSuccess, isError } = useGetTodosQuery()
  // console.log(data)

  let content = null
  if (isLoading) {
    content = <div> <Loader /> </div>
  }

  if (!isLoading && isError) {
    content = <Error message="Something went wrong!!! " />
  }

  if (!isLoading && !isError && todos?.length === 0) {
    content = <div>No todo found!!!</div>
  }

  if (!isLoading && !isError && todos?.length > 0) {
    content = todos.map(todo => <Todo key={todo.id} todo={todo} />)
  }



  return (
    <>
      <div
        className="mt-2 text-gray-700 text-sm max-h-[300px] overflow-y-auto"
      >

        {content}

      </div>
      <hr className="mt-4" />

    </>
  )
}

export default TodoList