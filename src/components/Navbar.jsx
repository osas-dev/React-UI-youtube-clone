import React from 'react'
import styled from 'styled-components'
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import { SearchOutlined } from '@mui/icons-material';
import { Link } from 'react-router-dom';


const Container = styled.div`
position: sticky;
top: 0;
background: ${({ theme }) => theme.bg};
height: 56px;
`
const Wrapper = styled.div`
display: flex;
align-items: center;
justify-content: flex-end;
height: 100%;
padding: 0px 20px;
position: relative;
`
const Search = styled.div`
position: absolute;
left: 0;
right: 0;
margin: auto;
width: 50%;
display: flex;
align-items: center;
justify-content: space-between;
padding: 5px;
border: 1px solid #ccc;
border-radius: 3px ;
`
const Input = styled.input`
  border: none;
  background: transparent;
  width: 100%;
  outline: none;
`

const Button = styled.button`
  padding: 5px 15px;
  background-color: transparent;
  border: 1px solid #3ea6ff;
  color: #3ea6ff;
  border-radius: 3px;
  font-weight: 500; 
  cursor: pointer;
  display: flex;
  align-items: center;
  gap: 5px;
`

const Navbar = () => {
  return (
    <div>
      <Container>
        <Wrapper>
          <Search>
            <Input placeholder="search" />
            <SearchOutlined />
          </Search>
          <Link to="sign-in" style={{textDecoration: "none"}}>
          <Button><AccountCircleIcon />SIGN IN</Button>
          </Link>
        </Wrapper>
      </Container>
    </div>
  )
}

export default Navbar