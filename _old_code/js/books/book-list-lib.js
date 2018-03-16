class StarList extends React.Component {
    constructor(props) {
        super(props);
		this.state = {
            bookid     : props.bookid,
			rating     : props.rating,
			starTotal  : props.parameters.starTotal,
			step       : props.parameters.step,
            content    : props.parameters.character.repeat(props.parameters.starTotal),
			percentage : 0
		}
        this.setPercentage = this.setPercentage.bind(this);
        this.changeStars = this.changeStars.bind(this);
        this.revert = this.revert.bind(this);
        this.setRating = this.setRating.bind(this);
 		this.state.percentage = this.setPercentage(props.rating * 100 / props.parameters.starTotal)
   		this.outerDiv = null;
   		this.innerDiv = null;
   }
	
	setPercentage(newPercentage){
		if (newPercentage < 0) newPercentage = 0;
		if (newPercentage > 100) newPercentage = 100;
		return Math.round(newPercentage / this.state.step) * this.state.step;
	}

	changeStars(event) {
		const rect = this.outerDiv.getBoundingClientRect();
		this.setState({ percentage : this.setPercentage((event.clientX - rect.left) * 100 / rect.width) });
	}
		
	revert(){
		this.setState({ percentage : this.setPercentage(this.state.rating * 100 / this.state.starTotal) });
	}
		
	setRating(event){
		const rect = this.outerDiv.getBoundingClientRect();
		const percentage = this.setPercentage((event.clientX - rect.left) * 100 / rect.width)
		const rating = (this.state.percentage * this.state.starTotal / 100).toFixed(2);
        let result = bookListData.filter(book => book.id == this.state.bookid);
        result[0].rating = rating;
        this.setState({ rating : rating, percentage : percentage });
	}

	render() { 
        return (
            <div 
                className="stars-outer"
                onMouseMove={(event) => this.changeStars(event)} 
                onMouseOut={this.revert} 
                onMouseDown={(event) => this.setRating(event)}
                ref={outerRef => { 
                    this.outerDiv = outerRef; 
                }}
                >{this.state.content}
                <div 
                	className="stars-inner"
                	ref={innerRef => { 
                    	this.innerDiv = innerRef; 
                	}}
                    style = {{width : `${this.state.percentage.toString(10)}%`}}
                >{this.state.content}</div>
            </div>
        );
    }
}


function Book(props) {
   
	const itemId = `book${props.book.id}`;
	const imgName = props.book.image;
	const imgFile = `images/${props.book.image}`;
	const visible1 = [1].includes(props.parameters.view) ? "visible" : "hidden";
	const visible3 = [3].includes(props.parameters.view) ? "visible" : "hidden";
	const visible13 = [1, 3].includes(props.parameters.view) ? "visible" : "hidden";
    function addToWhishList(id) {
        whishList.add(id);
	}
    function addToByeList(id) {
        buyList.add(id);
	}
	function showDescription(){
		const modal = document.getElementById('myModal');
		const modcontent = document.getElementsByClassName('about')[0];
		modcontent.innerHTML=" I like this book";
		modal.style.display = "block";
	}
	return (
		<div className="book" id={itemId}>
			<a href="#" onClick={showDescription}><img src={imgFile} alt={imgName}/></a>
			<p className="bookName"><a href="#">{props.book.name}</a></p>
			<p>by <a href="#">{props.book.author}</a></p>
			<StarList bookid={props.book.id} rating={props.book.rating} parameters={props.parameters}/><br />
            <p className={visible13}>Price: {props.book.price}</p>
            <button 
                id = {`btn${props.book.id}`}
                className={visible1} 
                type="button"
                onClick={addToWhishList(props.book.id)}
                >Add to whishlist</button>
			<input 
                id = {`chk${props.book.id}`}
                className={visible3} 
                type="checkbox"
                onClick={addToWhishList(props.book.id)} />
		</div>
	);
}

function BookList(props) {
	function closeModal(){
		const modal = document.getElementById('myModal');
		modal.style.display = "none";
	}
	const listItems = props.bookList.map((book) =>
		<Book
			key={book.id.toString()}
            parameters={props.parameters}         
			book={book} />
	);
	return (
		<div className="wholeblock">
			{listItems}
			<div id="myModal" className="modal">
				<div className="modal-content">
					<span className="close" onClick={closeModal}>&times;</span>
					<p className="about">Something about this book..</p>
				</div>
			</div>
		</div>
	);
}

const starTotal = 5;
const step = 5;

function changeRuleBeforeLoading(sheetsIDs, rulesToChange,  newString){
	const newContent = `"${newString.repeat(starTotal)}"`;
    const selector = sheetsIDs.join(", ");
    const sheets = document.querySelectorAll(selector)
    for (let sheet of sheets){
        for (let rule of sheet.sheet.rules){
            if (rulesToChange.includes(rule.selectorText))
                rule.style.content = newContent;
        }
    }
}

function bookListRun(list, view){
    const books = <BookList bookList={list} parameters={{starTotal: starTotal, step:step, view:view, character: "\uf005"}} />;
    ReactDOM.render(
        books, 
        document.getElementById("bookList")
    );
}

