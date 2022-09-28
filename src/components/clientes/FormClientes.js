import React, { useContext, useEffect, useState } from "react";
import { ModalContext } from "../../contexts/modal/ModalContexts";
import { ClienteContext } from "../../contexts/modal/ClienteContext";

const FormClientes = () => {
  const { setShowModal } = useContext(ModalContext);

  const { registrarCliente, actualizarCliente, clienteActual, obtenerCliente } =
    useContext(ClienteContext);

  const [mensaje, setMensaje] = useState(null);

  useEffect(() => {
    if (clienteActual !== null) {
      setCliente({
        ...clienteActual,
        direccion: clienteActual.direccion ? clienteActual.direccion : "",
        telefono: clienteActual.telefono ? clienteActual.telefono : "",
      });
    } else {
      setCliente(clienteDefault);
    }
    // eslint-next-line
  }, [clienteActual]);

  const clienteDefault = {
    nombres: "",
    apellidos: "",
    direccion: "",
    telefono: "",
    email: "",
  };

  const [cliente, setCliente] = useState(clienteDefault);

  const handleChange = (e) => {
    setCliente({
      ...cliente,
      [e.target.name]: e.target.value,
    });
  };

  const cleanForm = () => {
    setMensaje(null);
    setCliente(clienteDefault);
  };

  const closeModal = () => {
    cleanForm();
    setShowModal(false);
    obtenerCliente(null);
  };

  const getClientInfo = () => {
    let clienteTemp = { ...cliente };
    if (cliente.direccion == "") delete clienteTemp.direccion;
    if (cliente.telefono == "") delete clienteTemp.telefono;
    return clienteTemp;
  };

  const handleSumbit = (e) => {
    e.preventDefault();

    //Validar
    if (
      cliente.nombres.trim() == "" &&
      cliente.apellidos.trim() == "" &&
      cliente.email.trim() == ""
    ) {
      setMensaje("Los nombres, apellidos y email son obligatorios !!");
      return;
    }
    //Obtener Objeto a enviar
    if (clienteActual !== null) {
      actualizarCliente(getClientInfo());
    } else {
      registrarCliente(getClientInfo());
    }

    //Cerrar y limpiar el modal
    closeModal();
  };

  return (
    <form onSubmit={handleSumbit}>
      {mensaje ? <div className="notification is-danger">{mensaje}</div> : null}
      <div className="field">
        <p className="control has-icons-left has-icons-right">
          <input
            className="input is-link"
            type="text"
            placeholder="Nombres"
            name="nombres"
            value={cliente.nombres}
            onChange={handleChange}
          />
          <span className="icon is-small is-left">
            <i className="fas fa-person"></i>
          </span>
          <span className="icon is-small is-right">
            <i className="fas fa-check"></i>
          </span>
        </p>
      </div>
      <div className="field">
        <p className="control has-icons-left has-icons-right">
          <input
            className="input is-link"
            type="text"
            placeholder="Apellidos"
            name="apellidos"
            value={cliente.apellidos}
            onChange={handleChange}
          />
          <span className="icon is-small is-left">
            <i className="fas fa-person"></i>
          </span>
          <span className="icon is-small is-right">
            <i className="fas fa-check"></i>
          </span>
        </p>
      </div>
      <div className="field">
        <p className="control has-icons-left has-icons-right">
          <input
            className="input is-link"
            type="text"
            placeholder="Direccion"
            name="direccion"
            value={cliente.direccion}
            onChange={handleChange}
          />
          <span className="icon is-small is-left">
            <i className="fas fa-home"></i>
          </span>
          <span className="icon is-small is-right">
            <i className="fas fa-check"></i>
          </span>
        </p>
      </div>
      <div className="field">
        <p className="control has-icons-left has-icons-right">
          <input
            className="input is-link"
            type="text"
            placeholder="Telefono"
            name="telefono"
            value={cliente.telefono}
            onChange={handleChange}
          />
          <span className="icon is-small is-left">
            <i className="fas fa-phone"></i>
          </span>
          <span className="icon is-small is-right">
            <i className="fas fa-check"></i>
          </span>
        </p>
      </div>
      <div className="field">
        <p className="control has-icons-left has-icons-right">
          <input
            className="input is-link"
            type="text"
            placeholder="Email"
            name="email"
            value={cliente.email}
            onChange={handleChange}
          />
          <span className="icon is-small is-left">
            <i className="fas fa-envelope"></i>
          </span>
          <span className="icon is-small is-right">
            <i className="fas fa-check"></i>
          </span>
        </p>
      </div>

      <div className="field is-grouped">
        <div className="control">
          <button className="button is-link">Guardar</button>
        </div>
        <div className="control">
          <button
            className="button is-link is-light"
            type="button"
            onClick={() => closeModal()}
          >
            Cancelar
          </button>
        </div>
      </div>
    </form>
  );
};

export default FormClientes;
