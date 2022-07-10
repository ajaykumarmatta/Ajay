const initialState = {
    products:[
        {
            id:1,
            title:"OnePlus Nord V1",
            desc:"Some quick example text to build on the card title and make up the bulk of the card's content.",
            price:20000
        },
        {
            id:2,
            title:"OnePlus Nord V2",
            desc:"Some quick example text to build on the card title and make up the bulk of the card's content.",
            price:20000
        },
        {
            id:3,
            title:"OnePlus Nord V3",
            desc:"Some quick example text to build on the card title and make up the bulk of the card's content.",
            price:20000
        },
        {
            id:4,
            title:"OnePlus Nord V4",
            desc:"Some quick example text to build on the card title and make up the bulk of the card's content.",
            price:20000
        },
        {
            id:5,
            title:"OnePlus Nord V5",
            desc:"Some quick example text to build on the card title and make up the bulk of the card's content.",
            price:20000
        },
        {
            id:6,
            title:"OnePlus Nord V6",
            desc:"Some quick example text to build on the card title and make up the bulk of the card's content.",
            price:20000
        }
    ]
}

const productReducer = (state=initialState,action) => {
    return state;
}

export default productReducer;