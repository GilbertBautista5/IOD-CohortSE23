import { Routes, Route } from "react-router-dom";
import Homepage from "../pages/Homepage";
import DashboardPage, {DashboardMessages, DashboardTasks} from "../pages/DashboardPage";
import AboutPage from "../pages/AboutPage";
import PageNotFound from "../pages/PageNotFound";
import PlaceList from "../components/PlaceList";
import ActivityFinder from "../components/ActivityFinder";
import PostListReducer from "../components/PostListReducer";
import PostsPage, { Post, PostList } from "../pages/PostsPage"
import ProtectedRoute from "./ProtectedRoute";
import Students from "../pages/StudentPage";
import StudentList from "../components/StudentList";
import StudentDetails from "../components/StudentDetails";
import MUIPage from "../pages/MUIPage";

// special component containing all the possible routes for this app
// any props passed into AppRoutes will also be passed onto
// child components using {...props}
function AppRoutes(props) {

  return (
    <Routes>
      {/* index matches on default/home URL: / */}
      <Route index element={<Homepage {...props} />} />

      {/* nested routes, matches on /dash/tasks etc */}
      <Route path="dash" element={<ProtectedRoute><DashboardPage {...props} /></ProtectedRoute>}>
        <Route path="messages" element={<DashboardMessages />} />
        <Route path="tasks" element={<DashboardTasks />} />
      </Route>

      <Route path="about" element={<AboutPage {...props} />} />
      <Route path="/places" element={<PlaceList {...props} />} />
      <Route path="/posts" element={<PostListReducer {...props} />} />
      <Route path="/activities" element={<ActivityFinder {...props} />} />\
      <Route path="/mui" element={<MUIPage {...props} />} />

      <Route path="/posts" element={<PostsPage {...props} />}>
        <Route index element={<PostList />} />
        {/* dynamic param taken from route, stored in variable called id */}
        <Route path=":id" element={<Post />} />
      </Route>

    <Route path='/students' element={<Students {...props} />}>
        <Route index element={<StudentList />} />
        <Route path=":studentid" element={<StudentDetails />}/>
    </Route>  

      <Route path="*" element={<PageNotFound />} />
    </Routes>
  );
}

export default AppRoutes;
// Name this file AppRoutes.jsx and store in new folder 'routes'