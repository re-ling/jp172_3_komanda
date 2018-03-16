class App extends React.Component {
    constructor(props) {
        super(props);
        this.displayName = 'App'
    }
    
    render() {
        return React.createElement(
            'div',
            null,
            React.createElement(
                'p',
                null,
                'Rating component'
            ),
            React.createElement(Rating, null),
            React.createElement(
                'p',
                null,
                'Rating component (with set value that ',
                React.createElement(
                  'strong',
                  null,
                  'can'
                ),
                ' be changed)'
            ),
            React.createElement(Rating, { rating: '2.5' })
        );
    }
}

function Stars(props){
   return React.createElement(Rating, {rating : props.rating} ); 
}

class Rating extends React.Component {

    constructor(props) {
        super(props);
        this.displayName = 'Rating'
        this.state = {
            rating: this.props.rating || null,
            temp_rating: null
        };
    }


    rate(rating) {
        this.setState({
            rating: rating,
            temp_rating: rating
        });
    }
    star_over(rating) {
        this.state.temp_rating = this.state.rating;
        this.state.rating = rating;

        this.setState({
            rating: this.state.rating,
            temp_rating: this.state.temp_rating
        });
    }
    star_out() {
        this.state.rating = this.state.temp_rating;
        this.setState({ rating: this.state.rating });
    }
    render() {
        var stars = [];

        for (var i = 0; i < 5; i++) {
            var klass = 'star-rating__star';

            if (this.state.rating >= i && this.state.rating != null) {
                klass += ' is-selected';
            }

            stars.push(React.createElement(
                'label',
                {
                    key: i,
                    className: klass,
                    onClick: this.rate.bind(this, i),
                    onMouseOver: this.star_over.bind(this, i),
                    onMouseOut: this.star_out 
                },
                '\u2605'
            ));
        }

        return React.createElement(
            'div',
            { className: 'star-rating' },
            stars
        );
    }
};

Rating.propTypes = {
    disabled: PropTypes.bool
};


ReactDOM.render(React.createElement(App, null), document.querySelector('#app'));