import React, { Component } from 'react'
import Newsitem from './Newsitem'
import ReactPaginate from 'react-paginate';
import '../App.css'


export class Newscontainer extends Component {

    constructor(props) {
        super(props)
        this.state = {
            brand: "Ford",
            articles: [],
            pageIndex: 1,
            url: `https://newsapi.org/v2/top-headlines?category=${this.props.category}&country=in&sortBy=popularity&apiKey=f29c4e7b2ece4bcd9f7578e7133cfef5&pageSize=15&page=`,
            totalNews: 0,
            noOfPages: 0,
            loading: true
        };
    }

    handleNextClick = async () => {
        this.setState({
            loading: true
        })

        let data = await fetch(`${this.state.url}${this.state.pageIndex + 1}`)
        let jsonData = await data.json()
        this.setState({
            articles: jsonData.articles,
            pageIndex: this.state.pageIndex + 1,
            loading: false
        })

        document.documentElement.scrollTop = 0
    }

    handlePrevClick = async () => {
        this.setState({
            loading: true
        })
        let data = await fetch(`${this.state.url}${this.state.pageIndex - 1}`)
        let jsonData = await data.json()
        this.setState({
            articles: jsonData.articles,
            pageIndex: this.state.pageIndex - 1,
            loading: false
        })

        document.documentElement.scrollTop = 0
    }

    async componentDidMount() {
        let data = await fetch(`${this.state.url}${this.state.pageIndex}`)
        let jsonData = await data.json()
        this.setState({
            articles: jsonData.articles,
            totalNews: jsonData.totalResults,
            noOfPages: Math.ceil((this.state.totalNews) / 10),
            loading: false
        })


    }
    async handlePageClick(pageNumber) {
        this.setState({
            pageIndex: pageNumber,
            loading: true
        });
        let data = await fetch(`${this.state.url}${pageNumber}`)
        let jsonData = await data.json()
        this.setState({
            articles: jsonData.articles,
            loading: false
        })

        document.documentElement.scrollTop = 0
    }


    render() {
        const pageLinks = [];
        for (let i = 1; i <= this.state.noOfPages; i++) {
            const isActive = i === this.state.pageIndex;
            pageLinks.push(
                <li key={i} className={`page-item  ${isActive ? "active" : ""}`}><a  className={`${this.props.theme === 'light' ? 'theme-light' : ''} page-link text-bg-${this.props.theme}`} onClick={() => this.handlePageClick(i)} >{i}</a></li>
                
            );
        }
        return (
            <>
                <div className=" container "  >
                    <h1 className={`my-4 ${this.props.theme === 'dark' ? 'text-light' : ''}`}>Top Headlines of India {this.props.category === 'general' ? '.' : `related to ${this.props.category}.`}</h1>
                    {(this.state.loading) ? <div className="text-center">
                        <img src="/35.gif" alt="" />
                    </div> : ''}
                    <div className="row">
                        {this.state.articles.map((element) => {
                            return <Newsitem theme={this.props.theme} key={element.url} title={element.title} desc={element.description} urlToImage={element.urlToImage} url={element.url} />
                        })}
                    </div>
                    <div className="d-flex justify-content-center align-items-center my-3 ">
                        <button type="button" disabled={(this.state.pageIndex <= 1)} onClick={this.handlePrevClick} className={`btn btn-sm btn-${this.props.theme === 'light'? 'dark' : this.props.theme}`}>&larr; Pre</button>
                        

                                

                                <nav className='mx-3' aria-label="...">
                                    <ul className={`pagination my-0` }>
                                    {pageLinks}
                                        
                                    </ul>
                                </nav>

                        <button type="button" disabled={(this.state.pageIndex === this.state.noOfPages)} onClick={this.handleNextClick} className={`btn btn-sm btn-${this.props.theme === 'light'? 'dark' : this.props.theme}`}>Next &rarr;</button>
                    </div>
                </div>

            </>
        )
    }
}

export default Newscontainer
