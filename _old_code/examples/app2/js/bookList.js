var bookList = [
    {
        id     : 1,
        name   : "Jewels of Nizam", 
        author : "Geeta Devi", 
        image  : "jewels_of_nizam.png", 
        rating : 5.0,
        price  : 0.0,
        year   : 2012, 
		check  : true
    },
    {
        id     : 2,
        name   : "Cakes & Bakes",
        author : "Sanjeev Capoor", 
        image  : "cakes_and_bakes.png",
        rating : 5.0,
        price  : 0.0,
        year   : 2017,
		check  : false
    },
    {
        id     : 3,
        name   : "Jamie's Kitchen", 
        author : "Jamie Oliver", 
        image  : "jamies_kitchen.png", 
        rating : 4.5,
        price  : 2,
        year   : 2014,
		check  : false
    },
    {
        id     : 4,
        name   : "Inexpensive Family Meals", 
        author : "Simon Holst", 
        image  : "inexpensive_family_meals.png", 
        rating : 4.0,
        price  : 2,
        year   : 2015,
		check  : false
    },
    {
        id     : 5,
        name   : "Paleo Slow Cooking", 
        author : "Crissy Gover", 
        image  : "paleo_slow_cooking.png", 
        rating : 4.5,
        price  : 2,
        year   : 2016,
		check  : false
    },
    {
        id     : 6,
        name   : "Cook Like an Intalian", 
        author : "Tobbie Puttok", 
        image  : "cook_like_an_italian.png", 
        rating : 4.0,
        price  : 2,
        year   : 2017,
		check  : false
    },
    {
        id     : 7,
        name   : "Suneeta Vaswani", 
        author : "Geeta Devi", 
        image  : "suneeta_vaswani.png", 
        rating : 5.0,
        price  : 2,
        year   : 2012,
		check  : false
    },
    {
        id     : 8,
        name   : "Jamie Does", 
        author : "Jamie Oliver", 
        image  : "jamie_does.png", 
        rating : 4.0,
        price  : 2,
        year   : 2012,
		check  : false
    },
    {
        id     : 9,
        name   : "Jamie's Italy", 
        author : "Jamie Oliver", 
        image  : "jamies_italy.png", 
        rating : 5.0,
        price  : 2,
        year   : 2012,
		check  : false
    },
    {
        id     : 10,
        name   : "Vegetables Cookbook", 
        author : "Matthew Biggs", 
        image  : "vegetables_cookbook.png", 
        rating : 3.5,
        price  : 2,
        year   : 2013,
		check  : false
    },
    {
        id     : 11,
        name   : "A man called Ove", 
        author : "Fredrick Backman", 
        image  : "a_man_called_ove.png", 
        rating : 4.5,
        price  : 2,
        year   : 2015,
		check  : false
    },
    {
        id     : 12,
        name   : "All the light we cannot see", 
        author : "Anthony Doerr", 
        image  : "all_the_light_we_cannot_see.png", 
        rating : 3,
        price  : 2,
        year   : 2012,
		check  : false
    },
    {
        id     : 13,
        name   : "Hillbilly Elegy", 
        author : "J. D. Vance", 
        image  : "hillbilly_elegy.png", 
        rating : 4,
        price  : 2.5,
        year   : 2012,
		check  : false
    },
    {
        id     : 14,
        name   : "Leonardo Da Vinci", 
        author : "Walter Isaacson", 
        image  : "leonardo_da_vinci.png", 
        rating : 4.5,
        price  : 2,
        year   : 2010,
		check  : false
    },
      {
        id     : 15,
        name   : "The catcher in the rye", 
        author : "J. D. Salinger", 
        image  : "the_catcher_in_the_rye.png", 
        rating : 4,
        price  : 3,
        year   : 2012,
		check  : false
    },
    {
        id     : 16,
        name   : "To kill a mockingbird", 
        author : "Harper Lee", 
        image  : "to_kill_a_mockingbird.png", 
        rating : 4,
        price  : 2,
        year   : 2012,
		check  : false
    },
    {
        id     : 17,
        name   : "Wonder", 
        author : "R. J. Palacio", 
        image  : "wonder.png", 
        rating : 4,
        price  : 2,
        year   : 2009,
		check  : false
    },
    {
        id     : 18,
        name   : "Jesus calling", 
        author : "Sarah Young", 
        image  : "jesus_calling.png", 
        rating : 3,
        price  : 0,
        year   : 2012,
		check  : false
    },
    {
        id     : 20,
        name   : "The subtile art of not giving", 
        author : "Mark Manson", 
        image  : "the_subtile_art_of_not_giving_a_fuck.png", 
        rating : 3.5,
        price  : 2,
        year   : 2012,
		check  : false
    }
];

function getPage(list, pageNo = 0, pageSize = 10){
    const pages = Math.floor(list.length / pageSize);
    const lower = pageNo * pageSize;
    const upper = (pageNo + 1) * pageSize; 
    return jmespath.search(list, `[${lower}:${upper}]`);
}

// console.log(bookList);
// console.log(jmespath.search(bookList, "[0:10]"));
// console.log(getPage(bookList, 0));
// console.log(getPage(bookList, 1));
