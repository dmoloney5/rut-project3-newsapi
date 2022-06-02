import React from "react";
import Portfolio from "./components/Newsapi";

const App = () => <Newsapi />;

export default App;


// import React, { useState } from 'react'
// import axios from 'axios'

// function App() {

//     const [news, setNews] = useState([])

//     const fetchNews = () => {
//         axios.get("https://newsapi.org/v2/top-headlines?country=in&apiKey=61b7a8f9debe482ca9463aa72a5ca4a3")
//             .then((response) => {
//                 console.log(response);
//                 setNews(response.data.articles)
//             })
//     }

// export default App;