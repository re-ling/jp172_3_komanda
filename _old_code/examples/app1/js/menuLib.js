function MeniItem(props){
    return(
        <li 
            id={props.id} 
            class={props.class}
            onclick={props.onclick}>
                {props.prompt}
            </li>
    );
}


function Menu(props) {
	const menuitems = props.items.map(item =>
		<MenuItem
			key={item.id.toString()}
			id={"tm" + item.id.toString()} 
            prompt={item.prompt}
            visible={uten.visibility}
            onclick={item.onclick} />
	);
	return (
        <ul class="topmenu">
            {menuitems}
        </ul>  
	);
}

function menuListRun(menulist, menuname){
    ReactDOM.render(
        <Menu items={menulist} />, 
        document.getElementById(menuname)
    );
}