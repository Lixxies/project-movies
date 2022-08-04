import React, { useState } from 'react';
import styles from './output.module.css';
import axios from 'axios';

import Button from '../button/button';
import Video from '../video/video';
import LoadingAnimation from '../loadingAnimation/loadingAnimation';
import Dot from '../dot/dot';
import Top250List from '../top250List/top250List';

function SearchOutput(props) {
   return (
      <div className={styles.inner}>
            <div className={styles.img}>
               <img src={props.data.image} alt="Poster" />
            </div>
            <div className={styles.info}>
               <div>{props.data.title}</div>
               <div>{props.year}</div>
               <div className={styles.button}>
                     <Button txt="Trailer" onClick={() => props.onClick()}/>
                     <LoadingAnimation loading={props.loading} />
               </div>  
               <Video 
                  trailer={props.trailer}
                  showTrailer={props.showTrailer} 
                  size={props.size}
               />
            </div>
      </div>
   )
}

function Output(props) {
   const [trailer, setTrailer] = useState("")
   const [showTrailer, setshowTrailer] = useState(false)
   const [loading, setLoading] = useState(false)

   const handleClick = () => {
      setLoading(true)
            
      let url = props.trailer + props.data.id

      axios(url)
      .then((resp) => {
         setTrailer(resp.data.linkEmbed)
         setshowTrailer(true)
         setLoading(false)
      })
   }

      if (props.render) {
         return (
            <SearchOutput 
               data={props.data}
               year={props.year}
               size={props.size}
               trailer={trailer}
               showTrailer={showTrailer}
               loading={loading}
               onClick={handleClick}
            />
         )
      } else if (props.list) {
         return (
            <Top250List 
               data={props.data}
            />
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

export default Output