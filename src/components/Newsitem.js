import React, { Component } from 'react'

export class Newsitem extends Component {

constructor(props){
    super(props)
}

    render() {
        
        return (
            <>
            <div className="col-md-4 p-4">
                <div className={`card text-bg-${this.props.theme} p-1`} >
                    <img  src={(this.props.urlToImage)?this.props.urlToImage: 'https://www.livemint.com/lm-img/img/2023/05/01/600x338/ff_garena_1675312885509_1682909940769.jpg'} className="card-img-top" alt="..." />
                    <div className="card-body">
                        <h5 className="card-title">{this.props.title}</h5>
                        <p className="card-text opacity-75">{this.props.desc}</p>
                        <a target='_blank' href={this.props.url} className={`btn btn-${this.props.theme === 'light'? 'dark' : 'outline-light'}`}>Read More</a>
                    </div>
                </div>
            </div>
            </>
        )
    }
}

export default Newsitem
