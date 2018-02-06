var bookListData = [
    {
        id     : 1,
        name   : "Jewels of Nizam", 
        author : "Geeta Devi", 
        image  : "jewels_of_nizam.png", 
        rating : 5.0,
        price  : 0.0,
        year   : 2012
    },
    {
        id     : 2,
        name   : "Cakes & Bakes",
        author : "Sanjeev Capoor", 
        image  : "cakes_and_bakes.png",
        rating : 5.0,
        price  : 0.0,
        year   : 2017
    },
    {
        id     : 3,
        name   : "Jamie's Kitchen", 
        author : "Jamie Oliver", 
        image  : "jamies_kitchen.png", 
        rating : 4.5,
        price  : 20.5,
        year   : 2014
    },
    {
        id     : 4,
        name   : "Inexpensive Family Meals", 
        author : "Simon Holst", 
        image  : "inexpensive_family_meals.png", 
        rating : 4.0,
        price  : 12.75,
        year   : 2015
    },
    {
        id     : 5,
        name   : "Paleo Slow Cooking", 
        author : "Crissy Gover", 
        image  : "paleo_slow_cooking.png", 
        rating : 4.5,
        price  : 2.45,
        year   : 2016
    },
    {
        id     : 6,
        name   : "Cook Like an Italian", 
        author : "Tobbie Puttok", 
        image  : "cook_like_an_italian.png", 
        rating : 4.0,
        price  : 2.25,
        year   : 2017
    },
    {
        id     : 7,
        name   : "Suneeta Vaswani", 
        author : "Geeta Devi", 
        image  : "suneeta_vaswani.png", 
        rating : 5.0,
        price  : 2.00,
        year   : 2012
    },
    {
        id     : 8,
        name   : "Jamie Does", 
        author : "Jamie Oliver", 
        image  : "jamie_does.png", 
        rating : 4.0,
        price  : 2,
        year   : 2012
    },
    {
        id     : 9,
        name   : "Jamie's Italy", 
        author : "Jamie Oliver", 
        image  : "jamies_italy.png", 
        rating : 5.0,
        price  : 2,
        year   : 2012
    },
    {
        id     : 10,
        name   : "Vegetables Cookbook", 
        author : "Matthew Biggs", 
        image  : "vegetables_cookbook.png", 
        rating : 3.5,
        price  : 2,
        year   : 2013
    },
    {
        id     : 11,
        name   : "A man called Ove", 
        author : "Fredrick Backman", 
        image  : "a_man_called_ove.png", 
        rating : 4.5,
        price  : 2.00,
        year   : 2015
    },
    {
        id     : 12,
        name   : "All the light we cannot see", 
        author : "Anthony Doerr", 
        image  : "all_the_light_we_cannot_see.png", 
        rating : 3,
        price  : 2,
        year   : 2012
    },
    {
        id     : 13,
        name   : "Hillbilly Elegy", 
        author : "J. D. Vance", 
        image  : "hillbilly_elegy.png", 
        rating : 4,
        price  : 2.5,
        year   : 2012
    },
    {
        id     : 14,
        name   : "Leonardo Da Vinci", 
        author : "Walter Isaacson", 
        image  : "leonardo_da_vinci.png", 
        rating : 4.5,
        price  : 2,
        year   : 2010
    },
    {
        id     : 15,
        name   : "The catcher in the rye", 
        author : "J. D. Salinger", 
        image  : "the_catcher_in_the_rye.png", 
        rating : 4,
        price  : 3,
        year   : 2012
    },
    {
        id     : 16,
        name   : "To kill a mockingbird", 
        author : "Harper Lee", 
        image  : "to_kill_a_mockingbird.png", 
        rating : 4,
        price  : 2,
        year   : 2012
    },
    {
        id     : 17,
        name   : "Wonder", 
        author : "R. J. Palacio", 
        image  : "wonder.png", 
        rating : 4,
        price  : 2,
        year   : 2009
    },
    {
        id     : 18,
        name   : "Jesus calling", 
        author : "Sarah Young", 
        image  : "jesus_calling.png", 
        rating : 3,
        price  : 0,
        year   : 2012
    },
    {
        id     : 19,
        name   : "To kill a mockingbird", 
        author : "Harper Lee", 
        image  : "to_kill_a_mockingbird.png", 
        rating : 4,
        price  : 2,
        year   : 2012
    },
    {
        id     : 20,
        name   : "The subtile art of not giving", 
        author : "Mark Manson", 
        image  : "the_subtile_art_of_not_giving_a_fuck.png", 
        rating : 3.5,
        price  : 2,
        year   : 2012
    },
    {
        id     : 21,
        name   : "Wonder", 
        author : "R. J. Palacio", 
        image  : "wonder.png", 
        rating : 4,
        price  : 2,
        year   : 2009
    },
    {
        id     : 22,
        name   : "Jesus calling", 
        author : "Sarah Young", 
        image  : "jesus_calling.png", 
        rating : 3,
        price  : 0,
        year   : 2012
    },
    {
        id     : 23,
        name   : "The subtile art of not giving", 
        author : "Mark Manson", 
        image  : "the_subtile_art_of_not_giving_a_fuck.png", 
        rating : 3.5,
        price  : 2,
        year   : 2012
    }
];

var whishList = new Set([]);
var buyList = new Set([]);

// function handleClick(){
//     modal.style.display = "block";
//     modcontent.innerHTML=" I like this book";
//     if (imgName==="jewels_of_nizam.png")  { 
//         bookList[0].check = true;
//     } else if (imgName==="cakes_and_bakes.png")  { 
//         bookList[1].check = true;
//     } else if (imgName==="jamies_kitchen.png")  { 
//         bookList[2].check = true;
//     } else if (imgName==="inexpensive_family_meals.png")  { 
//         bookList[3].check = true;
//     } else if (imgName==="paleo_slow_cooking.png")  { 
//         bookList[4].check = true;
//     } else if (imgName==="cook_like_an_italian.png")  { 
//         bookList[5].check = true;
//     } else if (imgName==="suneeta_vaswani.png")  { 
//         bookList[6].check = true;
//     } else if (imgName==="jamie_does.png")  { 
//         bookList[7].check = true;
//     } else if (imgName==="jamies_italy.png")  { 
//         bookList[8].check = true;
//     } else if (imgName==="vegetables_cookbook.png")  { 
//         bookList[9].check = true;
//     } else if (imgName==="a_man_called_ove.png")  { 
//         bookList[10].check = true;
//     } else if (imgName==="all_the_light_we_cannot_see.png")  { 
//         bookList[11].check = true;
//     } else if (imgName==="hillbilly_elegy.png")  { 
//         bookList[12].check = true;
//     } else if (imgName==="leonardo_da_vinci.png")  { 
//         bookList[13].check = true;
//     } else if (imgName==="the_catcher_in_the_rye.png")  { 
//         bookList[14].check = true;
//     } else if (imgName==="to_kill_a_mockingbird.png")  { 
//         bookList[15].check = true;
//     } else if (imgName==="wonder.png")  { 
//         bookList[16].check = true;
//     } else if (imgName==="jesus_calling.png")  { 
//         bookList[17].check = true;
//     } else if (imgName==="the_subtile_art_of_not_giving_a_fuck.png")  { 
//         bookList[18].check = true;
//         modcontent.innerHTML=" I like this book";
//     }
// }

