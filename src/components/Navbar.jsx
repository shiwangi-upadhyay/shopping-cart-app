import {FaShoppingCart} from "react-icons/fa"
import { NavLink } from "react-router-dom";
import {useSelector } from "react-redux";

const Navbar = () => {
  const {cart} = useSelector((state)=> state);
  return (
    <div >
      <nav className="flex justify-between items-center h-20 max-w-6xl
       ">
      <NavLink to ="/">
        <div className="ml-5 flex">
        <img className="max-h-10" src="https://t3.ftcdn.net/jpg/03/99/53/44/360_F_399534445_zG1tMcAn0q7bCaPw2Lp5ZWiBiBgQYxvN.jpg" alt="" />
        </div>
      </NavLink>

      <div className="flex items-center font-medium text-slate-100 mr-5 space-x-6  ">

        <NavLink to ="/">
          <p>Home</p>
        </NavLink>
        
        <NavLink to="/cart">
          <div className="relative">
          <FaShoppingCart className="text-2xl"/>
          {
            cart.length > 0 && 
            <span className="absolute -top-1 -right-2 bg-green-600 text-xs h-5 w-5 flex justify-center items-center animate-bounce rounded-full  text-white">{cart.length}</span>
          }
          </div>
        </NavLink>
      </div>

      </nav>
    </div>
  )
};

export default Navbar;
