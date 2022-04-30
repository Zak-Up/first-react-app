import React, { Component } from 'react';

class Reloj extends Component {
    constructor(props) {
        super(props);
    }

    componentWillUnmount(){
        console.log(3, "El componente a sido eliminado del DOM");
    }

    render(){
        return <h3>{this.props.hora}</h3>;
        
    }
}

export default class CicloVidaComponentes extends Component {
    constructor(props) {
        super(props);
        console.log(0, "El componente se inicializa, aun NO esta en el DOM");

        this.state = {
            hora: new Date().toLocaleTimeString(),
            visible: false
        };

    this.temporizador = null;
    }

    componentDidMount(){
        console.log(1, "El componente ya se encuentra en el DOM");
    }

    componentDidUpdate(){
        console.log(2, "El estado de las props o del componente han cambiado");
    }

    tictac = () => {
        this.temporizador = setInterval(() => {
            this.setState({
                hora: new Date().toLocaleTimeString(),
            });
        }, 1000);
    };

    iniciar = () => {
        this.tictac();
        this.setState({
            visible: true,
        })
    };

    detener = () => {
        clearInterval(this.temporizador);
        this.setState({
            visible: false,
        })
    };

    render() {
        console.log(4, "El componente se dibuja (O se redibuja por un cambio) en el DOM")
        return (
            <>
                <h2>Ciclo de Vida de los Componentes de Clase</h2>
                {this.state.visible && <Reloj hora={this.state.hora}/>}
                <button onClick={this.iniciar}>INICIAR</button>
                <button onClick={this.detener}>DETENER</button>
            </>
        )
    }
}