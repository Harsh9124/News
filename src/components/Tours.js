
import Card from "./Card";

function Tours(props){


   
    


    return (
        <>
            <div className="grid grid-cols-1 gap-4 w-[80%] mx-auto md:grid-cols-3" >
            {props.newsData1.map((article) => {
            return ( <Card key={article.urlToImage} title={article.title} img={article.urlToImage} data={article.content} click={props.click}  />);
           
           })}
           
            
            </div>
        </>
       
    );
}

export default Tours