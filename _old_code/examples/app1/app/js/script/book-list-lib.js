define(
	['require', 'react-dom', 'hyperscript', 'helpers', './bookList/book-list-tag'], 
    function(require, ReactDOM, hyper, helpers, BookList) {

        return function bookListRun(list){
			ReactDOM.render(
				BookList({books:list}), 
				document.getElementById("bookList")
			);
		}

	}

);