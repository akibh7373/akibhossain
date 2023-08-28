
import React from 'react';
import './App.css';
import styled from 'styled-components';
import { FaHome, FaGithub, FaTwitter, FaInstagram, FaLinkedin } from 'react-icons/fa';
const Home = () => {
    return (
        <>
            <Container>
                <Main>
                    <Profile>
                        <Img src='/images/profile.jpeg' />
                        <UserTitle>@vanillacraftzz</UserTitle>
                    </Profile>
                    <Menu>
                        {/* <MenuTitle><a href='https://www.instagram.com/vanillacraftzz/' ><FaHome className='iconStyle' />official website</a></MenuTitle> */}
                        <MenuTitle><a href='https://github.com/vanillacraftzz' ><FaGithub className='iconStyle' />Github</a></MenuTitle>
                        <MenuTitle><a href='https://twitter.com/vanillacraftzz' ><FaTwitter className='iconStyle' />Twitter</a></MenuTitle>
                        <MenuTitle><a href='https://www.instagram.com/vanillacraftzz/' ><FaInstagram className='iconStyle' />Instagram</a></MenuTitle>
                        <MenuTitle><a href='https://www.linkedin.com/in/akibhossin/' ><FaLinkedin className='iconStyle' />Linkedin</a></MenuTitle>
                    </Menu>
                </Main>
            </Container>
        </>
    )
}

export default Home;

const Container = styled.div`
    display: flex;
    position: relative;
    justify-content: center;
    align-items: center;
    height: 100vh;
    width: 100%;
    background-image: url('/images/bg.jpg');
    background-position: center;
    background-size: cover;
    background-repeat: no-repeat;
    z-index: 1;
    &:before {
        content: '';
        position: absolute;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        background-color: #000;
        opacity:.5;
        z-index: -1;
    }
`

const Main = styled.div``

const Profile = styled.div`
    display: flex;
    margin-bottom: 30px;
    justify-content: center;
    align-items: center;
    flex-direction: column;
`
const Img = styled.img`
    margin-bottom: 10px;
    border-radius: 50%;
    border: 1px solid rgb(52, 121, 224);
    object-fit: cover;
    width: 100px;
    height: 100px;
`
const UserTitle = styled.p`
    display: inline-block;
    padding: 5px 6px;
    border: 1px solid #fff;
    border-radius: 20px;
    background-color: #000;
    color: #fff;
`
const Menu = styled.div``
const MenuTitle = styled.div`
    margin-bottom: 20px;
    padding: 20px 100px;
    border-radius: 40px;
    font-size: 22px;
    text-transform: capitalize;
    text-align: center;
    background-color: #fff;
    @media(max-width: 768px) {
        padding: 8px 30px;
        font-size: 17px;
    }
`
