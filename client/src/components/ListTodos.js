import React, { Fragment, useState, useEffect } from "react";
import Auth from "./Auth";
import EditTodo from "./EditTodo";
import InputTodo from "./InputTodo";
import { Navbar, Nav, NavDropdown } from 'react-bootstrap'


//import ReactBootstrap, { Jumbotron, Button, Col, Grid, Panel, FormGroup, Navbar, Nav, NavDropdown } from 'react-bootstrap'
export const ListTodos = props => {
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
      <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
        <Navbar.Brand href=""></Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="mr-auto">
          <NavDropdown title="CAJA" id="collasible-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">Facturar</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">Inventario</NavDropdown.Item>
        
              {/* <NavDropdown.Divider /> */}
          </NavDropdown>
          
          </Nav>
          <Nav>
     
          </Nav>
          <Nav  className="ml-auto">
         <Nav.Link  >
         <button className="btn btn-danger"
        onClick={() => {
          Auth.logout(() => {
            props.history.push("/");
          });
        }}
      >
        Logout
      </button>
         </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
      {" "}
     
      <div className="container white">
        <InputTodo />
        <table className="table mt-5 text-center">
          <thead className="table-dark">
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
            {todos.map(todo => (
              <tr key={todo.id}>
                <td>{todo.id}</td>
                <td>{todo.nombre}</td>
                <td>{todo.precio}</td>
                <td>{todo.cantidad}</td>
                <td><EditTodo todo={todo} /></td>
                <td><button className="btn btn-danger" onClick={() => deleteTodo(todo.id)}>Borrar</button></td>
              </tr>
            ))}
          </tbody>
        </table>

      </div>

    </Fragment>
  );
};

export default ListTodos;
