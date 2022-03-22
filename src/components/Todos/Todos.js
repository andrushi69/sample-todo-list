import React, {useEffect, useState} from 'react';
import TodosForm from "../TodosFilterAndForm/TodosForm";
import {v4 as uuid} from 'uuid';
import TodosList from "../TodosList/TodosList";
import Modal from "../Modal/Modal";
import classes from "./Todos.module.scss";
import TodosFilter from "../TodosFilterAndForm/TodosFilter";
import TotalTasks from "../TotalTasks/TotalTasks";


const Todos = () => {
  const [todos, setTodos] = useState(() => {
    const saved = localStorage.getItem("todos");
    const initialValue = JSON.parse(saved);
    return initialValue || "";
  })
  const [showModal, setShowModal] = useState(false)
  const [taskId, setTaskId] = useState()
  const [filter, setFilter] = useState("")
  const [showDate, setShowDate] = useState(false)
  const [duplicateError, setDuplicateError] = useState([])
  const [totalTask, setTotalTask] = useState({
    total: "",
    totalCompleted: ""
  })

  const addTodo = (text) => {
    const todo = {
      id: uuid(),
      text,
      completed: false,
      showButton: true,
      showDeadLine: false,
      deadLine: []
    };
    if (todos) {
      const arrayOfTodosText = todos.map(item => item.text)
      const filterArray = arrayOfTodosText.filter(item => item === text)
      setDuplicateError(filterArray)
      return filterArray.length !== 0 ? "" : setTodos(todos.concat(todo))
    }
  }

  const deleteTodo = (todoId) => {
    setTodos(todos.filter(({id}) => id !== todoId))
  }
  const onToggleChange = (id) => {
    setTodos(todos.map(item =>
      item.id === id ? {...item, completed: !item.completed} : item
    ))
  }
  const onFilterChange = (e) => {
    setFilter(e.target.value)
  }
  const toggleButton = (id) => {
    setShowDate(true)
    setTodos(todos.map(item =>
      item.id === id ? {...item, showButton: !item.showButton, showDeadLine: !item.showDeadLine} : item
    ))
  }
  const getTodosByFilter = () => {
    const normalizedFilter = filter.toLowerCase();
    return todos.filter(({text, completed}) =>
      text.includes(normalizedFilter)
    );
  }
  const onToggleDeadLineInfo = (id) => {
    setTodos(todos.map(item =>
      item.id === id ? {...item, showDeadLine: !item.showDeadLine} : item
    ))
  }
  const addDeadLine = (id, day, month, year) => {
    const deadLineInfo = {
      day: day,
      month: month,
      year: year
    }
    setTodos(todos.map(item =>
      item.id === id ? {...item, deadLine: item.deadLine.concat(deadLineInfo)} : item
    ))
  }
  const editText = (id, text) => {
    setTodos(todos.map(item=>
    item.id === id ? {...item, text: text} : item,
    ))
    console.log(todos)
  }

  useEffect(() => {
    if (todos) {
      setTotalTask({
        ...totalTask, total: todos.length,
        totalCompleted: todos.reduce((total, todo) => (todo.completed ? total + 1 : total), 0,)
      })
    }
  }, [todos])
  useEffect(() => {
    if (todos) {
      localStorage.setItem("todos", JSON.stringify(todos))
    }
  }, [todos])
  useEffect(() => {
    setTimeout(() => {
      setDuplicateError([])
    }, 5000)
  }, [duplicateError])


  return (
    <section className={classes.form_and_todos}>
      {showModal ? <Modal closeModal={(boolean) => {
        setShowModal(boolean)
      }} id={taskId} deleteTodo={(id) => {
        deleteTodo(id)
      }}/> : ""}
      <div className={classes.form_fields}>
        <TodosForm onSubmit={(items) => {
          addTodo(items)
        }}
        />
        {todos.length > 1 ? <TodosFilter value={filter} onFilterChange={(value) => {
          onFilterChange(value)
        }}/> : ""}
      </div>
      {todos.length < 1 ? "" :
        <TotalTasks totalTask={totalTask.total} totalTaskCompleted={totalTask.totalCompleted}/>}
      <TodosList
        editText={(...props)=>{
          editText(...props)
        }}
        addDeadLine={(...props) => {
          addDeadLine(...props)
        }}
        duplicate={duplicateError}
        onToggleDeadLineInfo={(id) => {
          onToggleDeadLineInfo(id)
        }}
        setShowDate={(boolean) => {
          setShowDate(boolean)
        }}
        showDate={showDate}
        showModal={(boolean) => {
          setShowModal(boolean)
        }} idForModal={(id) => {
        setTaskId(id)
      }} onToggleChange={(id) => {
        onToggleChange(id)
      }} toggleButton={(id) => {
        toggleButton(id)
      }} todos={getTodosByFilter()}/>
    </section>
  );
};


export default Todos