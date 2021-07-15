import React, { Component } from 'react';
import NavbarComponent from '../components/NavbarComponent';
import ButonCreateComponent from '../components/ButtonCreateComponent';
import CardComponent from '../components/CardComponent';
import ButtonMenu from '../components/ButtonMenu';

class LandingPage extends Component {
    render() {
        return (
            <div>
                <NavbarComponent />
                <ButtonMenu />
                <ButonCreateComponent />
                <CardComponent />
            </div>
        );
    }
}

export default LandingPage;
