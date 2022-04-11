import React from "react"
import data from '../data.json'


const GroceryDetails = ()=>{
console.log(data)

    return(
        <>
        <h1>Groceries</h1>
        <div className="container">
            
            {data.map(item=>{
                return (
                    <>
                        <div className="Gross" style={{border:'2px solid black',height:'350px', width:'400px'}} >
                           <img src={item.imgURL}></img>
                           <h4>{item.title}</h4>
                           <h5> {item.mrp}</h5>
                           <h4>{item.sellingPrice}</h4>
                           
                        </div>
                    </>
                )
            })}
        </div>
        </>
    )
}
export default GroceryDetails