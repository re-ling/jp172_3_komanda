class StarList extends React.Component {
    constructor(props) {
        super(props);
        this.setPercentage = this.setPercentage.bind(this);
        this.changeStars = this.changeStars.bind(this);
        this.showStars = this.showStars.bind(this);
        this.revert = this.revert.bind(this);
        this.setRating = this.setRating.bind(this);
		this.status = {
            bookid     : props.bookid,
			rating     : props.rating,
			starTotal  : props.parameters.starTotal,
			step       : props.parameters.step,
            content    : props.parameters.character.repeat(props.parameters.starTotal),
			percentage : 0
		}
        this.setPercentage(this.status.rating * 100 / this.status.starTotal);
   		this.outerDivId = this.status.bookid + "stars";
   		this.outerDiv = null;
   		this.innerDiv = null;
   		this.content = (
            <div 
                className="stars-outer"
                //onMouseMove={(event) => this.changeStars(event)} 
                //onMouseOut={this.revert} 
                onMouseDown={(event) => this.setRating(event)}
                ref={outerRef => { 
                    this.outerDiv = outerRef; 
                }}
                >{this.status.content}
                <div 
                	className="stars-inner"
                	ref={innerRef => { 
                    	this.innerDiv = innerRef; 
                	}}
                    style = {{width : `${this.status.percentage.toString(10)}%`}}
                >{this.status.content}</div>
            </div>
        );
   }
	
	setPercentage(newPercentage){
		if (newPercentage < 0) newPercentage = 0;
		if (newPercentage > 100) newPercentage = 100;
		const starPercentage = Math.round(newPercentage / this.status.step) * this.status.step;
		this.status.percentage = starPercentage;
	}

    showStars(){
    	//document.querySelector(`#rating-num`).innerHTML = (percentage * starTotal / 100).toFixed(2); 
    	this.innerDiv.style.width = `${this.status.percentage.toString(10)}%`;
    }
	
	changeStars(event) {
		const rect = this.outerDiv.getBoundingClientRect();
		this.setPercentage((event.clientX - rect.left) * 100 / rect.width)
		this.showStars();
	}
		
	revert(){
		this.setPercentage(this.status.rating * 100 / this.status.starTotal);
		this.showStars();
	}
		
	setRating(event){
		const rect = this.outerDiv.getBoundingClientRect();
		this.setPercentage((event.clientX - rect.left) * 100 / rect.width)
		this.status.rating = (this.status.percentage * this.status.starTotal / 100).toFixed(2);
        let result = bookListData.filter(book => book.id == this.status.bookid);
        result[0].rating = this.status.rating;
		this.showStars();
	}

	render() { 
        return this.content;
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

