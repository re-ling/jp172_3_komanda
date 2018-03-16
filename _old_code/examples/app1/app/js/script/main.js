define(
    ['require', 'react', 'react-dom', 'react-html-converter', 'data/html-text'], 
    function(require, React, ReactDOM,  ReactHTMLConverter, html) 
    {

          //return bookListRun(bookList);
          

        class HTMLIn extends React.Component {
            render() {
                return React.createElement('div', { className:"converted"}, this.props.text);
            };
        }
        
        const converter = ReactHTMLConverter;
        converter.registerComponent('htmlIn', HTMLIn);
        
        //const html = '<div class="my-div"><Test text="Hello World" /></div>';
        
        class HTMLOut extends React.Component {
            render() {
                return converter.convert(html);
            }
        }

        ReactDOM.render(
            React.createElement(HTMLOut), 
            document.getElementById("body")
        );
    }
);
