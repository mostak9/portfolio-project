import axios from "axios";
import { useEffect } from "react";
import { useState } from "react";
import { InfinitySpin } from  'react-loader-spinner'
import Route from "../Route/Route";
import { RiMenu3Fill } from 'react-icons/ri';
import { AiOutlineClose } from 'react-icons/ai';

const NavBar = () => {
  const [routes, setRoutes] = useState([]);
  const [loader, setLoader] = useState(true);
  const [open, setOpen] = useState(false);
  useEffect(() => {
    axios.get("navigation.json").then((data) => setRoutes(data.data));
    setLoader(false);
  }, []);

  return (
    <div>
        {/* spinner/ loader */}
        <div className={`flex justify-center items-center w-full h-screen ${loader || 'hidden'}`}>
        <InfinitySpin width='200' color="#4fa94d"/>
        </div>
        {/* navigation */}
        <div className="py-4 px-7 flex justify-between items-center">
            <div className="flex gap-3 items-center">
                <img src="https://i.ibb.co/MnYvpGv/short.jpg" alt="" className="w-14 h-14 rounded-full" />
                <span className="font-bold text-2xl uppercase hidden lg:block">Mostak Ahmed</span>
                <span className="font-bold text-2xl uppercase lg:hidden">Mostak</span>
            </div>
            <div>
                <div className="lg:hidden" onClick={() => setOpen(!open)}>
                    {
                        open ? <AiOutlineClose  className="font-bold text-2xl"></AiOutlineClose>
                        : <RiMenu3Fill className="font-bold text-2xl"></RiMenu3Fill>
                    }
                    
                </div>
                <ul className={`lg:flex absolute right-0 duration-1000 bg-black lg:bg-base-100 px-2 rounded-md lg:static text-right ${
                    open ? 'top-16' : '-top-96'
                }`}>
                    {
                        routes.map((route, idx) => <Route key={idx} route={route}></Route>)
                    }
                </ul>
            </div>
        </div>
    </div>
  );
};

export default NavBar;
