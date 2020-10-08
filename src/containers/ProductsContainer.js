import React, { Component } from 'react';
import { connect } from 'react-redux';
import ProductsItem from './../components/ProductsItem';
import Products from './../components/Products';
import PropTypes from 'prop-types';
import { actAddToCart, actChangeMessage } from './../actions/index';
class ProductsContainer extends Component {
    showProducts(products) {
        var result = null;
        var { onAddToCart, onChangeMessage } = this.props;
        if (products.length > 0) { // kiểm tra mảng products
            result = products.map((product, index) => {
                return <ProductsItem
                    key={index}
                    product={product}
                    onAddToCart = {onAddToCart}
                    onChangeMessage = {onChangeMessage}
                />
            });
        }
        return result;
    }
    render() {
        var { products } = this.props;
        return (
            <Products>
                {this.showProducts(products)}
            </Products>
        );
    }
}
// kiểm tra kiểu dữ liệu đầu vào trước khi đưa vào components
ProductsContainer.propTypes = {
    products: PropTypes.arrayOf(
        PropTypes.shape({
            id: PropTypes.number.isRequired,
            name: PropTypes.string.isRequired,
            image: PropTypes.string.isRequired,
            description: PropTypes.string.isRequired,
            price: PropTypes.number.isRequired,
            inventory: PropTypes.number.isRequired,
            rating: PropTypes.number.isRequired
        })
    ).isRequired,
    onChangeMessage : PropTypes.func.isRequired,
    onAddToCart : PropTypes.func.isRequired
}
// chuyển các state ở trên store thành props thay vì cha gửi qua thì props cha còn này là props từ store
const mapStateToProps = state => {
    return {
        // state.products là giống với lấy dữ liệu products từ state vậy
        products: state.products // products này gọi ở khai báo: reducers -> index
    }
}
const mapDispatchToProps = (dispatch, props) => {
    return {
        onAddToCart: (product) => {
            dispatch(actAddToCart(product, 1));
        },
        onChangeMessage : (message) =>{
            dispatch(actChangeMessage(message));
        }
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(ProductsContainer);
