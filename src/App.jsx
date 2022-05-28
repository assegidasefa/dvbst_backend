// import { makeStyles } from "@material-ui/core";
// import { purple } from "@material-ui/core/colors";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import React from "react";
import HomeScreen from "./pages/HomeScreen";
import Idea from "./components/Idea/Idea";

import Login from "./pages/Login";
import Navbar from "./components/Navbar";
import Register from "./pages/Register";
import RegisterByface from "./pages/RegisterByFace";
import VotingUnderway from "./pages/VotingUnderway";
import BeforeVoting from "./pages/BeforeVoting";
import Result from "./pages/Result";
import Ideas from "./pages/Ideas";
import VotePage from "./pages/VotePage";
import CandidateProfilePage from "./pages/candidateProfilePage";
import PrivateRoute from "./RouteHandler/privateRoute";
import Countdown from "./components/countdown";

// const useStyles = makeStyles({
//   root: {
//     background: purple,
//     color: "white",
//     height: 48,
//   },
// });

function App() {
  // const classes = useStyles();

  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/countdown" element={<Countdown />} />
        <Route
          path="/auth/Homepage"
          element={
            <PrivateRoute>
              <HomeScreen />
            </PrivateRoute>
          }
        />
        
        <Route path="/" element={<Register />} />
        <Route path="/auth/login" element={<Login />} />
        <Route
          path="/auth/candidate-profile"
          element={<CandidateProfilePage />}
        />
        <Route path="/auth/reg_face" element={<RegisterByface />} />
        {/* <Route path="/auth/Homepage" element={<HomeScreen />} /> */}
        <Route path="/auth/Voting_underway" element={<VotingUnderway />} />


        <Route path="/auth/idea" element={<Idea />} />
        
        <Route path="/auth/ideas" element={<Ideas />} />
        <Route path="/candidate_list" element={<VotePage />} />
        <Route path="/auth/Before_Voting" element={<BeforeVoting />} />
        <Route path="/Result" element={<Result />} />
        {/* <Login path="/auth/login" e lement={<Login />} /> */}
      </Routes>
    </Router>
  );
}

export default App;
