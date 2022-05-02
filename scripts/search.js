// Ude Import export (MANDATORY)
// Onclicking store the news in local storage with key "news" so that you can access that on news.html page
// https://masai-mock-api.herokuapp.com/news/top-headlines?country=

import {navbar}  from "../components/navbar";
console.log(navbar)
 let n = document.getElementById("navbar");
 n.innerHTML = navbar();
