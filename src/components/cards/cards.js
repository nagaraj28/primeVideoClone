import React, { useContext,useEffect,useState } from "react";
import { Link, useHistory } from "react-router-dom";
import styles from "./cards.module.css";
import { Context } from "../../context/Context";
import { useFavContent } from "../../hooks";
import { favselectionMap } from "../../utils";

export default function Card({dataItem,typeVal}) {
  // console.log(dataItem)
  const {favseries} = useFavContent('series');
  const {favmovies} = useFavContent('movies');
   let favdataCollection = [];
   favdataCollection=favselectionMap({favseries,favmovies});    
   const [favData,setFavData] =useState([]);
   const [isFav,setIsFav]=useState({fav:false})
   const {playerItemUtil,addToFavourites,deleteFromFavourites,userId} =useContext(Context);
   const history= useHistory();
   favdataCollection=favselectionMap({favseries,favmovies});    
   //console.log("favs");
 //  console.log(favdataCollection);
      useEffect(()=>{
         setFavData(favdataCollection.favContentData);
      },[favdataCollection.favContentData.length,userId,isFav]);
      console.log("favData")
      console.log(favData); 
   return(
          <div className={styles.Slide}  onClick={()=>{playerItemUtil(dataItem,typeVal)
        }}>
       <img width="100%"
                  style={{ width: "100%", objectFit: "contain"}}  src={dataItem.imageSrc} alt={dataItem.slug} onClick={()=>{  history.push("/player")}}/>
        <div className={styles.hidden} > 
        <div className={styles.cardbtnsctnr}>
           <div style={{display:"flex",marginRight:"6em"}}>
           <Link to="/player/playvideo">
           <span style={{}}> 
               <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px"
               width="85" height="85"
               viewBox="0 0 172 172"
               style={{fill:"#000000;"}}><g transform="" ><g fill="none" fill-rule="nonzero" stroke="none" stroke-width="1" stroke-linecap="butt" stroke-linejoin="miter" stroke-miterlimit="10" stroke-dasharray="" stroke-dashoffset="0" font-family="none" font-weight="none" font-size="none" text-anchor="none" style={{mixBlendMode:"normal"}}><path d="M0,172v-172h172v172z" fill="none"></path><path d="M86,120.4c-18.9986,0 -34.4,-15.4014 -34.4,-34.4v0c0,-18.9986 15.4014,-34.4 34.4,-34.4h0c18.9986,0 34.4,15.4014 34.4,34.4v0c0,18.9986 -15.4014,34.4 -34.4,34.4z" fill="#ffffff"></path><g fill="#000000"><path d="M86,57.33333c-15.8326,0 -28.66667,12.83407 -28.66667,28.66667c0,15.8326 12.83407,28.66667 28.66667,28.66667c15.8326,0 28.66667,-12.83407 28.66667,-28.66667c0,-15.8326 -12.83407,-28.66667 -28.66667,-28.66667zM80.26667,96.03333v-20.06667c0,-1.18107 1.34733,-1.85473 2.29333,-1.14667l13.37873,10.03333c0.7654,0.57333 0.7654,1.72 0,2.29333l-13.37873,10.03333c-0.946,0.70807 -2.29333,0.0344 -2.29333,-1.14667z"></path></g></g></g></svg>
                             </span>
                 </Link>
           <span style={{ marginTop:"32px"}}>Play</span>
          </div>
           <div style={{display:"flex",marginTop:"30px"}}>
           {
              (favData.filter(item=>(item.id===dataItem.id)).length>0)?(<span  onClick={()=>{
                 deleteFromFavourites(typeVal,dataItem.docId)
                  favdataCollection=favselectionMap({favseries,favmovies});
                  setFavData(favdataCollection.favContentData);
                  setIsFav((prevState)=>({
                     ...prevState,
                     fav:!(prevState.fav)
                  }))

              }}>
              <svg height="25px" id="svg2" version="1.1" viewBox="0 0 32 32" width="32px" xmlSpace="preserve" xmlns="http://www.w3.org/2000/svg"  ><g id="background"><rect fill="none" height="32" width="32"/></g><g id="document_x5F_text_x5F_remove"><title>remove from favourites</title><path d="M24,14.059V5.584L18.414,0H0v32h24v-0.059c4.499-0.5,7.998-4.309,8-8.941C31.998,18.366,28.499,14.556,24,14.059z    M17.998,2.413L21.586,6h-3.588V2.413z M2,30V1.998h14v6.001h6v6.06c-1.752,0.194-3.352,0.89-4.652,1.941H4v2h11.517   c-0.412,0.616-0.743,1.289-0.994,2H4v2h10.059C14.022,22.329,14,22.661,14,23c0,2.829,1.308,5.351,3.349,7H2z M23,29.883   c-3.801-0.009-6.876-3.084-6.884-6.883c0.008-3.801,3.083-6.876,6.884-6.885c3.799,0.009,6.874,3.084,6.883,6.885   C29.874,26.799,26.799,29.874,23,29.883z M20,12H4v2h16V12z"/><g><rect height="2" width="10" x="18" y="22"/></g></g></svg></span>):(<span style={{marginRight:""}} onClick={()=>{
                 addToFavourites(dataItem,typeVal,dataItem.docId)
                 favdataCollection=favselectionMap({favseries,favmovies});
                setFavData(favdataCollection.favContentData);
                  setIsFav((prevState)=>({
                     ...prevState,
                     fav:!(prevState.fav)
                  }))
                 }}>
           <svg width="30px" height="30px" xmlns="http://www.w3.org/2000/svg"><title>Add</title><path d="M3 12h18m-9 9V3" stroke="currentColor" stroke-width="2" fill="none" stroke-linecap="round"></path></svg>
             </span>)
           } 
             <span className="">
             <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" height="20px" width="20px" ><path fill="currentColor" fill-rule="evenodd" d="M12,20 C10.152,20 8.455,19.367 7.1,18.314 L18.314,7.1 C19.367,8.455 20,10.152 20,12 C20,16.418 16.418,20 12,20 M4,12 C4,7.582 7.582,4 12,4 C13.848,4 15.545,4.633 16.9,5.686 L5.686,16.9 C4.633,15.545 4,13.848 4,12 M12,2 C6.477,2 2,6.477 2,12 C2,17.523 6.477,22 12,22 C17.523,22 22,17.523 22,12 C22,6.477 17.523,2 12,2" transform="translate(-2 -2)"></path></svg>
                   </span>
           </div>
        </div>
        <div className={styles.cardtxt} onClick={()=>{history.push("/player")}} >
        <p>included with prime</p>
        <h1 style={{
                        fontSize: "15px",
                        color: "white",
                        lineHeight: "1px"}} >{dataItem.title}</h1>
   <p className={styles.overview}>{dataItem.description}</p>
       
        </div>
        </div>
        </div>
);
}