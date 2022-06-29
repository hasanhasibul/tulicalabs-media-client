import { Navbar, Container, Nav, NavDropdown } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import './Header.css'
import man from '../../images/man.png'
function Header() {
    const navigate = useNavigate()
    const email = localStorage.getItem('email')
    const handleClick = () => {
        localStorage.clear();
        navigate('/login')
    }
    return (
        <div >
            <Navbar className='header-bg-color' expand="lg">
                <Container>
                    <Navbar.Brand className='text-white' href="/">TUNICALABS MEDIA</Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    {
                        email ? <Navbar.Collapse className="justify-content-end" id="basic-navbar-nav">
                            <Nav>
                                <Nav.Item >
                                    <img width='40px' height='auto' src={man} alt="" srcset="" />
                                </Nav.Item>
                                <NavDropdown className='text-white' title={email ? email : 'Profile'} id="basic-nav-dropdown">
                                    <NavDropdown.Item onClick={handleClick} > Logout </NavDropdown.Item>
                                </NavDropdown>
                            </Nav>
                        </Navbar.Collapse> : null
                    }
                </Container>
            </Navbar>

        </div >
    );
}

export default Header;
