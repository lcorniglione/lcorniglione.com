import React from 'react';
import { Link } from 'gatsby';
import styled from 'styled-components';
import { typeScale, primary } from '../utils';

const HeaderTitle = styled.h1`
    font-size: ${typeScale.header1};
    margin-bottom: 0;
`;

const HeaderSubtitle = styled.h2`
    font-size: ${typeScale.paragraph};
    margin-top: 0;
    font-weight: normal;
    color: ${primary[300]};
`;

const HeaderTitleContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-end;
`;

const HeaderContainer = styled.header`
    display: flex;
    align-items: center;
    justify-content: space-between;
`;

const HeaderButtonList = styled.ul`
    list-style: none;
    display: flex;
    flex-direction: row;
`;

const HeaderButtonItem = styled.li`
    margin-right: 10px;
    margin-left: 10px;
`;

const HeaderButton = styled(props => <Link {...props} />)`
    background: none;
    padding: 6px;
    border: none;
    cursor: pointer;
    text-decoration: none;
    color: #111111;
    font-size: ${typeScale.header4};
`;

const Header = () => {
    return (
        <HeaderContainer>
            <HeaderTitleContainer>
                <HeaderTitle>Luciano Corniglione</HeaderTitle>
                <HeaderSubtitle>Software Engineer</HeaderSubtitle>
            </HeaderTitleContainer>
            <HeaderButtonList>
                <HeaderButtonItem>
                    <HeaderButton to='/about'>About</HeaderButton>
                </HeaderButtonItem>
                <HeaderButtonItem>
                    <HeaderButton to='/experience'>Experience</HeaderButton>
                </HeaderButtonItem>
            </HeaderButtonList>
        </HeaderContainer>
    );
};

export default Header;
