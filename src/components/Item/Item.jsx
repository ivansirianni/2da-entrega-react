import { Link } from "react-router-dom"

export default function Item(item){
    return(
        <div className="card body mt-3 bg-black border border-primary">
          <div className ="my-3">
          <img src={item.img} className="card-img-top mb-2 mt-2 " alt="item"/>
          <h2 className="card-title text-white">{item.name} </h2> 
          <p className="text-white"> Price: u$s {item.price} </p>
          <Link to={`/item/${item.id}`} className="btn btn-primary">View More Details</Link>        
        </div>
      </div>
    );
}