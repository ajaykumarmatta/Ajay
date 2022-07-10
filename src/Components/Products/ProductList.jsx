import React, { Component } from 'react'
import { Link } from 'react-router-dom';
import m1 from "../../assets/Products/Mobiles/m1.avif";
import m2 from "../../assets/Products/Mobiles/m2.avif";
import m3 from "../../assets/Products/Mobiles/m3.avif";
import m4 from "../../assets/Products/Mobiles/m4.avif";
import { connect } from 'react-redux';

class ProductList extends Component {
    constructor(props){
        super(props);
        console.log(props)
    }
    render() {
        return (
            <>
                <h1>List of Products</h1>
                <section className='container'>
                    <section className='row'>
                        {
                            this.props.products.map((product)=>{
                                return(
                                    <div className='col-md-4' key={product.id}>
                                        <div class="card">
                                            <img src={m1} class="card-img-top" alt="..." />
                                            <div class="card-body">
                                                <h5 class="card-title">{product.title}</h5>
                                                <p class="card-text">{product.desc}</p>
                                                <Link to="../product-details" class="btn btn-primary">View More</Link>
                                            </div>
                                    </div>
                                </div>
                                )
                            })
                        }
                    </section>
                </section>
            </>
        )
    }
}

const mapStateToProps = (state) =>{
    //console.log(state);
    return {
        products: state.product.products
    }
}

export default connect(mapStateToProps) (ProductList);
