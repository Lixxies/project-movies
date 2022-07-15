import React from 'react';
import styles from './output.module.css';
import axios from 'axios';

import Button from '../button/button';
import Video from '../video/video';
import LoadingAnimation from '../loadingAnimation/loadingAnimation';

class Output extends React.Component {
   constructor(props) {
      super(props)
      this.state = {
         trailer: "",
         showTrailer: false,
         loading: false,
         size: "640"
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
      window.addEventListener("resize", () => this.handleResize())
   }

   handleClick() {
      this.setState({
               loading: true
            })
            
      let url = this.props.trailer + this.props.data.id

      axios(url)
      .then((resp) => {
         this.setState({
            trailer: resp.data.linkEmbed,
            showTrailer: true,
            loading: false
         })
      })
   }

   render() {

      if (this.props.render) {
         return (
            <div className={styles.inner}>
               <div className={styles.img}>
                  <img src={this.props.data.image} alt="Poster"/>
               </div>
               <div className={styles.info}>
                     <div>{this.props.data.title}</div>
                     <div>{this.props.year}</div>
                     <div className={styles.button}>
                        <Button txt="Trailer" onClick={() => this.handleClick()}/>
                        <LoadingAnimation loading={this.state.loading} />
                     </div>  
               </div>
               <Video 
                  trailer={this.state.trailer}
                  showTrailer={this.state.showTrailer} 
                  size={this.state.size}
               />
            </div>
         )
      }
   }
}

export default Output