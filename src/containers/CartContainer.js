import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import Card from './../components/Card';
import CardItem from './../components/CardItem';
import CardResult from './../components/CardResult';
import * as Message from './../constants/Message';
import { actChangeMessage, actDeleteProductInCart, actUpdateProductInCart } from './../actions/index';
class CartContainer extends Component {
    showCartItem = (card) =>{
        var result = <tr>
            <td>{Message.MSG_CART_EMPTY}</td>
        </tr>;
        var {actDeleteProductInCart, actChangeMessage, actUpdateProductInCart} = this.props;
        if(card.length > 0){
            result = card.map((item, index) =>{
                return (
                    <CardItem
                    key={index}
                    item={item}
                    index={index}
                    actDeleteProductInCart={actDeleteProductInCart}
                    actChangeMessage={actChangeMessage}
                    actUpdateProductInCart={actUpdateProductInCart}
                    />
                );
            });
        }
        return result;
    } 
    showTotalMoney = (card) =>{
        // var total = null;
        // if(card.length > 0){
        //     total = <CardResult card={card}/>
        // }
        // return total;
        var total = 0;
        if(card.length > 0){
            for(var i = 0; i < card.length; i++){
                total += card[i].product.price * card[i].quantity;
            }
            
        }
        return <CardResult total={total}/>;
    }
    render() {
        var {card} = this.props;
        return (
            <Card>
                {this.showCartItem(card)}
                {this.showTotalMoney(card)}
            </Card>
        );
    }
}
// kiểm tra kiểu dữ liệu đầu vào trước khi đưa vào components
CartContainer.propTypes = {
    card: PropTypes.arrayOf(
        PropTypes.shape({
            product: PropTypes.shape({
                id: PropTypes.number.isRequired,
                name: PropTypes.string.isRequired,
                image: PropTypes.string.isRequired,
                description: PropTypes.string.isRequired,
                price: PropTypes.number.isRequired,
                inventory: PropTypes.number.isRequired,
                rating: PropTypes.number.isRequired
            }).isRequired,
            quantity: PropTypes.number.isRequired
        })
    ).isRequired,
    actDeleteProductInCart : PropTypes.func.isRequired,
    actChangeMessage : PropTypes.func.isRequired,
    actUpdateProductInCart : PropTypes.func.isRequired
}
const mapStateToProps = state =>{
    return {
        card : state.card
    }
}
const mapDispatchToProps = (dispatch, props) =>{
    return {
        actDeleteProductInCart : (product) =>{
            dispatch(actDeleteProductInCart(product));
        },
        actChangeMessage : (message) =>{
            dispatch(actChangeMessage(message));
        },
        actUpdateProductInCart : (product, quantity) =>{
            dispatch(actUpdateProductInCart(product, quantity));
        }
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(CartContainer);
