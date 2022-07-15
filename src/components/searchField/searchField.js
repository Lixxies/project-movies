import React from 'react';
import styles from './searchField.module.css';
import axios from 'axios';

import Button from '../button/button';
import Output from '../output/output';
import LoadingAnimation from '../loadingAnimation/loadingAnimation';

class SearchField extends React.Component {

    constructor(props) {
        super(props)
        this.state = {
            input: "",
            render: false,
            data: "",
            year: 0,
            loading: false
        }

        this.handleChange = this.handleChange.bind(this)
    }

    handleChange(event) {
        this.setState({
            input: event.target.value
        })
    }

   handleClick() {
        this.setState({
            loading: true
        })

        let url = this.props.url + this.state.input

        axios(url)
        .then((resp) => {
            let data = resp.data.results[0]
            let desc = data.description.replace(")", "").replace("(", "")
            let year = parseInt(desc)

            this.setState({
                render: true,
                data: data,
                year: year,
                loading: false
            })
        })

    }

    render() {

        return (
            <div className={styles.outer}>
                <div className={styles.inner}>
                    <div className={styles.searchIcon}>
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-search" viewBox="0 0 16 16">
                            <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z"/>
                        </svg>
                    </div>

                    <label htmlFor="input"></label>
                    <input type="text" name="input" id="input" size="50" autoComplete="off"
                        className={styles.input}
                        placeholder={this.props.placeholder}
                        onChange={this.handleChange}
                    />
                    <Button txt="Find" onClick={() => this.handleClick()} />
                    <LoadingAnimation loading={this.state.loading} />
                </div>
                <Output 
                    render={this.state.render}
                    trailer={this.props.trailer}
                    data={this.state.data}
                    year={this.state.year}
                />
            </div>
            
        )
    }
}

export default SearchField