import { useParams} from "react-router-dom"
import { useState, useEffect } from "react"
import { getProducts } from "../../Data/Products"
import { getProductsByCategory } from "../../Data/Products"
import ItemList from "../ItemList/ItemList"

const ItemListContainer = () => {
    const [products, setProducts] = useState([])
    const {categoryId} = useParams();

    useEffect(() => {
        if(categoryId) {
            getProductsByCategory(categoryId).then((products)=> {
                setProducts(products);
            });
        }
        else{
            getProducts().then((products) => {
                setProducts(products);
            });
        }
    }, [categoryId])


    console.log(categoryId)
    return(
        <div className="listContainer-container">
            <div className="itemList-container">
                <ItemList products={products}  />
            </div>
        </div>
    )
}

export default ItemListContainer