import React, {useState, useEffect, useCallback} from 'react';
import styled from 'styled-components'
import logo from '../assets/logo_violet.png'
import {FaBars, FaShoppingCart, FaUserAstronaut, FaSearch} from 'react-icons/fa';
import {Link} from 'react-router-dom';
import {useLocation} from 'react-router-dom';
import {animateScroll} from 'react-scroll';
import Dropdown from './Dropdown';
import {Products} from "../data";


const Container = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  padding: 0.5rem 4rem;
  background-color: black;
  color: white !important;
  text-shadow: 0 0 10px #00a2ff;
  z-index: ${({isOpen}) => (isOpen ? "0" : "100")};
  opacity: 0.8;
  transition: transform 0.4s ease-in-out;
  transform: translateY(${({isScrolling}) => (isScrolling ? "0" : "-100%")});
  @media screen and (max-width: 768px) {
    padding: 0.5rem 2rem;
  }
`;

const Wrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;
const Left = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
`;
const Logo = styled.img`
  width: 7rem;
  height: 7rem;
`;
const Right = styled.div`
  text-align: right;
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: flex-end;
  @media screen and (max-width: 1250px) {
    flex: 1;
  }
  position: relative;

  &:hover > div {
    display: block;
  }

  @media screen and (max-width: 768px) {
    display: none;
  }
`;
const Mobile = styled.div`
  flex: 1;
  display: none;
  align-items: center;
  justify-content: flex-end;

  @media screen and (max-width: 768px) {
    display: flex;
  }
`
const MenuItem = styled.div`
  font-size: 20px;
  cursor: pointer;
  margin-left: 40px;
  text-align: center;
  display: inline-block;
  text-transform: uppercase;
  font-weight: 400;
  transition: 0.2s all ease-in-out;
  color: white;

  &:hover {
    color: #00a2ff;
  }
`;
const UserIcon = styled(FaUserAstronaut)`
  font-size: 34px;
  margin-left: 2rem;
  cursor: pointer;
`;


const SearchIcon = styled(FaSearch)`
  font-size: 30px;
  margin-left: 2rem;
  cursor: pointer;
  display: flex;

`;

const SearchInput = styled.input`
  width: 15rem;
  height: 2rem;
  margin-left: 1rem;
  font-size: 1rem;
  padding: 0.5rem;
  border: none;
  border-radius: 5px;
  background-color: #222222;
  color: white;
  text-shadow: 0 0 10px #00a2ff;
  box-shadow: 0 0 10px #00a2ff;
  transition: width 0.4s ease-in-out;
  overflow: hidden;


  &::placeholder {
    color: white;
    opacity: 0.5;
  }

  &:focus {
    outline: none;
    box-shadow: 0 0 10px #00a2ff, 0 0 10px #00a2ff;
  }
`;



const Navbar = ({toggle}) => {
    const location = useLocation();
    const isHomePage = location.pathname === "/";
    const [isScrolling, setIsScrolling] = useState(true);
    const [lastScrollTop, setLastScrollTop] = useState(0);
    const [showDropdown, setShowDropdown] = useState(false);
    const [searchVisible, setSearchVisible] = useState(false);
    const [searchResults, setSearchResults] = useState([]);
    const [searchValue, setSearchValue] = useState("");


    const handleSearchClick = () => {
        setSearchVisible(!searchVisible);
    };

    const handleScroll = useCallback(() => {
        const currentScrollTop = window.pageYOffset
        if (currentScrollTop > lastScrollTop) {
            setIsScrolling(false);
        } else {
            setIsScrolling(true);
        }
        setLastScrollTop(currentScrollTop <= 0 ? 0 : currentScrollTop);
    }, [lastScrollTop]);

    useEffect(() => {
        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, [handleScroll]);

    const scrollToTop = () => {
        animateScroll.scrollToTop();
    };
    const searchProducts = (searchText) => {
        const filteredProducts = Products.filter((product) =>
            product.title.toLowerCase().includes(searchText.toLowerCase())
        );
        setSearchResults(filteredProducts);
    };


    return (
        <Container isScrolling={isScrolling}>
            <Wrapper>
                <Left>
                    <Link to="/"><Logo src={logo}/></Link>
                    <Link to="/login">
                        <UserIcon/>
                    </Link>
                    <SearchIcon onClick={handleSearchClick}/>
                    {searchVisible && (
                        <>
                            <SearchInput
                                type="search"
                                placeholder="Szukaj..."
                                value={searchValue}
                                onChange={(e) => {
                                    setSearchValue(e.target.value);
                                    searchProducts(e.target.value);
                                }}
                                onFocus={() => setSearchVisible(true)}
                                onBlur={() => setSearchVisible(false)}
                            />
                            {searchResults.length > 0 && (
                                <SearchResultsContainer>
                                    {searchResults.map((product) => (
                                        <Link to={`/tour/${product.id}`}>
                                            <SearchResultItem key={product.id}>
                                                {product.title}
                                            </SearchResultItem>
                                        </Link>
                                    ))}
                                </SearchResultsContainer>
                            )}
                        </>
                    )}
                </Left>
                <Right>
                    {isHomePage ? (
                        <MenuItem onClick={scrollToTop}>Strona Główna</MenuItem>
                    ) : (
                        <Link to="/"><MenuItem>Strona Główna</MenuItem></Link>
                    )}
                    <MenuItem
                        onMouseEnter={() => setShowDropdown(true)}
                        onMouseLeave={() => setShowDropdown(false)}
                    >
                        Produkty
                        <Dropdown isHomePage={isHomePage} show={showDropdown}/>
                    </MenuItem>

                    <Link to="/contact">
                        <MenuItem>Kontakt</MenuItem>
                    </Link>

                    <Link to="/about-us">
                        <MenuItem>O Nas</MenuItem>
                    </Link>

                    <Link to="/shopping-cart">
                        <MenuItem>
                            <FaShoppingCart fontSize={24}/>
                        </MenuItem>
                    </Link>
                </Right>
                <Mobile>
                    <FaBars fontSize="24px" cursor="pointer" z-index="999" onClick={toggle}/>
                </Mobile>
            </Wrapper>
        </Container>
    );
};


const SearchResultsContainer = styled.div`
  position: absolute;
  top: 100%;
  left: 175px;
  background-color: #222;
  width: 70%;
  max-height: 200px;
  overflow-y: auto;
  border-radius: 5px;
  box-shadow: 0 0 10px #00a2ff;
  z-index: 100;
`;

const SearchResultItem = styled.div`
  padding: 0 1rem;
  cursor: pointer;
  color: white;
  text-shadow: 0 0 10px #00a2ff;
  transition: background-color 0.2s ease-in-out;
  width: 100%;
  height: 2rem;
  display: flex;
  align-items: center;
  

  &:hover {
    background-color: #333;
  }

  a {
    color: inherit;
    text-decoration: none;
  }
`;
export default Navbar;
