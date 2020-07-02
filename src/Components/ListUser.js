import React, { Component } from 'react';

import { PersonaService } from '../Service/PersonaService';
import Table from 'react-bootstrap/Table';
import Button from 'react-bootstrap/Button';

export class ListUser extends Component {

    constructor(props) {
        super(props);
        this.state = { personas: [], data: {} };
        this.personaService = new PersonaService();
        console.log('ok constructor')
    }

    updateState = (item) => {
        console.log('se ejecuto')
        console.log(item)
    }

    componentDidMount() {
        this.personaService.getAll().then(data => {
            this.setState({ personas: data.data })
        });
        console.log('ok despues de iniciar el componente')
    }

    render() {
        console.log('render call')
        return (
            <div>
                <Table striped bordered hover>
                    <thead>
                        <tr>
                            <th>#</th>
                            <th>Name</th>
                            <th>Lastname</th>
                            <th>Address</th>
                            <th>Tel</th>
                            <th></th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            this.state.personas.map((item, i) => {
                                return (
                                    <tr key={item.id}>
                                        <td>{item.id}</td>
                                        <td>{item.nombre}</td>
                                        <td>{item.apellido}</td>
                                        <td>{item.direccion}</td>
                                        <td>{item.telefono}</td>
                                        <td>
                                            <Button variant="primary" onClick={()=>{}}>Editar</Button>
                                            <Button variant="warning" onClick={this.updateState}>Eiminar</Button>
                                        </td>
                                    </tr>
                                )
                            })
                        }
                    </tbody>
                </Table>
            </div>
        );
    }
}

export default ListUser;