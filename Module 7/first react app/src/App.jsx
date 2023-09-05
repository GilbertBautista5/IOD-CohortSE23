import './App.css'
import NavBar from './components/NavBar'
import NavbarBootstrap from './components/NavbarBootstrap'
import NavbarMUI from './components/NavbarMUI'
import { ImageSizeProvider } from './context/ImageSizeContext'
import MyThemeProvider from './context/MyThemeContext'
import { UserProvider } from './context/UserContext'
import AppRoutes from './routes/AppRoutes'

import { ThemeProvider } from "@mui/material/styles";
import { tealTheme } from "./themes/tealTheme";
import { purpleTheme } from './themes/purpleTheme'

//import 'bootstrap/dist/css/bootstrap.min.css'; // required if using bootstrap components

function App() {

  return (
    <>
      <UserProvider> {/* provide context at a top level to all nested children below */}
       
          <ImageSizeProvider>

            <NavbarMUI />
            <AppRoutes />          

          </ImageSizeProvider>
      </UserProvider>
    </>
  )
}

export default App