import * as types from './../constants/ActionType'
// Bước 2
var data = JSON.parse(localStorage.getItem('CART'));
var initialState = data ? data : [];
// var initialState = [{
//     product: {
//         id: 1,
//         name: 'Iphone 12',
//         image: 'https://cdn.cellphones.com.vn/media/catalog/product/cache/7/image/9df78eab33525d08d6e5fb8d27136e95/f/i/finish_iphone-x_dark_gray_large_1_2.jpg',
//         description: 'Sản phẩm do Apple sản xuất',
//         price: 500,
//         inventory: 10,
//         rating: 4
//     },
//     quantity: 5
// },
// {
//     product: {
//         id: 2,
//         name: 'Iphone 13',
//         image: 'https://didongmoi.com.vn/site/pictures/products/iphone-11-pro-max-cu-(3).jpg',
//         description: 'Sản phẩm do Apple sản xuất',
//         price: 1500,
//         inventory: 15,
//         rating: 5
//     },
//     quantity: 2
// }
// ];
var findProductInCart = (state, product) => {
    var index = -1; // chưa có sp trong giỏ hàng
    for (var i = 0; i < state.length; i++) {
        if (state[i].product.id === product.id) {
            index = i;
            break;
        }
    }
    return index;
}
const products = (state = initialState, action) => {
    var { product, quantity } = action;
    var index = -1;
    switch (action.type) {
        case types.ADD_TO_CART: {
            index = findProductInCart(state, product);
            if (index === -1) { // thêm thông tin sản phẩm ms vào giỏ hàng
                state.push({
                    product,
                    quantity
                });
            }
            else {
                state[index].quantity += 1;
            }
            localStorage.setItem('CART', JSON.stringify(state)); // gán dữ liệu giỏ hàng vào local
            return [...state];
        }
        case types.DELETE_PRODUCT_IN_CART:{
            index = findProductInCart(state, product);
            if(index !== -1){ // sản phẩm đã tồn tại trong giỏ hàng
                state.splice(index, 1);
            }
            localStorage.setItem('CART', JSON.stringify(state)); // gán dữ liệu giỏ hàng vào local
            return [...state];
        }
        case types.UPDATE_PRODUCT_IN_CART:{
            index = findProductInCart(state, product);
            if(index !== -1) {
                state[index].quantity = quantity;
            }
            localStorage.setItem('CART', JSON.stringify(state)); // gán dữ liệu giỏ hàng vào local
            return [...state];
        }
        default: return [...state];
    }
}
export default products;