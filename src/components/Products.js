import React, { Component } from 'react';
// import {connect} from 'react-redux';
class Products extends Component {
  render() {
    return (
      <section className="section">
        <h1 className="section-heading">Danh Sách Sản Phẩm</h1>
        <div className="col-xs-4 col-sm-4 col-md-4 col-lg-4">
          {this.props.children}
        </div>
      </section>
    );
  }
}
// chuyển các state thành props thay vì cha gửi qua thì props cha còn này là props từ store
// const mapStateToProps = state =>{
//   return {
//     // state.products là giống với lấy dữ liệu products từ state vậy
//     products : state.products // products này gọi ở khai báo: reducers -> index
//   }
// }
// export default connect(mapStateToProps, null)(Products);
export default Products;
