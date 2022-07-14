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
            class: ""
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
    
    componentDidMount() {
        window.addEventListener("scroll", () => this.handleScroll())
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
                    />
                </div>

                <div className='half'>
                    <Heading title="Series" />
                    <SearchField 
                        placeholder="Enter a title (year is optional)" 
                        url={ `${this.BASE_URL}SearchSeries/${this.key}/` }
                        trailer={this.trailer_url}
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