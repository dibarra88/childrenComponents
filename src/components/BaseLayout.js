import React, { Component } from 'react';
import Header from './Header';
import Footer from './Footer';

export default class BaseLayout extends Component {
    render() {
        return (
            <div>
                <Header />
                <div className="row justify-content-center">
                    {this.props.children}
                </div>
                <Footer />
            </div>
        );
    }
}