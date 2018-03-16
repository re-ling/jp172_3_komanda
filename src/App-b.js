import React from 'react'
import ReactDOM from 'react-dom';
import './App.css'
import axios from 'axios'

class App extends React.Component {
    constructor () {
        super()
        this.state = {
            data : []
        }
        this.handleClick = this.handleClick.bind(this)
    }
    
    handleClick () {
        axios.get('http://localhost:8080/api/items')
            .then(response => this.setState({ data : response.data }))
    }
    
    render () {
        return (
            <div className='button_container'>
                <button className='button' onClick={this.handleClick}>
                    Click Me
                </button>
                <table>
                    <tbody>{ 
                        this.state.data.map( row => 
                            <tr key={row.id} >
                                <td> id : {row.id} </td>
                                <td> name : {row.name} </td>
                                <td> price : {row.price} </td>
                            </tr>
                        )
                    }</tbody>
                </table>
            </div>
        )
    }
}

export default function mount(){
    ReactDOM.render(
        <App />, 
        document.getElementById("root")
    );
}
