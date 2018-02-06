define(
    ['require', 'react', 'hyperscript', 'helpers', 'star-tag'], 
    function(require, React, hyper, helpers, Star) {

    const {div, header, img, h1, p, code} = helpers(hyper);

    class StarList extends React.Component {
        render(){
            const starNums = Array.apply(null, {length: tjos.props.rating}).map((x, y) => y + 1);
            const listItems = starNums.map((number) =>
                Star({ 
                    key: number.toString(), id: number.toString(), 
                    bookid: this.props.bookid, value: number
                })
            );
            return div({className:"rating"}, listItems);
        }
    }

    return function(attributes={}, children=[]){
        return React.createElement(StarList, attributes, children);
    };
);