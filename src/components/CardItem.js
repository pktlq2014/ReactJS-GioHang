import React, { Component } from 'react';
import * as Message from './../constants/Message';

class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      quantity : 1
    }
  }
  onUpdateQuantity = (product, quantity) =>{
    if(quantity > 0){
      this.setState({
        quantity : quantity // truyền quantity mới sau khi + or - từ store vào state ở đây
      });
      this.props.actUpdateProductInCart(product, quantity);
    }
    var {actChangeMessage} = this.props;
    actChangeMessage(Message.MSG_UPDATE_CART_SUCCESS);
  }
  showSubTotal = (price, quantity) => {
    return price * quantity;
  }
  onDelete = (product) => {
    this.props.actDeleteProductInCart(product);
    var {actChangeMessage} = this.props;
    actChangeMessage(Message.MSG_DELETE_PRODUCT_IN_CART_SUCCESS);
  }
  render() {
    var { item } = this.props;
    return (
      <tr>
        <th scope="row">
          <img src={item.product.image}
            alt={item.product.name} className="img-fluid z-depth-0" />
        </th>
        <td>
          <h5>
            <strong>{item.product.name}</strong>
          </h5>
        </td>
        <td>{item.product.price}$</td>
        <td className="center-on-small-only">
          <span className="qty">{item.quantity} </span>
          <div className="btn-group radio-group" data-toggle="buttons">
            <label 
              className="btn btn-sm btn-primary
              btn-rounded waves-effect waves-light"
              onClick={ () => this.onUpdateQuantity(item.product, item.quantity - 1)}>
              <a>—</a>
            </label>
            <label className="btn btn-sm btn-primary
              btn-rounded waves-effect waves-light"
              onClick={ () => this.onUpdateQuantity(item.product, item.quantity + 1)}>
              <a>+</a>
            </label>
          </div>
        </td>
        <td>{this.showSubTotal(item.product.price, item.quantity)}$</td>
        <td>
          <button type="button"
            className="btn btn-sm btn-primary waves-effect waves-light"
            data-toggle="tooltip" data-placement="top"
            onClick={() => this.onDelete(item.product)}
            title="" data-original-title="Remove item">
            X
          </button>
        </td>
      </tr>
    );
  }
}

export default App;
