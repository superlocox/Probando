const express = require("express");
const app = express();
const cors = require("cors");
const pool = require("./db");
const path = require("path");
const PORT = process.env.PORT || 5000;

//process.env.PORT
//process.env.NODE_ENV => production or undefined

//middleware

app.use(cors());
app.use(express.json()); // => allows us to access the req.body
app.use("/authentication", require("./routes/jwtAuth"));
app.use("/dashboard", require("./routes/dashboard"));

// app.use(express.static(path.join(__dirname, "client/build")));
// app.use(express.static("./client/build")); => for demonstration

// if (process.env.NODE_ENV === "production") {
//   //server static content
//   //npm run build
//   app.use(express.static(path.join(__dirname, "client/build")));
// }

// console.log(__dirname);
// console.log(path.join(__dirname, "client/build"));

//ROUTES//

app.post("/register",async(req,res)=>{

  try {
      const {username,pw} = req.body; 
      const text = 'INSERT INTO productos(username,password) VALUES ($1,$2)';
      console.log(username);
      console.log(pw);
      console.log(cantidad);
      const nuevo = await pool.query(text,[username,pw]);

      res.json(nuevo.rows[0]);
  } catch (e) {
      console.log(e);
  }
});





app.post("/productos",async(req,res)=>{

  try {
      const {nombre,precio,cantidad} = req.body; 
      const text = 'INSERT INTO productos(nombre,precio,cantidad) VALUES ($1,$2,$3)';
      console.log(nombre);
      console.log(precio);
      console.log(cantidad);
      const nuevo = await pool.query(text,[nombre,precio,cantidad]);

      res.json(nuevo.rows[0]);
  } catch (e) {
      console.log(e);
  }
});

app.get("/productos",async (req,res)=>{
  try {
      
      const buscar = await pool.query('select * from productos order by id');
      res.json(buscar.rows);
  } catch (e) {
      console.log(e);
      
  }
});

app.get("/productos/:id",async (req,res)=>{
  try {
      const { id } = req.params;
      const buscar_uno = await pool.query('select * from productos where id=$1',[id]);
      res.json(buscar_uno.rows);
  } catch (e) {
      console.log(e);
      
  }
});

app.put("/productos/:id",async (req,res)=>{
  try {
      const {id} = req.params;
      const {nombre,precio,cantidad} = req.body; 
      const text = 'UPDATE productos SET nombre = $1, precio = $2, cantidad = $3 WHERE id = $4 ';
      const actualizar = await pool.query(text,[nombre,precio,cantidad,id]);

      res.json('Actualizado');
      //console.log(actualizar);
  } catch (e) {
      console.log(e);
      
  }
});

app.delete("/productos/:id",async (req,res)=>{
  try {
      const {id} = req.params;
      const text = 'DELETE from productos WHERE id = $1';
      const actualizar = await pool.query(text,[id]);

      res.json('Se borro');
  } catch (e) {
      console.log(e);
      
  }
});



///////////////////////////

app.use(require('./routes/users'));

app.use(express.static(path.join(__dirname, "client/build")));

// app.get("*", (req, res) => {
//   res.sendFile(path.join(__dirname, "client/build/index.html"));
// });

if(process.env.NODE_ENV === 'production'){
  const path  =  require('path');
  app.get('/*',(req,res)=>{
      res.sendfile(path.resolve(__dirname,'client','build','index.html'))
  })
}

app.listen(PORT, () => {
  console.log(`Server is starting on port ${PORT}`);
});


