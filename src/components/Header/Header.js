import React from 'react';
import { Jumbotron } from 'react-bootstrap';
import logo from '../../images/panda.jpg';

const Header = () => {
    return (
        <Jumbotron>
            <h1 className="text-center display-3">Panda News!</h1>
            <h5 className="text-center">
                Get 24/7 updates about the current situations on Panda News
            </h5>
            <img className="w-50 d-block mx-auto my-2 rounded-circle" src={logo} alt=""/>
        </Jumbotron>
    );
};

export default Header;