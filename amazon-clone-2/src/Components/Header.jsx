import React from 'react';
import RoomOutlinedIcon from '@mui/icons-material/RoomOutlined';
import SearchIcon from '@mui/icons-material/Search';
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import './../Header.css'
import { Link } from 'react-router-dom';
import { useStateValue } from '../ContextAPI/StateProvider';
import { auth } from '../firebase';



function Header() {

    const[{basket, user}, dispatch] = useStateValue();

    const handleAuthentication = ()=>{
        if (user){
            auth.signOut();
        }
    }

    return (
        <div className="header">

            <Link to="/">
                <img 
                    className="header__logo" 
                    src="http://pngimg.com/uploads/amazon/amazon_PNG11.png"
                    alt="amazonLogo"
                />
            </Link>
        
            


            <div className="header__location">
                <RoomOutlinedIcon className="header__locationIcon"/>
                <div className="header__option" style={{marginLeft: 0}}>
                    <span className="header__optionLineOne">Deliver to</span>
                    <span className="header__optionLineTwo">Nigeria</span>
                </div>
            </div>



            <div className="header__search">
                <input type="text" className="header__searchInput" />
                <SearchIcon className="header__searchIcon" />
            </div>



            <div className="header__nav">
                <Link to={!user && "/login"}>
                    <div className="header__option" onClick={handleAuthentication}>
                        <span className="header__optionLineOne">Hello {user? user?.email : "Guest"}</span>
                        <span className="header__optionLineTwo">{user? "Sign Out" : "Sign In"}</span>
                    </div>
                </Link>
        
            
                <Link to="/orders">
                    <div className="header__option">
                        <span className="header__optionLineOne">Returns</span> 
                        <span className="header__optionLineTwo">& Orders</span>
                    </div>
                </Link>
                
               
                
                <div className="header__option">
                    <span className="header__optionLineOne">Your</span>
                    <span className="header__optionLineTwo">Prime</span>
                </div>

                <Link to="/checkout">
                    <div className="header__optionBasket">
                        <ShoppingCartOutlinedIcon />
                        <span className="header__optionLineTwo header__basketCount">{basket?.length}</span>
                    </div>
                </Link>
                

            </div>
            
        </div>
    )
}

export default Header;
