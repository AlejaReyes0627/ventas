import React from 'react';
import Layout from '../Components/Layout';

const Clientes = () =>{

    return(

        <Layout>
            <div className='panel'>
                <div className='panel-heading' align='center' style={{backgroundColor: '#005038', color:'white'}}>
                    Clientes
                </div>
                <div className='box '>
                    <table className='table' align='center' style={{textAlign: "center"}}>
                        <thead>
                            <tr>
                                <th style={{textAlign: "center"}}>Nombre</th>
                                <th style={{textAlign: "center"}}>Apellidos</th>
                                <th style={{textAlign: "center"}}>Direccion</th>
                                <th style={{textAlign: "center"}}>Telefono</th>
                                <th style={{textAlign: "center"}}>Email</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>Mario</td>
                                <td>Zapata</td>
                                <td>Aambala</td>
                                <td>34991dfg32</td>
                                <td>M@gmail.com</td>
                            </tr>
                            <tr>
                                <td>Mario</td>
                                <td>Zapata</td>
                                <td>Aamdfgbala</td>
                                <td>3499132</td>
                                <td>Mdfgdf@gmail.com</td>
                            </tr>
                            <tr>
                                <td>Mario</td>
                                <td>Zapata</td>
                                <td>Aambala</td>
                                <td>3499132</td>
                                <td>Mdfgdfg@gmail.com</td>
                            </tr>
                            <tr>
                                <td>Mario</td>
                                <td>Zatretrepata</td>
                                <td>Aambala</td>
                                <td>3499132</td>
                                <td>Mrgrdgdf@gmail.com</td>
                            </tr>
                            <tr>
                                <td>Mario</td>
                                <td>Zapata</td>
                                <td>Aambasdasdala</td>
                                <td>3499132</td>
                                <td>asdasdsaM@gmaiaasdsal.com</td>
                            </tr>

                        </tbody>
                    </table>
                </div>
            </div>
        </Layout>    
    );

}
export default Clientes;