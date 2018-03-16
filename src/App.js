import {observable} from 'mobx';
import {observer} from 'mobx-react';
import React from 'react'
import ReactDOM from 'react-dom';
import './App.css'
import axios from 'axios'

const appState = observable({
    data : []
});
appState.handleClick = () => {
    axios.get('http://localhost:8080/api/items')
        .then(response => appState.data = response.data )
};

const App = observer(() => {
    return (
        <div className='button_container'>
            <button className='button' onClick={appState.handleClick}>
                Click Me
            </button>
            <table>
                <tbody>{ 
                    appState.data.map( row => 
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
})

export default function mount(){
    ReactDOM.render(
        <App />, 
        document.getElementById("root")
    );
}