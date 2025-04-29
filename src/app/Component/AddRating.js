
import React from "react";

const AddRating =({setRating})=>{
    return(
        <div className="add-rating">
        {[1,2,3,4,5].map((num)=>(
            <button key={num} onClick={()=>setRating(num)}> {num} 
            ⭐ 
            </button>
        ))}

        </div>
    );
};

export default AddRating;