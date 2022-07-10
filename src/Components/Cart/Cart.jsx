import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { removeFromCart } from '../../Store/Actions/CartActions';

class Cart extends Component {
  constructor(props){
    super(props);
    this.removeFromCart = this.removeFromCart.bind();
  }
  removeFromCart = (pid) =>{
    this.props.removeFromCartPropMethod(pid);
  }
  render() {
    console.log(this.props.cartItems);
    return (
      // (this.props.cartItems.length === 0 &&
      //   <div>No Items in the Cart <Link to="../mobiles" className="dropdown-item" href="#">Mobiles</Link></div>
      // )
      
      (this.props.cartItems.length > 0 &&
        <table className="table table-striped">
          <thead>
            <tr>
              <th>Pid</th>
              <th>Title</th>
              <th>Description</th>
              <th>Price</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {
            this.props.cartItems.map((item,index) => {
              return(
                <tr key={index}>
                    <td>{index+1}</td>
                    <td>{item.product.title}</td>
                    <td>{item.product.desc}</td>
                    <td>{item.product.price}</td>
                    <td onClick={this.removeFromCart(item.product.id)}>Delete</td>
                </tr>
              )
            })            
          }
          </tbody>
        </table>
      )      

    )
  }
}

const mapStateToProps = (state) => {
  return {
    cartItems: state.cart.cart
  }
}

const mapDispatchToProps = (dispatch) =>{
  return{
      removeFromCartPropMethod: (pid) =>{
          dispatch(removeFromCart(pid))
      }
  }
}

export default connect(mapStateToProps,mapDispatchToProps)(Cart);
