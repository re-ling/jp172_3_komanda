pagedBookList.sortByName();
pagedBookList.view = 0;
pagedBookList.pageNo = 0;
var bookList = pagedBookList.page;

//changeRuleBeforeLoading(
//    ["#css-ratings"],
//    ['.stars-outer::before', '.stars-inner::before'],
//    "\\f005"
//);
//changeRatingRuleBeforeLoading(['.stars-inner::before'], `"${"\\f005".repeat(starTotal)}"`);

bookListRun(bookList, 0);
//menuListRun(topMenuList, "topmenu");

function bookSet(){

	var name = this.id;
    
    switch(name){
    case "allBooks": 
        pagedBookList.setFilter()
        pagedBookList.sortByName();
        pagedBookList.pageNo = 0;
        break;
    case "recentBooks":
        pagedBookList.setFilter()
        pagedBookList.sortByYear();
        pagedBookList.pageNo = 0;
        break;
    case "popularBooks":
        pagedBookList.setFilter()
        pagedBookList.sortByRating();
        pagedBookList.pageNo = 0;
        break;
    case "freeBooks":
    	pagedBookList.sortByName();
        pagedBookList.setFilter("price", 0)
        pagedBookList.pageNo = 0;
        break;
    case "browse":
    	pagedBookList.setFilter()
        pagedBookList.sortByName();
        pagedBookList.pageNo = 0;
        pagedBookList.view = 0;
		break;
    case "buy":
    	pagedBookList.setFilter()
        pagedBookList.sortByName();
        pagedBookList.pageNo = 0;
        pagedBookList.view = 1;
		break;
    case "favourite":
    	pagedBookList.setFilter()
        pagedBookList.sortByName();
        pagedBookList.pageNo = 0;
        pagedBookList.view = 2;
		break;
    case "whishlist":
    	pagedBookList.setFilter("whishList", true)
        pagedBookList.sortByName();
        pagedBookList.pageNo = 0;
        pagedBookList.view = 3;
        break;
    case "p0":
        //pagedBookList.first();
        pagedBookList.previous();
        break;
    case "p-1":
        //pagedBookList.last();
        pagedBookList.next();
        break;
    default:
        if (/^p[0-9]+$/.test(name)){
            pagedBookList.pageNo = parseInt(name.substring(1));
        } else {
            console.log("final.bookSet: switch(name) is unknown!");
        }
    }

    bookList = pagedBookList.page;
	bookListRun(bookList, pagedBookList.view);
};

document.getElementById("browse").onclick=bookSet;
document.getElementById("buy").onclick=bookSet;
document.getElementById("favourite").onclick=bookSet;
document.getElementById("whishlist").onclick=bookSet;
document.getElementById("allBooks").onclick=bookSet;
document.getElementById("recentBooks").onclick=bookSet;
document.getElementById("popularBooks").onclick=bookSet;
document.getElementById("freeBooks").onclick=bookSet;
document.getElementById("p0").onclick=bookSet;
document.getElementById("p-1").onclick=bookSet;
// const noOfPages = pagedBookList.noOfPages;
// for (let i = 1; i < noOfPages - 1; i++){
//     var node = document.getElementById("container").childNodes[i];
//     node.onclick=bookSet;
//     node.style.display = "inline-block";
// }
// forEach(document.getElementById("container").childNodes

// const noOfPages = pagedBookList.noOfPages - 2;
// const nums = Array.apply(null, {length: noOfPages}).map(
//     (x, y) => y + 1
// );
// var firstItem = document.getElementById("p0")
// var buttons = nums.map((number)=>{
//     var div = document.createElement('div');
//     div.innerHTML = `<button id='p${number.toString()}' class="nav-button" onclick=bookSet></button>`;
//         // Change this to div.childNodes to support multiple top-level nodes
//     insertAfter(div.firstChild, firstItem);
//});

// var modal = document.getElementById('myModal');
// var modcontent = document.getElementsByClassName('about')[0];
// var span = document.getElementsByClassName("close")[0];

// span.onclick = function () {
//     modal.style.display = "none";
// }

// window.onclick = function (event) {
//     if (event.target == modal) {
//         modal.style.display = "none";
//     }
// }

function search() {
    var key = document.getElementById("key").value.toLowerCase();
    var result = new Array();
    if (key.length < 1) {
        pagedBookList.sortByName();
		pagedBookList.view = 0;
		pagedBookList.pageNo = 0;
		bookList = pagedBookList.page;
		bookListRun(bookList, 0);
    } else if (key.length < 3) {
        alert("Key word must be at least 3 characters");
    } else {
        for (var i = 0; i < bookList.length; i++) {
            if (bookList[i].name.toLowerCase().includes(key) || bookList[i].author.toLowerCase().includes(key)) {
                result.push(bookList[i]);
            }
        }
        if (result.length == 0) {
            alert("Nothing found");
        } else {
            bookListRun(result);
        }

    }
};


document.getElementsByClassName("fa-search")[0].onclick = search
// Get the input field
document.getElementById("key").addEventListener("keyup", function(event) {
  // Cancel the default action, if needed
    event.preventDefault();
  // Number 13 is the "Enter" key on the keyboard
    if (event.keyCode === 13) {
    // Trigger the button element with a click
        search();
    }
});
