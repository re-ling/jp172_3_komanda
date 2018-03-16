// pseudokodas

body (
    header (
        title (
            icon = "",
            text = "Book Store"
        ),
        page_menu(
            pages["help"],
            pages["support"],
            pages["login"]
        )
    ),
    nav (
        action_menu(
            actions["browse"].selected = true,
            actions["buy"],
            actions["favorites"],
            actions["whislist"],
        )
    ),
    content (
        title(text = "Browse Available Books"),
        bar(
           filter_menu(
                filters["all"].selected = true,
                filters["recent"],
                filters["popular"],
                filters["free"]

            ),
            search_field()
        ),
        main(
            book_list(...),
            bubbles(...)
        )
    ),
    footer (
        footer_menu(
            pages["question"],
            pages["settings"]
        )
    )
)

pages = {
    help      = item(text = "Help Center"),
    support   = item(text = "Our Support"),
    login     = item(text = "Login"      ),
    question  = item(icon = "..."        ),
    settings  = item(icon = "..."        )
};

actions = {
    browse    = item(text = "Browse"         , icon = "World"),
    buy       = item(text = "Buy Books"      , icon = "Cart"),
    favorites = item(text = "Favorite Books" , icon = "Star"),
    whishlist = item(text = "Whishlist"      , icon = "Table")
};

filters = {
    all       = item(text = "All Books"    ),
    recent    = item(text = "Most Recent"  ),
    popular   = item(text = "Most Popular" ),
    free      = item(text = "Free Books"   )
};

books = [
    book(
        name   = "Jewels of Nizam", 
        author = "Geeta Devi", 
        image  = "jewels_of_nizam.png", 
        rating = 5.0
    ),
    book(
        name   = "Cakes & Bakes",
        author = "Sanjeev Capoor", 
        image  = "cakes_and_bakes.png",
        rating = 5.0
    ),
    book(
        name   = "Jamie's Kitchen", 
        author = "Jamie Oliver", 
        image  = "jamies_kitchen.png", 
        rating = 4.5
    ),
    book(
        name   = "Inexpensive Family Meals", 
        author = "Simon Holst", 
        image  = "inexpensive_family_meals.png", 
        rating = 4.0
    ),
    book(
        name   = "Paleo Slow Cooking", 
        author = "Crissy Gover", 
        image  = "paleo_slow_cooking.png", 
        rating = 4.5
    ),
    book(
        name   = "Cook Like an Intalian", 
        author = "Tobbie Puttok", 
        image  = "cook_like_an_italian.png", 
        rating = 4.0
    ),
    book(
        name   = "Suneeta Vaswani", 
        author = "Geeta Devi", 
        image  = "suneeta_vaswani.png", 
        rating = 5.0
    ),
    book(
        name   = "Jamie Does", 
        author = "Jamie Oliver", 
        image  = "jamie_does.png", 
        rating = 4.0
    ),
    book(
        name   = "Jamie's Italy", 
        author = "Jamie Oliver", 
        image  = "jamies_italy.png", 
        rating = 5.0
    ),
    book(
        name   = "Vegetables Cookbook", 
        author = "Matthew Biggs", 
        image  = "vegetables_cookbook.png", 
        rating = 3.5
    )
];