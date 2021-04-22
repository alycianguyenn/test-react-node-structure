// Navigation Bar and Header
import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

const selectedNav = {
    color: '#F28F38'
}

const StyledLink = styled(NavLink)`
    &:focus,  &:hover {
    color: #F28F38;
  }
`;

class Navigation extends Component {
    render() {
        return (
            <header className="navbar fixed-top bg-white shadow-sm ">
                <div className="navbar-brand" id="logo-header">
                    <StyledLink to="/" className="font-weight-500 text-primary text-decoration-none">
                        <h4 className="mb-0 font-weight-normal">Sound Sustainability</h4>
                    </StyledLink>
                </div>
                <div id="nav-links">
                    <StyledLink className="nav-btn text-decoration-none px-2" activeStyle={selectedNav} 
                        to="/screeninghome" >Hearing Screening</StyledLink>
                    <StyledLink className="nav-btn text-decoration-none px-2" activeStyle={selectedNav} 
                        to="/about">Education</StyledLink>
                    <StyledLink className="nav-btn text-decoration-none px-2" activeStyle={selectedNav} 
                        to="/audioscreening">Devices</StyledLink>
                    <StyledLink className="nav-btn text-decoration-none px-2" activeStyle={selectedNav} 
                        to="/about">About Us</StyledLink>
                    <StyledLink className="nav-btn text-decoration-none px-2" activeStyle={selectedNav} 
                        to="/about">Sign In</StyledLink>
                </div>
            </header>
        );
    }
}

export default Navigation;