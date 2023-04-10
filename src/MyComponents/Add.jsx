import  React, { useState } from "react";
import "../Styles/overall.css"

function Add() {

// const list = {
//   Movie:"",
//   Review:"",
//   Genre: ""
// }
const [Movie,SetMovie] = useState('');
const [Genre,SetGenre] = useState('');
const [Review,SetReview] = useState('');

 
const AddItem = async(e)=>{
e.preventDefault();
var storedNames = JSON.parse(localStorage.getItem("films")) || [];
const gool = {Movie,Genre,Review};
storedNames.push(gool);
// console.log(storedNames);
localStorage.setItem("films", JSON.stringify(storedNames));
  SetMovie('');
  SetGenre('');
  SetReview('');
}

    return(
        <form  onSubmit={(e)=>AddItem(e)} className="Add">
      <h2 >Add Movie</h2>
      <hr />
        
        <div>
        <div>Name:</div>
        <input type="text" value={Movie} onChange={(e)=>SetMovie(e.target.value)} name="movie" id="movie" required/>
        </div>
         
         <div>
        <div>REVIEW:</div>
         
        
        <textarea name="review" value={Review} id="review" cols="30" rows="5" onChange={(e)=>SetReview(e.target.value)} required></textarea>
        </div>
        <div>
        <div>GENRE:</div>
        
        <input type="text" value={Genre} onChange={(e)=>SetGenre(e.target.value)} name="genre" id="genre"/>
        </div>
         <button type="submit" >ADD</button>
     </form>
    );
}
export default Add;