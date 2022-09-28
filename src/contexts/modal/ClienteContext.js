import React, { createContext, useReducer } from "react";
import {
  OBTENER_CLIENTES,
  REGISTRAR_CLIENTES,
  OBTENER_CLIENTE,
  MODIFICAR_CLIENTE,
  ELIMINAR_CLIENTE,
} from "../../const/ActionTypes";
import ClienteReducer from "../../reducer/ClienteReducer";
import { v4 as uuidv4 } from "uuid";
import Axios from 'axios';

export const ClienteContext = createContext();

export const ClienteContextProvider = (props) => {
  const initialState = {
    clienteList: [],
    clienteActual: null,
  };

  const [state, dispatch] = useReducer(ClienteReducer, initialState);

  const obtenerClientes = async() => {
    const resultado = await Axios.get("/clientes");

    dispatch({
      type: OBTENER_CLIENTES,
      payload: resultado.data,
    });
  };

  const registrarCliente = (cliente) => {
    let clienteNuevo = {
      ...cliente,
      idCliente: uuidv4(),
    };
    dispatch({
      type: REGISTRAR_CLIENTES,
      payload: clienteNuevo,
    });
  };

  const obtenerCliente = (cliente) => {
    dispatch({
      type: OBTENER_CLIENTE,
      payload: cliente,
    });
  };

  const actualizarCliente = (cliente) => {
    dispatch({
      type: MODIFICAR_CLIENTE,
      payload: cliente,
    });
  };

  const eliminarCliente = (idCliente) => {
    dispatch({
      type: ELIMINAR_CLIENTE,
      payload: idCliente,
    });
  };

  return (
    <ClienteContext.Provider
      value={{
        clienteList: state.clienteList,
        clienteActual: state.clienteActual,
        obtenerClientes,
        registrarCliente,
        obtenerCliente,
        actualizarCliente,
        eliminarCliente,
      }}
    >
      {props.children}
    </ClienteContext.Provider>
  );
};
