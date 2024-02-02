import React, { useEffect,useState } from 'react'
import axios from 'axios';
import Newsitem from './Newsitem';
import PropTypes from 'prop-types'



const News=(props)=> {
  const[articles,setArticles]=useState([])
  const[page,setPage]=useState(1)
  const[totalResults,setTotalResults]=useState(0)
 
  
  const capitalizeFirstLetter=(string)=>{
    return string.charAt(0).toUpperCase()+string.slice(1);
  }

   const updateNews=async()=>{
      
      /*let url=process.env.React_app_url;
      let data=await fetch(url);
      let parsedData=await data.json()*/
      let url = process.env.VITE_REACT_APP_URL;

try {
  const response = await axios.get(url);
  let parsedData = response.data;
  // Now you can use parsedData as needed
} catch (error) {
  console.error('Error fetching data:', error);
}
      console.log(parsedData);
      setArticles(parsedData.articles)
      setTotalResults(parsedData.totalResults)
      
    }
    useEffect(()=>{
      updateNews();
    },[])
    
    
   const handlePreviousClick=async()=>{
       setPage(page-1)
       updateNews();
      
      }

    const handleNextClick=async()=>{
      setPage(page+1)
      updateNews();
     }

  
    return (
      <div className='container'>
        <h2 className='text-center' style={{margin:'80px '}}>Daily-Top {capitalizeFirstLetter(props.category)} Headlines</h2>
         <Spinner/>
        
        
        <div className='row'>
            {articles.map((element)=>{
             return<div className='col-md-4' key={element.url}>
            <Newsitem  title={element.title?element.title.slice(0,40):""} description={element.description?element.description.slice(0,80):""} imageUrl={element.urlToImage} url={element.url} author={element.author} date={element.publishedAt} source={element.source.name}/>
            
            </div>
            })}
            
        </div>
        
        <div className='container d-flex justify-content-between'>
        <button disabled={page<=1} type="button" className="btn btn-dark mt-2" onClick={handlePreviousClick}> &larr;Previus</button>
        <button disabled={page+1 > Math.ceil(totalResults/props.pageSize)} type="button" className="btn btn-dark" onClick={handleNextClick}>Next &rarr;</button>

        </div>
        
      </div>
    )
}
News. defaultProps={
  country:'in',
  pageSize:5,
  category:'General'
}
News. propTypes={
  country:PropTypes.string,
  pageSize:PropTypes.number,
  category:PropTypes.string,
}
export default News