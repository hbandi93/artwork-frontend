import { Button } from "@blueprintjs/core";
import React, { useCallback, useContext, useEffect } from "react";
import { UserContext } from "./context/UserContext";
import Loader from "./Loader";
import Home from "./components/Home";
import GalleryPage from "./components/GalleryPage";
import Profile from "./components/Profile";
import ImageDetails from "./components/ImageDetails";
import Signup from "./components/Signup";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from "react-router-dom";

const Welcome = () => {
  const [userContext, setUserContext] = useContext(UserContext);

  const fetchUserDetails = useCallback(() => {
    fetch(process.env.REACT_APP_API_ENDPOINT + "users/me", {
      method: "GET",
      credentials: "include",
      // Pass authentication token as bearer token in header
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${userContext.token}`,
      },
    }).then(async (response) => {
      if (response.ok) {
        const data = await response.json();
        setUserContext((oldValues) => {
          return { ...oldValues, details: data };
        });
      } else {
        if (response.status === 401) {
          // Edge case: when the token has expired.
          // This could happen if the refreshToken calls have failed due to network error or
          // User has had the tab open from previous day and tries to click on the Fetch button
          window.location.reload();
        } else {
          setUserContext((oldValues) => {
            return { ...oldValues, details: null };
          });
        }
      }
    });
  }, [setUserContext, userContext.token]);

  useEffect(() => {
    // fetch only when user details are not present
    if (!userContext.details) {
      fetchUserDetails();
    }
  }, [userContext.details, fetchUserDetails]);

  const refetchHandler = () => {
    // set details to undefined so that spinner will be displayed and
    // fetchUserDetails will be invoked from useEffect
    setUserContext((oldValues) => {
      return { ...oldValues, details: undefined };
    });
  };

  const logoutHandler = () => {
    fetch(process.env.REACT_APP_API_ENDPOINT + "users/logout", {
      credentials: "include",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${userContext.token}`,
      },
    }).then(async (response) => {
      setUserContext((oldValues) => {
        return { ...oldValues, details: undefined, token: null };
      });
      window.localStorage.setItem("logout", Date.now());
    });
  };

  return userContext.details === null ? (
    "Error Loading User details"
  ) : !userContext.details ? (
    <Loader />
  ) : (
    <><Router>
          <div className="App">
            <header>
              <nav>
                <ul>
                  <li><Link to="/">Home</Link></li>
                  <li><Link to="/gallery">Gallery</Link></li>
                  <li><Link to="/profile">Saved artworks</Link></li>
                  <li><p>
            Welcome&nbsp;
            <strong>
              {userContext.details.firstName}
              {userContext.details.lastName &&
                " " + userContext.details.lastName}
            </strong>
            !
          </p></li>
                  <li><Button
            text="Logout"
            onClick={logoutHandler}
            
            intent="warning" /></li>
                </ul>
              </nav>
            </header>
            <Routes>
              <Route path="/" element={<Home />}></Route>
              <Route path="/gallery" element={<GalleryPage />}></Route>
              <Route path="/gallery/images/:id" element={<ImageDetails />} />
              <Route path="/profile" element={<Profile />}></Route>
              <Route path="/signup" element={<Signup />}></Route>
            </Routes>
            <footer>Copyright A|M|A</footer>
          </div>
        </Router></>

    
  );
};

export default Welcome;
