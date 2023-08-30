import './App.css'
import ActivityFinder from './components/ActivityFinder'
import ClockDisplay from './components/Clock'
// import PostListReducer from './components/PostListReducer'
import ReducerCounter from './components/ReducerCounter'
import RefCounter from './components/RefCounter'
import SubscribeForm from './components/SubscribeForm'
import VideoPlayer from './components/VideoPlayer'
import LoginForm from './components/loginForm'
import { MyThemeContext } from './context/MyThemeContext'
import { UserProvider } from './context/userContext'

function App() {

  return (
    <>
    <UserProvider>
      <MyThemeContext>

      <LoginForm/>

      <ClockDisplay />

      <ActivityFinder />

      <RefCounter />

      <VideoPlayer />

      <ReducerCounter />

      {/* <PostListReducer /> */}

      <SubscribeForm />
      
      </MyThemeContext>
    </UserProvider>
    </>
  )
}

export default App