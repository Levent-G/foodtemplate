import React from "react";
import { Link } from "react-router-dom";
import HomeIcon from '@mui/icons-material/Home';
import ColorLensIcon from '@mui/icons-material/ColorLens';
import ListIcon from '@mui/icons-material/List';
import SettingsSuggestIcon from '@mui/icons-material/SettingsSuggest';
import CreditCardIcon from '@mui/icons-material/CreditCard';
import AddIcon from '@mui/icons-material/Add';
import SettingsIcon from '@mui/icons-material/Settings';
const Navbar = (props) => {
   
  return (
    <div>
      <ul className=" pt-16">
        <Link to="/admin/home">
          <li>
            {props.props ? (<span>Home</span>):( <HomeIcon />)}
            
          </li>
        </Link>
        <Link to="/admin/fontandfamily">
          <li className="pt-4"> {props.props ? (<span>Sayfa Renk Yazı Tipi Ayarla</span>):( <ColorLensIcon />)}</li>
        </Link>
        <Link to="/admin/menucontrol">
          <li className="pt-4">{props.props ? (<span>Menu Control</span>):( <ListIcon />)}</li>
        </Link>
        <Link to="/admin/headercontrol">
          <li className="pt-4">{props.props ? (<span>Header Control</span>):( <SettingsSuggestIcon />)}</li>
        </Link>
        <Link to="/admin/cardcontrol">
          <li className="pt-4">{props.props ? (<span>Card Control</span>):( <CreditCardIcon />)}</li>
        </Link>
        <Link to="/admin/newitem">
          <li className="pt-4">{props.props ? (<span>Yeni Item Ekle</span>):( <AddIcon />)}</li>
        </Link>
        <Link to="/admin/footercontrol">
          <li className="pt-4">{props.props ? (<span>Footer Control</span>):( <SettingsIcon />)}</li>
        </Link>
      </ul>
    </div>
  );
};

export default Navbar;
