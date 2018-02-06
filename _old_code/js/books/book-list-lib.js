

function Star(props) {
	var itemId = props.bookid + "star" + props.id;
	return (
		<div>
			<input type="radio" id={itemId} name={props.bookid} value={props.value} />
			<label htmlFor={itemId}></label>
		</div>
	);
}

function StarList(props) {
	const starNums = Array.apply(null, {length: props.rating}).map(
        (x, y) => y + 1
    );
	const listItems = starNums.map((number) =>
		<Star 
            key={number.toString()} 
            id={number.toString()} 
            bookid={props.bookid}
			value={number} />
	);
	return (
		<div className="rating">
			{listItems}
		</div>
	);
}


function Book(props) {
   
	var itemId = `book${props.id}`;
	var imgName = `${props.image}`;
	var imgFile = `images/${props.image}`;
	var visible1 = [1].includes(props.view) ? "visible" : "hidden";
	var visible3 = [3].includes(props.view) ? "block" : "none";
	var visible13 = [1, 3].includes(props.view) ? "block" : "none";
    function addToWhishList(id) {
        whishList.add(id);
	}
    function addToByeList(id) {
        buyList.add(id);
	}
	return (
		<div className="book" id={itemId}>
			<a href="#"><img src={imgFile} alt={imgName}/></a>
			<p className="bookName"><a href="#">{props.name}</a></p>
			<p>by <a href="#">{props.author}</a></p>
			<StarList bookid={itemId} rating={props.rating} /><br />
            <p className={visible13}>Price: {props.price}</p>
            <button 
                id = {`btn${props.id}`}
                className={visible1} 
                type="button"
                onClick={addToWhishList(props.id)}
                >Add to whishlist</button>
			<input 
                id = {`chk${props.id}`}
                className={visible3} 
                type="checkbox"
                onClick={addToWhishList(props.id)} />
		</div>
	);
}

function BookList(props) {
	console.log(props.view);
	const listItems = props.books.map((book) =>
		<Book
			key={book.id.toString()}
			id={book.id} 
			name={book.name} 
			author={book.author} 
			image={book.image} 
            rating={book.rating}
            price={book.price}
            view={props.view} />
	);
	return (
		<div className="wholeblock">
			{listItems}
		</div>
	);
}

function bookListRun(list, view){
    const books = <BookList books={list} view={view} />;
    ReactDOM.render(
        books, 
        document.getElementById("bookList")
    );
}

