class PagedBookList{
	
	constructor(newBookList, newPageSize = 10){
		this._bookList = newBookList;
		this._filter = { key : "", value : ""};
		this.pageSize = newPageSize;
		this.view = 0
	}

	_compare (a, b, fieldName){
		let result = 0;
		if (fieldName !== "name") result = b[fieldName] - a[fieldName];
		if (result != 0) return result;
		return (a.name > b.name) ? 1 : (a.name < b.name) ? -1 : 0;
	}

	sortByYear(){
		this._bookList.sort((a,b)=> this._compare(a, b, "year"));
	}

	sortByRating(){
		this._bookList.sort((a,b)=> this._compare(a, b, "rating"));
	}

	sortByName(){
		this._bookList.sort((a,b)=> this._compare(a, b, "name"));
	}

	setFilter(key = "", value = ""){
		this._filter = {
			key    : key,
			value  : value
		}
	}

	set pageSize(newPageSize){
		this._pageSize = newPageSize;
		this.pageNo = 0;
	}

	set pageNo(newPageNo){
		this._pageNo = newPageNo;
		this._lower =  this._pageNo * this._pageSize;
		this._upper = ( this._pageNo + 1) * this._pageSize;
	}

	first(){
		this.pageNo = 0;
	}

	last(){
		this.pageNo = this.noOfPages;
	}

	previous(){
        if (this.pageNo > 0) this.pageNo = this.pageNo - 1;
	}

	next(){
        if (this.pageNo < this.noOfPages) this.pageNo = this.pageNo + 1;
	}

	get pageNo(){
		return this._pageNo;
	}

	set view(newView){
		this._view = newView; 
	}

	get view(){
		return this._view;
	}

	get noOfPages(){
		return Math.floor(this._bookList.length / this._pageSize) + 1;
	}

	get page(){
		let filteredList =  this._bookList.slice(0, this._bookList.length);
		if (this._view === 3){
			filteredList = this._bookList.filter((a)=> whishList.has(a));
		}
		if (this._filter.key !== "" || this._filter.value !== "") {
			filteredList = this._bookList.filter((a)=> a[this._filter.key] === this._filter.value);
		}
		return filteredList.slice(this._lower, this._upper);
	}
}

var pagedBookList = new PagedBookList(bookListData, 10);

