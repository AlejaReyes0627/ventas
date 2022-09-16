import React from "react";
import Layout from "../components/commons/Layout";
import TableCliente from "../components/clientes/TableCliente";
import ToolbarCliente from "../components/clientes/ToolbarCliente";
import Modal from "../components/commons/Modal";

const Clientes = () => {
  return (
    <Layout>
      <div className="panel is-link">
        <div className="panel-heading" style={{color:'black', textAlign:"center"}}>Clientes</div>
        <div className="box is-link is-light">
          <ToolbarCliente/>
          <TableCliente />
        </div>
      </div>
      <Modal/>
    </Layout>
  );
};
export default Clientes;
