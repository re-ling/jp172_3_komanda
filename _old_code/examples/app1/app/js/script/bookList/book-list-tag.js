define(
    ['require', 'react', 'hyperscript', 'helpers', './book-tag'], 
    function(require, React, hyper, helpers, Book) {

        const {div, header, img, h1, p, code} = helpers(hyper);

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

		class BookList extends React.component {
            render(){
                const props = this.props;
                const listItems = props.books.map((book) =>
                    Book({
                        key     :   book.id.toString(),
                        id      :   book.id, 
                        name    :   book.name, 
                        author  :   book.author, 
                        image   :   book.image, 
                        rating  :   book.rating,
                        props   :   book 
                    })
                );
                return div({ className:"wholeblock"}, listItems);
            }
		}

        return function(attributes={}, children=[]){
            return React.createElement(BookList, attributes, children);
        };

);