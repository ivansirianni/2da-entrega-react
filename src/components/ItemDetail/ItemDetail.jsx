import React from "react"

export default function ItemDetail ({product}) {
    return(
        <div className="card body mt-3 bg-black border border-primary">
            <img src={product.img} className="card-img-top mb-2 mt-2" alt="Product"></img>
            <h4 className="card-title text-white">{product.name}</h4>
            <p className="text-white">Price: u$s{product.price}</p>
            <p className="text-white">{product.type}</p>            
        </div>
    )
}