import React, { Fragment, useState } from "react";

const InputTodo = () => {
  //const [description, setDescription] = useState("");

  const[nombre, setNombre] = useState("");
  const[precio, setPrecio] = useState("");
  const[cantidad, setCantidad] = useState("");

  const onSubmitForm = async (e) => {
    e.preventDefault();
    try {
     // const body = { description };

      const body = {nombre,precio,cantidad};
      //proxy is only use in development so it will be ignored in production
      //so if there is no http://localhost:5000 then by default it is going to use heroku domain
      //remember this heroku app is just our server serving the build static content and also holding the restful api

      //https://pern-todo-app-demo.herokuapp.com/todos
      // eslint-disable-next-line
      const response = await fetch("/productos", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(body),
      });

      window.location = "/";
    } catch (err) {
      console.error(err.message);
    }
  };
  return (
    <Fragment>
    <h1 className="text-center mt-5">PERN STACK</h1>
    <form onSubmit={onSubmitForm}>
       <div className="form-group">
       <h4 >Nombre</h4>
        <input type="text" className="form-control" value={nombre} onChange={e=> setNombre(e.target.value)}/>
       </div>
       <div className="form-group">
       <h4 >Precio</h4>
        <input type="numeric" min='1'  className="form-control" value={precio} onChange={e=> setPrecio(e.target.value)}/>
       </div>
       <div className="form-group">
       <h4>Cantidad</h4>
        <input type="numeric" min='1' className="form-control" value={cantidad} onChange={e=> setCantidad(e.target.value)}/>
       </div>
       <button className="btn btn-success mt-3">Agregar</button>
    </form>

</Fragment>
  );
};

export default InputTodo;
