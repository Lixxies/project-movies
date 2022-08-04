import React from 'react';
import styles from './searchField.module.css';
import axios from 'axios';

import Input from '../input/input'
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
            loading: false,
            list: false
        }

        this.handleChange = this.handleChange.bind(this)
        this.handleKeyDown = this.handleKeyDown.bind(this)
    }

    handleChange(event) {
        this.setState({
            input: event.target.value
        })
    }

   handleClickSearch() {
        if (this.state.input) {
            this.setState({
                list: false,
                loading: true
            })

            let url = this.props.url + this.state.input

            axios(url)
            .then((resp) => {
                let data = resp.data.results[0]
                let desc = data.description.replace(")", "").replace("(", "")
                let year = parseInt(desc)

                this.setState({
                    data: data,
                    year: year,
                    render: true,
                    loading: false
                })
            })
        }   
    }

    handleKeyDown(event) {
        if (event.key == "Enter" && this.state.input) {
            return this.handleClickSearch()
        }
    }

    handleClickList() {
        this.setState({
            render: false,
            loading: true
        })

        let url = this.props.top

        axios(url)
        .then((resp) => {
            let data = resp.data.items
            this.setState({
                data: data,
                list: true,
                loading: false
            })
        })
    }

    render() {

        return (
            <div className={styles.outer}>
                <div className={styles.inner}>
                    <Input
                        placeholder={this.props.placeholder}
                        onChange={this.handleChange}
                        onKeyDown={this.handleKeyDown}
                    />
                    <div className={styles.buttonDiv}>
                        <Button txt="Search" onClick={() => this.handleClickSearch()} />
                        <Button txt="Top 250" onClick={() => this.handleClickList()} />
                    </div>
                    <LoadingAnimation loading={this.state.loading} />
                </div>
                <Output 
                    render={this.state.render}
                    trailer={this.props.trailer}
                    data={this.state.data}
                    year={this.state.year}
                    size={this.props.size}
                    list={this.state.list}
                />
            </div>
            
        )
    }
}

export default SearchField