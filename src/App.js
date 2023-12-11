import { useState } from 'react';
import './App.css';
import Tours from'./components/Tours';
import articles from './data'

function App() {
  
const [newsData, setNewsData] = useState(articles)



function removeNews(urlToImage){
  
 const newData= newsData.filter(ele => ele.urlToImage !== urlToImage);
 setNewsData(newData);
}


function refreshHandler(){
  setNewsData(articles);
}

if (newsData.length === 0){
  return (
    <div className="App">
    <h1 className="text-3xl font-bold text-blue-800 my-8">
     No News Found
   </h1>
   <button className=" w-1/6 rounded-md bg-indigo-600 text-center px-auto py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600" onClick={refreshHandler}>Refresh</button>
   </div>
  );
}


  return (
    <div className="App">
     <h1 className="text-3xl font-bold text-blue-800 my-8">
      News
    </h1>
    <Tours newsData1={newsData}  click={removeNews} />
    </div>
  );
}

export default App;
