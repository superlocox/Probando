import React, { Fragment, useState, useEffect } from "react";
import EditTodo from "./EditTodo";

const ListTodos = () => {
  const [todos, setTodos] = useState([]);

  //delete todo function

  async function deleteTodo(id) {
    try {
      // eslint-disable-next-line
      const res = await fetch(`/productos/${id}`, {
        method: "DELETE",
      });

      setTodos(todos.filter((todo) => todo.todo_id !== id));
      window.location = "/";
    } catch (err) {
      console.error(err.message);
    }
  }

  async function getTodos() {
    // eslint-disable-next-line
    const res = await fetch("/productos");

    const todoArray = await res.json();

    setTodos(todoArray);
  }

  useEffect(() => {
    getTodos();
  }, []);

  // console.log(todos);

  return (
    <Fragment>
      {" "}
      <table className="table mt-5 text-center">
        <thead  className="table-dark">
            <tr>
            <th scope="col">ID</th>
            <th scope="col">Producto</th>
            <th scope="col">Precio</th>
            <th scope="col">Cantidad</th>
            <th scope="col">Editar</th>
            <th scope="col">Borrar</th>
            </tr>
        </thead>
        <tbody>
           {todos.map(todo=>(
               <tr key={todo.id}>
                   <td>{todo.id}</td>
                   <td>{todo.nombre}</td>
                   <td>{todo.precio}</td>
                   <td>{todo.cantidad}</td>
                   <td><EditTodo todo={todo}/></td>
                   <td><button className="btn btn-danger" onClick={()=> deleteTodo(todo.id)}>Borrar</button></td>
               </tr>
           ))}
        </tbody>
        </table>
    </Fragment>
  );
};

export default ListTodos;
