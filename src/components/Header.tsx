import { useState } from "react";
import reactLogo from "../assets/react.svg"
import { IoClose, IoSearchOutline } from "react-icons/io5";
import { FiShoppingBag, FiStar, FiUser } from "react-icons/fi";
import Container from "../ui/Container";
import { FaChevronCircleDown, FaChevronDown } from "react-icons/fa";

const bottomNavigation = [
    {title: "Home", link: "/"},
    {title: "Shop", link: "/product"},
    {title: "Cart", link: "/cart"},
    {title: "Orders", link: "/orders"},
    {title: "My Account", link: "/profile"},
    {title: "Blog", link: "/blog"},
]
const Header =()=>{
    const [searchText, setSearchText] = useState("")
    return(
        <div className="w-full bg-whiteText">
            {/*Search Bar*/}
            <div className="max-w-screen-xl mx-auto h-20 flex items-center justify-between px-4 lg:px-0">
                <img src={reactLogo} alt="" className="w-44"/>
                <div className="hidden md:inline-flex max-w-3xl w-full relative ">
                    <input type="text" placeholder="Recherche de produits" 
                    onChange={(e)=> setSearchText(e.target.value)}
                    value={searchText}
                    className="w-full flex-1 rounded-full text-gray-900 text-lg placeholder:text-base
                                placeholder:tracking-wide shadow-lg ring-1 ring-inset ring-gray-300
                                placeholder:text-gray-400 placeholder:font-normal focus:ring-1 focus:border-green-500 sm:text-sm px-4 py-2"/>

                    {searchText ? (
                        <IoClose
                            onClick={()=> setSearchText("")} 
                            className="absolute top-2.5 right-4 text-xl hover:text-green-500 cursor-pointer duration-200"/>
                    ):(<IoSearchOutline className="absolute top-2.5 right-4 text-xl"/>)
                    }

                </div>
                {/*Menu Bar*/}
                <div className="flex item-center gap-x-6 text-2xl">
                    <FiUser className="hover:text-greenText duration-200 cursor-pointer"/>

                    <div className="relative block">
                        <FiStar  className="hover:text-greenText duration-200 cursor-pointer"/>
                          <span className="inline-flex items-center
                             justify-center bg-redText text-whiteText absolute -top-1 -right-2
                             text-[9px] rounded-full w-4 h-4  
                          ">0</span>
                    </div>

                    <div className="relative block">
                        <FiShoppingBag  className="hover:text-greenText duration-200 cursor-pointer"/>
                          <span className="inline-flex items-center
                             justify-center bg-redText text-whiteText absolute -top-1 -right-2
                             text-[9px] rounded-full w-4 h-4  
                          ">0</span>
                    </div>
                </div>
            </div>

            <div className="w-full bg-darkText text-whiteText">
                <Container className="py-2 max-w-4xl flex items-center gap-5 justify-between">
                    <p className="flex items-center gap-1">Toutes les Category <FaChevronDown/></p>
                    {bottomNavigation.map(({title, link}) => <p key={title} className="uppercase hidden md:inline-flex 
                    text-sm font-semibold text-whiteText/90 hover:text-whiteText duration-200 relative overflow-hidden group cursor-pointer
                    ">
                        {title}
                    <span className="inline-flex w-full h-[1px] bg-greenText absolute bottom-0 left-0 transform -translate-x-[105%]
                                    group-hover:translate-x-0 duration-300
                    "/>
                    </p>)}
                </Container>
            </div>

        </div>
    )
}

export default Header;