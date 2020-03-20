import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import Header from './Header';

const LayoutContainer = styled.div`
    display: grid;
    grid-template-columns: 20% 60% 20%;
`;

const LayoutChildren = styled.div`
    grid-column-start: 2;
`;

const Layout = ({ children }) => {
    return (
        <LayoutContainer>
            <LayoutChildren>
                <Header />
                {children}
            </LayoutChildren>
        </LayoutContainer>
    );
};

Layout.propTypes = {
    children: PropTypes.element.isRequired,
};

export default Layout;
