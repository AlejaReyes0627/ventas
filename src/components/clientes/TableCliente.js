import React, { useState } from "react";
import RowCliente from "./RowCliente";

const TableCliente = () => {
  const [clienteList, setClienteList] = useState([
    {
      idCliente: 1,
      nombres: "Roberto",
      apellidos: "Berrio",
      direccion: "Av Ambala",
      telefono: "39103431",
      email: "RB@gmail.com",
    },
    {
      idCliente: 2,
      nombres: "Anderson",
      apellidos: "Ortiz",
      direccion: "Av Ferro",
      telefono: "3535431",
      email: "AO@gmail.com",
    },
    {
      idCliente: 3,
      nombres: "Mario",
      apellidos: "Zapata",
      direccion: "Av Guavinal",
      telefono: "39677631",
      email: "Mar@gmail.com",
    },
  ]);

  return (
    <div className="table-container"style={{textAlign:"center"}} >
      <table className="table is-bordered is-striped is-narrow is-hoverable is-fullwidth " >
        <thead>
          <tr>
            <th style={{textAlign:"center"}} >Acciones</th>
            <th style={{textAlign:"center"}}>Nombre</th>
            <th style={{textAlign:"center"}}>Apellidos</th>
            <th style={{textAlign:"center"}}>Direccion</th>
            <th style={{textAlign:"center"}}>Telefono</th>
            <th style={{textAlign:"center"}}>Email</th>
          </tr>
        </thead>
        <tbody>
          {clienteList.map((cliente) => (
            <RowCliente cliente={cliente} key={cliente.idCliente} />
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default TableCliente;
