import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';

import Nav from './components/nav/nav';
import Heading from './components/heading/heading';
import SearchField from './components/searchField/searchField';

class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            class: "",
            size: "640"
        }

        this.BASE_URL = 'https://imdb-api.com/en/API/';
        this.key = 'k_znqhoxi4';
        this.trailer_url = this.BASE_URL + `Trailer/${this.key}/`
    }

    handleScroll() {
        if (window.scrollY) {
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
        if (window.innerWidth < 1500 && window.innerWidth > 1000) {
           this.setState({
              size: "440"
           })
        } else if (window.innerWidth < 1000) {
           this.setState({
              size: "380"
           })
        } else {
           this.setState({
              size: "640"
           })
        }
     }
    
    componentDidMount() {
        window.addEventListener("scroll", () => this.handleScroll())
        window.addEventListener("resize", () => this.handleResize())
    }

    render() {
       return (
        <div id='main'>
            <Nav class={this.state.class}/>
            <div className='inner'>
                <div className='half'>
                    <Heading title="Movies" />
                    <SearchField
                        placeholder="Enter a title (year is optional)" 
                        url={ `${this.BASE_URL}SearchMovie/${this.key}/` }
                        trailer={this.trailer_url}
                        size={this.state.size}
                    />
                </div>

                <div className='half'>
                    <Heading title="Series" />
                    <SearchField 
                        placeholder="Enter a title (year is optional)" 
                        url={ `${this.BASE_URL}SearchSeries/${this.key}/` }
                        trailer={this.trailer_url}
                        size={this.state.size}
                    />
                </div>
            </div>
        </div>
       )
    }
}


// ------------------------------------------------------
const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(<App />)