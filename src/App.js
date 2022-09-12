import React from 'react'
import Layout from './components/Layout/Layout'
import TodoHeader from './components/Todo/TodoHeader'
import TodoList from './components/Todo/TodoList'
import TodoFooter from './components/Todo/TodoFooter'

const App = () => {
  return (
    <Layout >
      <TodoHeader />
      <TodoList />
      <TodoFooter />
    </Layout>
  )
}

export default App