// Ude Import export (MANDATORY)
import {navbar}  from "../components/navbar";
console.log(navbar)
 let n = document.getElementById("navbar");
 n.innerHTML = navbar();

//  let search =(e) =>{
//     if(e.key === "Enter"){
//         searchNews();
//     }
// };
document.getElementById("sidebar").addEventListener("onclick",search);

let searchNews = async () =>{
    let value = document.getElementById("sidebar").value;
    try{
        let res =  await fetch(
            `https://masai-mock-api.herokuapp.com/news/top-headlines?country=id=${value}`

            );

    let data = await res.json();

    console.log(data);
    }catch (err) {
        console.log(err);
    }
};
