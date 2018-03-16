{/* <div class="navmenu">
    <ul class="mainmenu">
        <!-- Links to be added:-->
        <li>
            <a href="#" onclick="setStatus('view', 'browse')">
                <i class="fa fa-globe menu-icon" aria-hidden="true"></i>
                Browse
            </a>
        </li>
        <li>
            <a href="#" onclick="setStatus('view', 'buy')">
                <i class="fa fa-shopping-cart menu-icon" aria-hidden="true"></i>
                Buy Books
            </a>

        </li>
        <li>
            <a id="favourite" href="#">

                <i class="fa fa-star menu-icon" aria-hidden="true"></i>Favourite Books</a>
        </li>
        <li>
            <a href="#">
                <i class="fa fa-th-list menu-icon" aria-hidden="true"></i>Wishlist</a>
        </li>
    </ul>
</div> */}

function MenuItem(props) {
    const itemId = "mnu-" + props.id; 
    return (
        <li>
            <a id={itemId} href="#">
                <i className="fa fa-globe menu-icon" aria-hidden="true"></i>
                {props.text}
            </a>
        </li>
    );
};

function SideMenu(props) {
    let lineNo = 0;
    let listItems = props.data.items.map((li, i) => 
        <MenuItem
            key={i.toString()}
            id={i} 
            text={li.text}
            view={li.view} />
    );
	return (
        <ul className={props.data.className}>
            {listItems}
        </ul>
	);
}


function sideMenuRun(list){
    const sideManuList = <SideMenu data={list} />;
    const sideMenuElement = document.querySelector("#sidemenu");
    
    ReactDOM.render(
        sideManuList, 
        sideMenuElement
    );

};
