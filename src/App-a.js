import './App.css'
import axios from 'axios'

function handleClick(){
    axios.get('http://localhost:8080/api/items')
        .then(response => App(response.data ))
}

function App(data = []){
    let btn_container = document.querySelector(".button_container");
    let table;
    let tbody; 
    if (btn_container == null) {
        btn_container = document.createElement("div");
        btn_container.className = "button_container";
        let btn = document.createElement("button");
        btn.className = "button";
        btn.textContent = "Click me";
        btn.onclick = handleClick;
        btn_container.appendChild(btn);
        table = document.createElement("table");
        btn_container.appendChild(table);
        tbody = document.createElement("tbody");
        table.appendChild(tbody);
    } else {
        table = document.querySelector(".button_container table");
//        table.childNodes[0]
        tbody = document.querySelector("tbody");
        tbody.innerHTML = "";
    }

    //let fragment = document.createDocumentFragment()
    for (let item of data) {
        let row = document.createElement("tr");
        let id = document.createElement("td");
        id.textContent = ` id : ${item.id}`;
        row.appendChild(id);
        let name = document.createElement("td");
        name.textContent = ` name : ${item.name}`;
        row.appendChild(name);
        let price = document.createElement("td");
        price.textContent = ` name : ${item.price}`;
        row.appendChild(price);
        tbody.appendChild(row);
    };
    return btn_container;
}

export default function mount(){
    let root = document.getElementById("root");
    root.innerHtml = "";
    root.appendChild(App()); 
}