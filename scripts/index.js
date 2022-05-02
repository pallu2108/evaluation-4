// Ude Import export (MANDATORY)
// Onclicking store the news in local storage with key "news" so that you can access that on news.html page

// import {navbar}  from "../components/navbar";
// console.log(navbar)
//  let n = document.getElementById("navbar");
//  n.innerHTML = navbar();



 let search =(e) =>{
    if(e.key === "Enter"){
        searchNews();
    }
};
document.getElementById("search_input").addEventListener("keydown",search);

let searchNews = async () =>{
    let value = document.getElementById("search_input").value;
    try{
        let res =  await fetch(
            `https://masai-mock-api.herokuapp.com/news?q=${value}`
            );

    let data = await res.json();

    console.log(data);
    }catch (err) {
        console.log(err);
    }
};
