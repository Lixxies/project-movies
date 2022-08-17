import React from 'react';
import './index.css';

import Nav from './components/nav/nav';
import Heading from './components/heading/heading';
import SearchField from './components/searchField/searchField';

class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            class: "",
            size: "440"
        }

        this.BASE_URL = 'https://imdb-api.com/en/API/';
        this.key = 'k_znqhoxi4';
        this.trailer_url = this.BASE_URL + `Trailer/${this.key}/`;
        this.topM = this.BASE_URL + `Top250Movies/${this.key}`;
        this.topS = this.BASE_URL + `Top250TVs/${this.key}`;
    }

    handleScroll() {
        const el = document.documentElement
        if (window.scrollY && el.clientWidth > 800) {
            this.setState({
                class: "scrolled"
            })
        } else {
            this.setState({
                class: ""
            })
        } 
    }

    handleResize() {
        const el = document.documentElement

        if (el.clientWidth <= 1700) {
           this.setState({
              size: "380"
           })
        } else {
           this.setState({
              size: "440"
           })
        }
        
     }
    
    componentDidMount() {
        window.addEventListener("scroll", () => this.handleScroll())
        window.addEventListener("resize", () => this.handleResize())
    }

    render() {
        const placeholder = "Enter a title (year is optional)"

       return (
        <div id="main">
            <Nav class={this.state.class}/>
            <div className="inner">
                <div className="half">
                    <Heading title="Movies" />
                    <SearchField
                        placeholder={placeholder} 
                        url={ `${this.BASE_URL}SearchMovie/${this.key}/` }
                        trailer={this.trailer_url}
                        size={this.state.size}
                        top={this.topM}
                    />
                </div>

                <div className="half">
                    <Heading title="Series" />
                    <SearchField 
                        placeholder={placeholder} 
                        url={ `${this.BASE_URL}SearchSeries/${this.key}/` }
                        trailer={this.trailer_url}
                        size={this.state.size}
                        top={this.topS}
                    />
                </div>
            </div>
        </div>
       )
    }
}

export default App