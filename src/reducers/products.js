// Bước 2
var initialState = [
    {
        id : 1,
        name : 'Iphone 12',
        image : 'https://cdn.cellphones.com.vn/media/catalog/product/cache/7/image/9df78eab33525d08d6e5fb8d27136e95/f/i/finish_iphone-x_dark_gray_large_1_2.jpg',
        description : 'Sản phẩm do Apple sản xuất',
        price : 500,
        inventory : 10,
        rating: 4
    },
    {
        id : 2,
        name : 'Iphone 13',
        image : 'https://didongmoi.com.vn/site/pictures/products/iphone-11-pro-max-cu-(3).jpg',
        description : 'Sản phẩm do Apple sản xuất',
        price : 1500,
        inventory : 15,
        rating: 5
    },
    {
        id : 3,
        name : 'Iphone 14',
        image : 'https://didongmoi.com.vn/site/pictures/products/1557821343_iphone-xs-max-quoc-te-like-new%20(3)_uwo.jpg',
        description : 'Sản phẩm do Apple sản xuất',
        price : 2500,
        inventory : 20,
        rating: 3
    }
];
const products = (state = initialState, action) =>{
    switch(action.type){
        default: return [...state];
    }
}
export default products;