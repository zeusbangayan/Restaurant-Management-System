"use strict";
import React from 'react'
var SingleProductViewShort = require('./SingleProductViewShort');
var ProductList = require('./ProductList');

var ListProduct;
module.exports = ListProduct = React.createClass({
    getInitialState: function () {
        return {
            products: []
        };
    },
    render: function () {
        var $this = this;
        return (
            <div className="panel panel-default">
                <div className="panel-heading">

                    <div className="row">

                        <div className="col-md-11">
                            <h3 className="panel-title">All Products</h3>
                        </div>

                    </div>

                </div>

                <ProductList products={$this.state.products}/>
            </div>
        );
    }
});