
import React from 'react';
import styled from 'styled-components';
import { FaHome } from 'react-icons/fa';
import { FaGithub } from 'react-icons/fa';
import { FaTwitter } from 'react-icons/fa';
import { FaInstagram } from 'react-icons/fa';
import { FaLinkedin } from 'react-icons/fa';
const Home = () => {
  return (
    <>
        <Container>
            <Main>
                <Profile>
                    <Img src='/images/profile1.jpg' />
                    <UserTitle>@vanillacraftz</UserTitle>
                </Profile>
                <Menu>
                    <MenuTitle><a href='https://www.instagram.com/vanillacode737/' ><FaHome style={{margin: '0 5px -2px 0', fontSize: '24px'}}/>official website</a></MenuTitle>
                    <MenuTitle><a href='https://github.com/vanillacode737' ><FaGithub style={{margin: '0 5px -2px 0', fontSize: '24px'}}/>Github</a></MenuTitle>
                    <MenuTitle><a href='https://twitter.com/vanillacode737' ><FaTwitter style={{margin: '0 5px -2px 0', fontSize: '24px'}}/>Twitter</a></MenuTitle>
                    <MenuTitle><a href='https://www.instagram.com/vanillacode737/' ><FaInstagram style={{margin: '0 5px -2px 0', fontSize: '24px'}}/>Instagram</a></MenuTitle>
                    <MenuTitle><a href='https://www.linkedin.com/in/vanillacode737/' ><FaLinkedin style={{margin: '0 5px -2px 0', fontSize: '24px'}}/>Linkedin</a></MenuTitle>
                </Menu>
            </Main>
        </Container>
    </>
  )
}

export default Home;

const Container = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    position: relative;
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
    width: 100px;
    height: 100px;
    border-radius: 50%;
    border: 1px solid rgb(52, 121, 224);
    object-fit: cover;
    margin-bottom: 10px;
`
const UserTitle = styled.p`
    display: inline-block;
    color: #fff;
    background-color: #000;
    padding: 5px 6px;
    border: 1px solid #fff;
    border-radius: 20px;
`

const Menu = styled.div``
const MenuTitle = styled.div`
    text-align: center;
    margin-bottom: 20px;
    background-color: #fff;
    border-radius: 40px;
    padding: 20px 100px;
    font-size: 22px;
    text-transform: capitalize;
`