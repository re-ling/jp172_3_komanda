define(
    ['require', 'react-dom', './appTag'], 
    function(require, ReactDOM, appTag) 
    {

        ReactDOM.render(
            appTag({ logo : "app/media/logo.svg"}, "Labas"), 
            document.getElementById('root')
        );

    }
);
