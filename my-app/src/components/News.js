import React from "react";
import { useEffect,useState } from "react";
import NewsItem from "./NewsItem";
import Spinner from "./Spinner";
import PropTypes from "prop-types";
import InfiniteScroll  from 'react-infinite-scroll-component';
const News =(props)=> {

const [articles, setArticles] = useState([])
const [loading, setLoading] = useState(true)
const [page, setPage] = useState(1)
const [totalResults, setTotalResults] = useState(0)



  const capitaliseFirst =(string)=>{
    return string.charAt(0).toUpperCase() + string.slice(1);
  }


  const updateNews= async()=> {
    props.setProgress(10)
    let url = `https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=16d1e531bb1e45e4af84cfa838b16fdd&page=${page}&pageSize=${props.pageSize}`;
    setLoading(true)
    let data = await fetch(url);

    props.setProgress(30)

    let parsedData = await data.json();

    props.setProgress(70)

    setArticles(parsedData.articles)
    setTotalResults(parsedData.totalResults)
    setLoading(false)

    props.setProgress(100)
  }

  useEffect(() => {
    document.title = `${capitaliseFirst(props.category)}-NewsMonkey`;
    updateNews();
  }, [])
  


 const handleNextClick = async () => {
    setPage(page+1)
    updateNews();
  };


  const handlePrevClick = async () => {
    setPage(page-1)
    this.updateNews();
  };

  const fetchMoreData= async()=>{
    let url = `https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=16d1e531bb1e45e4af84cfa838b16fdd&page=${page+1}&pageSize=${props.pageSize}`;
    setPage(page+1)
    setLoading(true)
    let data = await fetch(url);
    let parsedData = await data.json();
    console.log(parsedData);

    setArticles(articles.concat(parsedData.articles))
    setTotalResults(parsedData.totalResults)
  }
    return (
      <>
        <h1 className="text-center" style={{ margin: "30px 0px" , marginTop: "95px"}}>
          NewsMonkey-TopNews
        </h1>
        {/* {this.state.loading && <Spinner />} */}
          <InfiniteScroll
          dataLength={articles.length}
          next={fetchMoreData}
          hasMore={articles.length != totalResults}
          loader={<Spinner/>}
        >
            <div className="container">
            <div className="row">
            {articles.map((element) => {
            return (
                <div className="col-md-4" key={element.url}>
                <NewsItem
                    title={element.title ? element.title.slice(0, 45) : ""}
                    description={element.description ? element.description.slice(0, 88) : ""}
                    imageUrl={element.urlToImage}
                    newsUrl={element.url}
                    author={!element.author ? "Unknown" : element.author}
                    date={element.publishedAt}
                    source={element.source.name}
                />
                </div>
            );
            })}
            </div>  
        </div>
        </InfiniteScroll>
            
      </>
    );
  }


News.defaultProps = {
    country: "in",
    pageSize: 8,
    category: "general",
  };
News.propTypes = {
    country: PropTypes.string,
    pageSize: PropTypes.number,
    category: PropTypes.string,
  };


export default News;
