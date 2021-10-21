import logo from "./logo.svg";
import "./App.css";
import Home from "./pages/home";
import SignIn from "./pages/login";
import MovieDetail from "./pages/movie-detail";
import { BrowserRouter, Route, Switch, Redirect } from "react-router-dom";
import Booking from "./pages/booking";
import Header from "./components/header";
function App() {
  return (
    <div>
      <BrowserRouter>
        <Header />
        {/* url : http://localhost:3000/sign-in */}
        <Switch>
          {/* http://localhost:3000/ */}
          <Route path="/" exact={true}>
            <Home />
          </Route>
          {/* http://localhost:3000/sign-in */}
          <Route path="/sign-in">
            <SignIn />
          </Route>
          <Route path="/movie-detail/:movieCode">
            <MovieDetail />
          </Route>
          <Route path="/booking/:maLichChieu">
            <Booking />
          </Route>
          {/* khi url :http://localhost:3000/home =>http://localhost:3000/home */}
          <Route path="/home">
            <Redirect to="/" />
          </Route>
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
