import React, {useState} from 'react'
import { Navbar , Container,  } from 'react-bootstrap'
import { LinkContainer } from 'react-router-bootstrap'
import Form from 'react-bootstrap/Form';
import { Search } from 'react-bootstrap-icons';
import { fetchData } from '../AwsFunctions';
import { useDispatch } from 'react-redux'

function Header() {

    const [searchInput, setSearchInput] = useState("")

    const dispatch = useDispatch();

    const searchEvent = () => {
        console.log("we are inside function");
        dispatch(fetchData(searchInput))
    }

    return (
        <header>
            <Navbar bg="dark" variant="dark" expand="lg" collapseOnSelect>
                <Container
                    style={{
                        marginLeft:"10px",
                        marginRight:"20px"
                    }}
                >
                    <LinkContainer to='/'>
                        <Navbar.Brand>&#9733; Top Reviews &#9733;</Navbar.Brand>
                    </LinkContainer>

                    <Container className='w-50 d-flex flex-nowrap'
                        style={{
                            marginRight:"10px"
                        }}
                    >
                        <Form.Control
                            placeholder="Enter product ID"
                            aria-label="Product-name"
                            aria-describedby="basic-addon2"
                            onChange={(e)=>setSearchInput(e.target.value)}
                            value={searchInput}
                        />
                        <Search
                            className='m-2'
                            style={{
                                width:"20%",
                                height:"25px",
                                color:"white"
                            }}
                            onClick = {() => searchEvent()}
                        />
                    </Container>  
                </Container>
            </Navbar>
        </header>
    )
}

export default Header;