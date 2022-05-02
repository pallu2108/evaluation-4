// function navbar () {
//    return `<div id="navbar">
//    <h2> <a href="index.html">News App</a></h2>
//       <div id="search_bar">
//         <input type="text" id="search_input" placeholder="Search News">
//       </div>
//     </div>
//     <div id="query">
//     <div id="sidebar">
//       <h2>countries</h2>
//       <h3 id="in">India</h3>
//       <h3 id="ch">China</h3>
//       <h3 id="us">Usa</h3>
//       <h3 id="uk">Uk</h3>
//       <h3 id="nz">NewZeland</h3>
//     </div>
//     <div id="top_news"></div>
//     </div>`;
// };
function navbar () {
return `<div id="navbar">
      <h2> <a href="index.html">News App</a></h2>
         <div id="search_bar">
           <input type="text" id="search_input" placeholder="Search News">
         </div>
       </div>
       <div id="query">
       <div id="sidebar">
         <h2>countries</h2>
         <h3 id="in"> <a href="news.html" style="color: black;">India</a></h3>
         <h3 id="ch"> <a href="news.html" style="color: black;">China</a></h3>
         <h3 id="us"><a href="news.html" style="color: black;">Usa</a></h3>
         <h3 id="uk"><a href="news.html" style="color: black;">Uk</a></h3>
         <h3 id="nz"><a href="news.html" style="color: black;">NewZeland</a></h3>
       </div>
       <div id="top_news"></div>
       </div>`
};

export {navbar}  ;