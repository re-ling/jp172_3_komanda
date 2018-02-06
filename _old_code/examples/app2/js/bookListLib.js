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
	const starNums = Array.apply(null, {length: props.rating}).map((x, y) => y + 1);
	const listItems = starNums.map((number) =>
		<Star key={number.toString()} id={number.toString()} bookid={props.bookid}
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
	return (
		<div className="book" id={itemId}>
			<a href="#"><img src={imgFile} alt={imgName}/></a>
			<p className="bookName"><a href="#">{props.name}</a></p>
			<p>by <a href="#">{props.author}</a></p>
			<StarList bookid={itemId} rating={props.rating} />
		</div>
	);
}


function BookList(props) {
	const listItems = props.books.map((book) =>
		<Book
			key={book.id.toString()}
			id={book.id} 
			name={book.name} 
			author={book.author} 
			image={book.image} 
            rating={book.rating}
            props={book}  />
	);
	return (
		<div className="wholeblock">
			{listItems}
		</div>
	);
}

function bookListRun(list){
    ReactDOM.render(
        <BookList books={list} />, 
        document.getElementById("bookList")
    );
}

bookListRun(bookList);

