bookListRun(bookList);
menuListRun(topMenuList, "topmenu");

document.getElementById("allBooks").onclick=function(){
    bookListRun(bookList)
};
document.getElementById("recentBooks").onclick=function(){
    bookListRun(
        jmespath.search(bookList, "sort_by(&year)")
        //bookList.slice().sort((a,b)=> b.year>a.year)
    )
};
document.getElementById("popularBooks").onclick=function(){bookListRun(
    bookList.slice().sort((a,b)=> b.rating>a.rating)
)};
document.getElementById("freeBooks").onclick=function(){bookListRun(
    bookList.filter((a)=> a.price === 0)
)};
document.getElementById("favourite").onclick=function(){
    
    bookListRun(
    bookList.filter((a)=> a.check === true)
)};