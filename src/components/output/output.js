import React from 'react';
import styles from './output.module.css';
import axios from 'axios';

import Button from '../button/button';
import Video from '../video/video';
import LoadingAnimation from '../loadingAnimation/loadingAnimation';
import Dot from '../dot/dot';

class Output extends React.Component {
   constructor(props) {
      super(props)
      this.state = {
         trailer: "",
         showTrailer: false,
         loading: false
      }
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
                  size={this.props.size}
               />
            </div>
         )
      }
      return (
         <div className={styles.inner}>
            <div className={styles.nthn}>
               Nothing is there yet
               <Dot />
               <Dot />
               <Dot />
            </div>
         </div>
      )
   }
}

export default Output