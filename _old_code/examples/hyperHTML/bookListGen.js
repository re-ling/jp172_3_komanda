    
    const {bind, wire} = hyperHTML;
    
    /*
        function Star(props) {
          var itemid = "star" + props.number.toString();
          return wire(props)`
              `;
        }*/
        
        function Stars(props){
          const starNums = Array.apply(null, {length: props.rating}).map((x, y) => y + 1);
          return wire()`
            <div className="rating">
              ${starNums.map(number => {
                var idemId = props.bookid + "star" + props.id;
//                return wire(number)`
//                    <input type="radio" id=${itemId} name=${props.bookid} value=${props.value} />
//                    <label htmlFor=${itemId}></label>`;
                return number;
              })}
             </div>`;
        }
      
        function Book(props) {
          var itemId = `book${props.id}`;
          var imgName = `${props.image}`;
          var imgFile = `images/${props.image}`;
          return wire()`
            <div class="book" id=${itemId}>
              <a href="#"><img src=${imgFile} alt=${imgName}/></a>
              <p class="bookName"><a href="#">${props.name}</a></p>
              <p>by <a href="#">{props.author}</a></p>
              ${Stars({bookid: itemId, rating: props.rating})}
            </div>`;
        }
    
        bind(document.querySelector('#bookList'))`
        <div className="wholeblock">
          ${bookList.map(
            book => wire(book)`
            ${Book(book)}`
        )}</div>`;
    
    /*
        function BookList(props) {
          return wire(props)`
            <div className="wholeblock">${
              //props.books.map(book => wire(book)`${Book(book)}`)
              props.map(book => 
                wire(book)`${book.id.toString()}`.
              )
            }</div>`;
        } 
    
        
        bind(document.querySelector('#bookList'))`
          ${BookList(bookList)}`;*/