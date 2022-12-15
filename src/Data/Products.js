import Images from "../components/Images/Images"

const products = [
    {
        id: 1,
        name: "Small Vegetables Pack",
        price: 4,
        img: Images.SmallVegetablePack,
        type: "Vegetables-Packs"
    },
    {
        id: 2,
        name: "Medium Vegetables Pack",
        price: 7.50,
        img: Images.MediumVegetablePack,
        type: "Vegetables-Packs"
    },
    {
        id: 3,
        name: "Large Vegetables Pack",
        price: 9.75,
        img: Images.LargeVegetablePack,
        type: "Vegetables-Packs"
    },
    {
        id: 4,
        name: "Small Fruits Pack",
        price: 5.44,
        img: Images.SmallFruitPack,
        type: "Fruits-Packs"
    },
    {
        id: 5,
        name: "Medium Fruits Pack",
        price: 7.50,
        img: Images.MediumFruitPack,
        type: "Fruits-Packs"
    },
    {
        id: 6,
        name: "Large Fruits Pack",
        price: 9.69,
        img: Images.LargeFruitPack,
        type: "Fruits-Packs"
    },
];

export const getProducts = () => {
    return new Promise((response, reject) =>{
        setTimeout(() => {
            response(products);
        }, 2000);
    });
};

export const getProductsByCategory = (categoryId) =>{
    return new Promise ((response) => {

        const items = products.filter(category => category.type === categoryId);
        setTimeout(() => {
            response(items);
        }, 2000)
    });
};

export const getProduct = (id) =>{
    return new Promise ((response) => {
        setTimeout(() => {
            response(products.find((item) => item.id === parseInt(id)))
        }, 2000);
    });
};