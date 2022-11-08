
//nav menu

function openNav() {
    let openbtn = document.getElementById("open-btn");
    let closebtn = document.getElementById("close-btn");
    openbtn.style.display = "none"
    closebtn.style.display = "block";
}

function closeNav() {
    let openbtn = document.getElementById("open-btn");
    let closebtn = document.getElementById("close-btn");
    closebtn.style.display = "none";
    openbtn.style.display = "block"
}

//search

function search(){
    document.getElementById("collapse-wrap").style.display="none";
    document.getElementById("header-right-section").style.display="none";
    document.getElementById("search-box").style.display="flex"
}

function cancelSearch(){
    document.getElementById("collapse-wrap").style.display = "flex";
    document.getElementById("header-right-section").style.display = "flex";
    document.getElementById("search-box").style.display = "none"  
}
