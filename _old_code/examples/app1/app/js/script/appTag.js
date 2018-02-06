define(
    ['require', 'react', 'hyperscript', 'helpers'], 
    function(require, React, hyper, helpers) {

        const {div, header, img, h1, p, code} = helpers(hyper);
        class App extends React.Component {
            render() {
                return div({className:"App"},[
                    header( {className:"App-header"},[
                        img( {src: this.props.logo, className:"App-logo", alt:"logo"}),
                        h1( {className:"App-title"}, "Welcome to React")
                    ]),
                    p( {className:"App-intro"},[
                        "To get started, edit ", 
                        code("src/App.js"),
                        " and save to reload."
                    ])
                ]);
            }
        }

        return function(attributes={}, children=[]){
            return React.createElement(App, attributes, children);
        };

    }
);
