const seachBar = document.querySelector(".users-list .search input"),
searchBtn = document.querySelector(".users .search button");


searchBtn.onclick = ()=>{   
    seachBar.classList.toggle("active");
    seachBar.focus();
    seachBar.classList.toggle("active");
}