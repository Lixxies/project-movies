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
                The -webkit-scrollbar family of properties consists of seven different pseudo-elements that, together, comprise a full scrollbar UI element:

::-webkit-scrollbar addresses the background of the bar itself. It is usually covered by the other elements
::-webkit-scrollbar-button addresses the directional buttons on the scrollbar
::-webkit-scrollbar-track addresses the empty space “below” the progress bar
::-webkit-scrollbar-track-piece is the top-most layer of the the progress bar not covered by the draggable scrolling element (thumb)
::-webkit-scrollbar-thumb addresses the draggable scrolling element that resizes depending on the size of the scrollable element
::-webkit-scrollbar-corner addresses the (usually) bottom corner of the scrollable element, where two scrollbars might meet
::-webkit-resizer addresses the draggable resizing handle that appears above the scrollbar-corner at the bottom corner of some elements
In addition to these pseudo-elements, there are also eleven pseudo-selector classes that aren’t required but provide designers with the power to style various states and interactions of the scrollbar UI. A full breakdown of those pseudo-selectors, and a detailed example, can be found in this CSS-Tricks article.The -webkit-scrollbar family of properties consists of seven different pseudo-elements that, together, comprise a full scrollbar UI element:

::-webkit-scrollbar addresses the background of the bar itself. It is usually covered by the other elements
::-webkit-scrollbar-button addresses the directional buttons on the scrollbar
::-webkit-scrollbar-track addresses the empty space “below” the progress bar
::-webkit-scrollbar-track-piece is the top-most layer of the the progress bar not covered by the draggable scrolling element (thumb)
::-webkit-scrollbar-thumb addresses the draggable scrolling element that resizes depending on the size of the scrollable element
::-webkit-scrollbar-corner addresses the (usually) bottom corner of the scrollable element, where two scrollbars might meet
::-webkit-resizer addresses the draggable resizing handle that appears above the scrollbar-corner at the bottom corner of some elements
In addition to these pseudo-elements, there are also eleven pseudo-selector classes that aren’t required but provide designers with the power to style various states and interactions of the scrollbar UI. A full breakdown of those pseudo-selectors, and a detailed example, can be found in this CSS-Tricks article.The -webkit-scrollbar family of properties consists of seven different pseudo-elements that, together, comprise a full scrollbar UI element:

::-webkit-scrollbar addresses the background of the bar itself. It is usually covered by the other elements
::-webkit-scrollbar-button addresses the directional buttons on the scrollbar
::-webkit-scrollbar-track addresses the empty space “below” the progress bar
::-webkit-scrollbar-track-piece is the top-most layer of the the progress bar not covered by the draggable scrolling element (thumb)
::-webkit-scrollbar-thumb addresses the draggable scrolling element that resizes depending on the size of the scrollable element
::-webkit-scrollbar-corner addresses the (usually) bottom corner of the scrollable element, where two scrollbars might meet
::-webkit-resizer addresses the draggable resizing handle that appears above the scrollbar-corner at the bottom corner of some elements
In addition to these pseudo-elements, there are also eleven pseudo-selector classes that aren’t required but provide designers with the power to style various states and interactions of the scrollbar UI. A full breakdown of those pseudo-selectors, and a detailed example, can be found in this CSS-Tricks article.The -webkit-scrollbar family of properties consists of seven different pseudo-elements that, together, comprise a full scrollbar UI element:

::-webkit-scrollbar addresses the background of the bar itself. It is usually covered by the other elements
::-webkit-scrollbar-button addresses the directional buttons on the scrollbar
::-webkit-scrollbar-track addresses the empty space “below” the progress bar
::-webkit-scrollbar-track-piece is the top-most layer of the the progress bar not covered by the draggable scrolling element (thumb)
::-webkit-scrollbar-thumb addresses the draggable scrolling element that resizes depending on the size of the scrollable element
::-webkit-scrollbar-corner addresses the (usually) bottom corner of the scrollable element, where two scrollbars might meet
::-webkit-resizer addresses the draggable resizing handle that appears above the scrollbar-corner at the bottom corner of some elements
In addition to these pseudo-elements, there are also eleven pseudo-selector classes that aren’t required but provide designers with the power to style various states and interactions of the scrollbar UI. A full breakdown of those pseudo-selectors, and a detailed example, can be found in this CSS-Tricks article.The -webkit-scrollbar family of properties consists of seven different pseudo-elements that, together, comprise a full scrollbar UI element:

::-webkit-scrollbar addresses the background of the bar itself. It is usually covered by the other elements
::-webkit-scrollbar-button addresses the directional buttons on the scrollbar
::-webkit-scrollbar-track addresses the empty space “below” the progress bar
::-webkit-scrollbar-track-piece is the top-most layer of the the progress bar not covered by the draggable scrolling element (thumb)
::-webkit-scrollbar-thumb addresses the draggable scrolling element that resizes depending on the size of the scrollable element
::-webkit-scrollbar-corner addresses the (usually) bottom corner of the scrollable element, where two scrollbars might meet
::-webkit-resizer addresses the draggable resizing handle that appears above the scrollbar-corner at the bottom corner of some elements
In addition to these pseudo-elements, there are also eleven pseudo-selector classes that aren’t required but provide designers with the power to style various states and interactions of the scrollbar UI. A full breakdown of those pseudo-selectors, and a detailed example, can be found in this CSS-Tricks article.The -webkit-scrollbar family of properties consists of seven different pseudo-elements that, together, comprise a full scrollbar UI element:

::-webkit-scrollbar addresses the background of the bar itself. It is usually covered by the other elements
::-webkit-scrollbar-button addresses the directional buttons on the scrollbar
::-webkit-scrollbar-track addresses the empty space “below” the progress bar
::-webkit-scrollbar-track-piece is the top-most layer of the the progress bar not covered by the draggable scrolling element (thumb)
::-webkit-scrollbar-thumb addresses the draggable scrolling element that resizes depending on the size of the scrollable element
::-webkit-scrollbar-corner addresses the (usually) bottom corner of the scrollable element, where two scrollbars might meet
::-webkit-resizer addresses the draggable resizing handle that appears above the scrollbar-corner at the bottom corner of some elements
In addition to these pseudo-elements, there are also eleven pseudo-selector classes that aren’t required but provide designers with the power to style various states and interactions of the scrollbar UI. A full breakdown of those pseudo-selectors, and a detailed example, can be found in this CSS-Tricks article.
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