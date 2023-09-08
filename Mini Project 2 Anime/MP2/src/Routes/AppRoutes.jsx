import { Route,Routes } from "react-router-dom";
import Homepage from "../pages/homePage";
import Browse from "../pages/browse";
import Loginpage from "../pages/loginpage";



function AppRoutes(props) {

    return (
    <Routes>
    {/* index matches on default/home URL: / */}
    <Route index element={<Homepage {...props} />} />


    <Route path="/browse" element = {<Browse {...props} />} />
    <Route path="/Loginpage" element = {<Loginpage {...props} />} />

    
    {/* special route to handle if none of the above match */}
    {/* <Route path="*" element={<PageNotFound />} /> */}
    </Routes>
    )
    }
    
    export default AppRoutes;
