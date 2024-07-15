import React from 'react'
import SearchIcon from '@mui/icons-material/Search';
import { Badge, IconButton } from '@mui/material';
import { Avatar } from '@mui/material';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import './Navbar.css'
export const Navbar = () => {
  return (
    <div className="px-5 z-50 py-[.8rem] bg-[#0697363b] lg:px-20 flex justify-between">
      <div className="lg:mr-10 cursor-pointer flex items-center space-x-4">
        <li className="logo font-semibold text-gray-300 text-2xl">
          Spring Food.
        </li>
        
      </div>
      <div className="flex items-center space-x-4">
      <div className="btnSearch">
        <IconButton>
          <SearchIcon sx={{ fontSize: "1.5rem" }} />
        </IconButton>
      </div>
      <div className='avatar'>
      <IconButton>
          <Avatar sx={{ bgcolor: "white" }} >
            S
          </Avatar>

        </IconButton>
      </div>
      <div className="btnCart">
        <IconButton>
            <Badge badgeContent={4} color="secondary">
            <ShoppingCartIcon sx={{ fontSize: "1.5rem" }} />
          </Badge>
        </IconButton>
      </div>
     </div>
    </div>
  );
}