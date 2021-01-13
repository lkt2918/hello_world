import React, { Component } from 'react';

class LoadingBox extends Component {
    render() {
        return (
            <div>
                <i className="fa fa-spinner fa-spin"></i> Loading...
            </div>
        );
    }
}

export default LoadingBox;