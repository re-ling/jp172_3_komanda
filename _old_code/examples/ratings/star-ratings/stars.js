const step = 5;

let rating = 3.55;
let percentage = 0;

function setPercentage(newPercentage){
    if (newPercentage < 0) newPercentage = 0;
    if (newPercentage > 100) newPercentage = 100;
    const starPercentage = Math.round(newPercentage / step) * step;
    percentage = starPercentage;
}

setPercentage(rating * 100 / starTotal);

function showStars(){
    document.querySelector(`#rating-num`).innerHTML = (percentage * starTotal / 100).toFixed(2); 
    document.querySelector(`#rating .stars-inner`).style.width = `${percentage.toString(10)}%`;
}

showStars();

function changeStars(event) {
    const rect = event.currentTarget.getBoundingClientRect();
    setPercentage((event.clientX - rect.left) * 100 / rect.width) 
    showStars()
}

function revert(){
    setPercentage(rating * 100 / starTotal);
    showStars();
}

function setRating(){
    rating = (percentage * starTotal / 100).toFixed(2);
}
