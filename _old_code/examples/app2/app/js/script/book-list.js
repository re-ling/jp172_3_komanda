define(
    ['require', 'react', 'react-dom', 'hyperscript', 'helpers'], 
    function(require, React, ReactDOM, hyper, helpers){

		const {a, div, img, input, label, p} = helpers(hyper);

		class Star extends React.Component {
            render(){			
				const props = this.props;
				const itemId = props.bookid + "star" + props.id;
				return (
					div([
						input({type:"radio", id:itemId, name:props.bookid, value:props.value}),
						label({htmlFor:itemId})
					])
				);
			}
		}

		const star = function(attrs={}, kids=[]){
			return React.createElement(Star, attrs, kids);
		};
			

		class StarList extends React.Component {
            render(){
				const props = this.props;
				const starNums = Array.apply(null, {length: props.rating}).map((x, y) => y + 1);
				const listItems = starNums.map((number) =>
					star({ key:number.toString(), id:number.toString(), 
							bookid:props.bookid, value:number})
				);
				return (div({ className:"rating"}, listItems ));
			}
		}

		const starList = function(attrs={}, kids=[]){
			return React.createElement(StarList, attrs, kids);
		};

		class Book extends React.Component {
            render(){
				const props = this.props
				const itemId = `book${props.id}`;
				const imgName = `${props.image}`;
				const imgFile = `app/media/${props.image}`;
				return (
					div({className:"book", id:itemId},[
						a({ href:"#"}, 
							img({ src:imgFile, alt:imgName})
						),
						p({className:"bookName"}, 
							a({href:"#"}, props.name)
						),
						p([
							"by ",
							a({href:"#"}, props.author)
						]),
						starList({ bookid:itemId, rating:props.rating})
					])
				);
			}
		}

		const book = function(attrs={}, kids=[]){
			return React.createElement(Book, attrs, kids);
		};

		class BookList extends React.Component {
            render(){
				const props = this.props
				const listItems = props.bookList.map((data) =>
					book({
						key	  	: 	data.id.toString(),
						id		:	data.id, 
						name	:	data.name, 
						author	:	data.author, 
						image	:	data.image, 
						rating	:	data.rating,
					})
				);
				return (
					div({ className:"wholeblock"}, listItems)
				);
			}
		}

		const bookList = function(attrs={}, kids=[]){
			return React.createElement(BookList, attrs, kids);
		};

		return function bookListRun(list){
			ReactDOM.render(
				bookList({ bookList:list } ), 
				document.getElementById("bookList")
			);
		}

	}
);
