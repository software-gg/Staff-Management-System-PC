import React from 'react';
import { Link } from 'react-router-dom';

export default function linker(url) {
    return function(Comp) {
        return class Linker extends React.Component {
            constructor(props) {
                super(props);
            }
            render() {
                return (
                    <Link to={url}>
                        <Comp {...this.props}></Comp>
                    </Link>
                );
            }
        }
    } 
}
