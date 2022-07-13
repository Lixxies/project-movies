import React from 'react';
import styles from './output.module.css';
import axios from 'axios';

import Button from '../button/button';
import Video from '../video/video';

class Output extends React.Component {
   constructor(props) {
      super(props)
      this.state = {
         trailer: "",
         showTrailer: false
      }
   }

   handleClick() {
      this.setState({
               showTrailer: true
            })
      let url = this.props.trailer + this.props.data.id

      axios(url)
      .then((resp) => {
         this.setState({
            trailer: resp.data.linkEmbed,
            showTrailer: true
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
                     </div>
               </div>
               <Video 
                  trailer={this.state.trailer}
                  showTrailer={this.state.showTrailer} 
               />
            </div>
         )
      }
   }
}

export default Output