import React, { Component } from 'react'
import '../styles/search.css'

export default class Search extends Component {

    render() {
        return (
        <div className="ui search">
            <div className="ui icon input">
            <form>
                <input className="prompt" type="text" name="artists" placeholder="Search artist..." value={this.props.searchValue} 
                onChange={(e) => this.props.handleSearchOnChange(e)}/>
            </form>
                <i className="search icon"></i>
            </div>
                <div className="results"></div> 
        </div>
        )
    }
}

