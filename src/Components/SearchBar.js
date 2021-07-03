import React from 'react';
import {Component} from "react";


 class SearchBar extends Component {
     state = {
         query : ""
     }
    handleQuery = (ev) => {
        this.setState({
          query: ev.target.value
        })
      }
    render() {
      return (
        <div>
           <input type="search" value={this.state.query} onChange={this.handleQuery} />
        </div>
      )
    }
  }
 







export default SearchBar;