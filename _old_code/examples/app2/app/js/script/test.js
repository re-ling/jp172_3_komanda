define([
    'react', 'react-dom', 'create-react-class', 'hyperscript', 'helpers'], 
    function(React, ReactDOM, createReactClass, hyper, helpers){

		const {a, div, img, input, label, p} = helpers(React.createElement);

        // function newTag(func){
        //     const InnerClass = createReactClass({
        //         render: function(){return func(this.props);}
        //     });
        //     return function(attrs={}, kids=[]){
        //         return React.createElement(InnerClass, attrs, kids);
        //     };
        // }
        

        function newTag(func){
            class InnerClass extends React.Component {
                render(){
                    return func(this.props);			
                }
            }
            return function(attrs={}, kids=[]){
                return React.createElement(InnerClass, attrs, kids);
            };
        }


        var star = newTag((props = { bookid : "", id : 1, value : "" })=>{
            const itemId = props.bookid + "star" + props.id;
            return 
                div(
                    input({type:"radio", id:itemId, name:props.bookid, value:props.value}),
                    label({htmlFor:itemId})
                );
        });
        
        return function(){
            ReactDOM.render(
                star({ bookid: "book1", id:1, value:true } ), 
                document.getElementById("test")
            )
        };

    }
);

