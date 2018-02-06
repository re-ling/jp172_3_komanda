// JSON

var app = {
    header : {
        title : {
            icon : "",
            text : "Book Store"
        },
        site_menu : [
            { id : "help"    },
            { id : "support" },
            { id : "login"   }
        ]
    },
    nav : {
        action_menu : [
            { id : "browse", selected : true  },
            { id : "buy"                      },
            { id : "favorites"                },
            { id : "whislist"                 }
        ]
    },
    content : {
        title : {text : "Browse Available Books"},
        bar : {
            filtet_menu : [
                { id : "all", selected = true },
                { id : "recent"               },
                { id : "popular"              },
                { id : "free"                 }

            ],
            search_field : {
                text : "Enter Keywords", 
                icon : "..."
            }
        },
        main : {
            book_list : [ /*...*/ ],
            bubbles   : [ /*...*/ ]
        }
    },
    footer : [
        { id : "question", icon : ""},
        { id : "settings", icon : ""}
    ]
};


var pages = {
    help      : { text : "Help Center" },
    support   : { text : "Our Support" },
    login     : { text : "Login"       },
    question  : { icon : "..."         },
    settings  : { icon : "..."         }
};

var actions = {
    browse    : { text : "Browse"         , icon : "World" },
    buy       : { text : "Buy Books"      , icon : "Cart"  },
    favorites : { text : "Favorite Books" , icon : "Star"  },
    whishlist : { text : "Whishlist"      , icon : "Table" }
};

var filters = {
    all       : { text : "All Books"    },
    recent    : { text : "Most Recent"  },
    popular   : { text : "Most Popular" },
    free      : { text : "Free Books"   }
};

var books = [
    {
        name   : "Jewels of Nizam", 
        author : "Geeta Devi", 
        image  : "jewels_of_nizam.png", 
        rating : 5.0
    },
    {
        name   : "Cakes & Bakes",
        author : "Sanjeev Capoor", 
        image  : "cakes_and_bakes.png",
        rating : 5.0
    },
    {
        name   : "Jamie's Kitchen", 
        author : "Jamie Oliver", 
        image  : "jamies_kitchen.png", 
        rating : 4.5
    },
    {
        name   : "Inexpensive Family Meals", 
        author : "Simon Holst", 
        image  : "inexpensive_family_meals.png", 
        rating : 4.0
    },
    {
        name   : "Paleo Slow Cooking", 
        author : "Crissy Gover", 
        image  : "paleo_slow_cooking.png", 
        rating : 4.5
    },
    {
        name   : "Cook Like an Intalian", 
        author : "Tobbie Puttok", 
        image  : "cook_like_an_italian.png", 
        rating : 4.0
    },
    {
        name   : "Suneeta Vaswani", 
        author : "Geeta Devi", 
        image  : "suneeta_vaswani.png", 
        rating : 5.0
    },
    {
        name   : "Jamie Does", 
        author : "Jamie Oliver", 
        image  : "jamie_does.png", 
        rating : 4.0
    },
    {
        name   : "Jamie's Italy", 
        author : "Jamie Oliver", 
        image  : "jamies_italy.png", 
        rating : 5.0
    },
    {
        name   : "Vegetables Cookbook", 
        author : "Matthew Biggs", 
        image  : "vegetables_cookbook.png", 
        rating : 3.5
    }
];