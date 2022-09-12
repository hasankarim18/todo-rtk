import React, { useEffect, useState } from 'react'
import notes from '../../assets/images/notes.png'
import doubleTick from '../../assets/images/double-tick.png'
import plus from '../../assets/images/plus.png'
import { useAddTodoMutation } from '../../features/api/apiSlice'
import Success from '../ui/Success'
import Error from '../ui/Error'


const TodoHeader = () => {

    const [addTodo, { isLoading, isSuccess, isError }] = useAddTodoMutation()
    const [showMessage, setShowMessage] = useState(false)

    const [text, setText] = useState('')

    const submitHandler = (e) => {
        e.preventDefault()
        console.log(text)
        addTodo({
            text
        })

        setShowMessage(true)
    }

    const messageClose = () => {
        setShowMessage(prev => !prev)
    }

    useEffect(() => {
        const clearMessage = setTimeout(() => {
            setShowMessage(false)
        }, 5000);

        return () => {
            clearTimeout(clearMessage)
        }
    }, [showMessage])


    return (
        <>
            <div>
                <form
                    onSubmit={submitHandler}
                    className="flex items-center bg-gray-100 px-4 py-4 rounded-md"
                >
                    <img
                        src={notes}
                        className="w-6 h-6"
                        alt="Add todo"
                    />
                    <input
                        value={text}
                        onChange={(e) => setText(e.target.value)}
                        type="text"
                        placeholder="Type your todo"
                        className="w-full text-lg px-4 py-1 border-none outline-none bg-gray-100 text-gray-500"
                    />
                    <button
                        disabled={isLoading}
                        type="submit"
                        className={`appearance-none w-8 h-8 bg-[url(${plus})] bg-no-repeat bg-contain`}
                    ></button>
                </form>

                {
                    showMessage ?
                        (!isLoading && isSuccess && !isError) && <Success onClose={messageClose} message={'Add todo success'} />
                        : null
                }

                {
                    showMessage ?
                        (!isLoading && isError) && <Error onClose={messageClose} message={'Something went wrong cant add todo!!!'} />
                        : null
                }


                <ul className="flex justify-between my-4 text-xs text-gray-500">
                    <li className="flex space-x-1 cursor-pointer">
                        <img
                            className="w-4 h-4"
                            src={doubleTick}
                            alt="Complete"
                        />
                        <span>Complete All Tasks</span>
                    </li>
                    <li className="cursor-pointer">Clear completed</li>
                </ul>
            </div>
            <hr className="mt-4" />
        </>
    )
}

export default TodoHeader