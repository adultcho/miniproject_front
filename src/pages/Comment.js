import React from "react";


const Comment = ({text}) =>{

    console.log(text)
  

    return(
      <div>
        {text.map(text =>{
          return (
            <div key={text.id}>
              <p>{text.commentContent}</p>
            </div>

          )
        })}
      </div>

    )
}


export default Comment ;