define(
    ['require', 'react', 'hyperscript', 'helpers'], 
    function(require, React, hyper, helpers) {

        const {div, header, img, h1, p, code} = helpers(hyper);

		class Star extends React.Component {
            render(){
                const itemId = props.bookid + "star" + props.id;
                cont props = this.props;
                return 
                    div([
                        input({type:"radio", id: itemId, name: props.bookid, value: props.value}),
                        label({htmlFor : itemId})
                    ]);
            }
		}

        // class App extends React.Component {
        //     render() {
        //         return div({className:"App"},[
        //             header( {className:"App-header"},[
        //                 img( {src: this.props.logo, className:"App-logo", alt:"logo"}),
        //                 h1( {className:"App-title"}, "Welcome to React")
        //             ]),
        //             p( {className:"App-intro"},[
        //                 "To get started, edit ", 
        //                 code("src/App.js"),
        //                 " and save to reload."
        //             ])
        //         ]);
        //     }
        // }

        return function(attributes={}, children=[]){
            return React.createElement(Star, attributes, children);
        };

    }
);
