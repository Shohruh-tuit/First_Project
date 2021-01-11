import "./App.css";
import React from "react";
import News from "./components/News/News";
import Music from "./components/Music/Music";
import Header from "./components/Header/Header";
import Navbar from "./components/Navbar/Navbar";
import Profile from "./components/Profile/Profile";
import Dialogs from "./components/Dialogs/Dialogs";
import Settings from "./components/Settings/Settings";
import { BrowserRouter, Route } from "react-router-dom";
import Footer from "./components/Footer/Footer";
import { NavLink } from "react-router-dom";

const App = props => {
  return (
    <BrowserRouter>
      <div className="app-wrapper">
        <Header />
        <Navbar />
        <div className="app-wrapper-content">
          <Route
            path="/dialogs"
            render={() => <Dialogs state={props.state.dialogsPage} />}
          />
          <Route
            path="/profile"
            render={() => <Profile state={props.state.profilePage} />}
          />
          <Route path="/news" render={() => <News />} />
          <Route
            path="/music"
            render={() => (
              <Music
                musicNames={props.state.musicPage.musicNames}
                musicAuthor={props.state.musicPage.musicAuthor}
              />
            )}
          />
          <Route path="/settings" render={() => <Settings />} />
        </div>
        <Footer />
      </div>
    </BrowserRouter>
  );
};

export default App;
