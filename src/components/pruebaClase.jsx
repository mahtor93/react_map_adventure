import '../App.css';
import React from 'react';

class Prueba extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            //Esto representa el estado del componente
            //valores que serán almacenados en este componente
            clicks:0,
            newName:''
        }

        this.handleClick = this.handleClick.bind(this); //Obtiene la acción de click y +1 al contador
        this.clearClick = this.clearClick.bind(this); //Obtiene la acción de click y contador = 0
        this.handleChange = this.handleChange.bind(this); //
        this.handleSubmit = this.handleSubmit.bind(this); //

    }

    handleClick(){
        this.setState({clicks: this.state.clicks+1})
    }
    clearClick(){
        this.setState({clicks:0})
    }

    handleChange(event){
        this.setState({newName:event.target.value});
    }

    handleSubmit(event){
        event.preventDefault();
        this.props.names.push(this.state.newName);
        this.setState({newName:""});
    }

    render(){
        let content;
        if (this.props.names !== undefined && this.props.names.length >0){
            content = this.props.names.map((name)=>
                <li className="lista-bkn" key={name}> {name}</li>
            );
        }else{
            content = "na k hacerle"
        }


        return (<>
        <h1>{this.props.title}</h1>
        <form onSubmit={this.handleSubmit}>
            <input className="form-input" type="text" value={this.state.newName} onChange={this.handleChange}/>
            <input className='btn btn-body' type="submit" value="Agregar nombre"/>
        </form>
            <p>Lista de weones:</p>
            <p>{content}</p>
            <p>Has clikado {this.state.clicks} veces</p>
            <button onClick={this.handleClick} className='btn btn-aventura'>
                Contar
            </button>
            <button className='btn btn-body' onClick={this.clearClick}>Borrar</button>
        </>
        )
    }

}

export default Prueba;