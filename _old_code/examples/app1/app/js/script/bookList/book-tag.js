define(
    ['require', 'react', 'hyperscript', 'helpers', './star-list-tag'], 
    function(require, React, hyper, helpers, StarList) {

        const {div, header, img, h1, p, code} = helpers(hyper);

		// function Book(props) {
		// 	var itemId = `book${props.id}`;
		// 	var imgName = `${props.image}`;
		// 	var imgFile = `old/images/${props.image}`;
		// 	return (
		// 		<div className="book" id={itemId}>
		// 			<a href="#"><img src={imgFile} alt={imgName}/></a>
		// 			<p className="bookName"><a href="#">{props.name}</a></p>
		// 			<p>by <a href="#">{props.author}</a></p>
		// 			<StarList bookid={itemId} rating={props.rating} />
		// 		</div>
		// 	);
		// }

		class Book extends React.component {
            render(){
                const props = this.props;
                const itemId = `book${this.props.id}`;
                const imgName = `${this.props.image}`;
                const imgFile = `old/images/${this.props.image}`;
                return 
                    div({className : "book", id : itemId},[
                        a({href:"#"}, img({src:imgFile, alt:imgName})),
                        p({className:"bookName"}, a({href:"#"}, props.name)),
                        p(["by ", a({href:"#"}, props.author)]),
                        StarList({bookid:itemId, rating:props.rating})
                    ]);
            }
        }

        return function(attributes={}, children=[]){
            return React.createElement(Book, attributes, children);
        };
    
    }
);
