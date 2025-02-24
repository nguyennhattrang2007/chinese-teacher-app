// src/App.js
import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { AuthProvider } from "./context/AuthContext";
import Navbar from "./components/Navbar";
import PrivateRoute from "./components/PrivateRoute";
import Home from "./pages/Home";
import Introduction from "./pages/Introduction";
import Lessons from "./pages/Lessons";
import Schedule from "./pages/Schedule";
import ExamHomework from "./pages/ExamHomework";
import Login from "./pages/Login";
import GlobalStyle from "./globalStyles";
import Footer from "./components/Footer";

function App() {
  return (
    <AuthProvider>
      <Router>
        <GlobalStyle />
        <Navbar />
        <Routes>
          <Route path="/login" element={<Login />} />
          {/* Các route bên dưới được bảo vệ */}
          <Route
            path="/"
            element={
              <PrivateRoute>
                <Home />
              </PrivateRoute>
            }
          />
          <Route
            path="/introduction"
            element={
              <PrivateRoute>
                <Introduction />
              </PrivateRoute>
            }
          />
          <Route
            path="/lessons"
            element={
              <PrivateRoute>
                <Lessons />
              </PrivateRoute>
            }
          />
          <Route
            path="/schedule"
            element={
              <PrivateRoute>
                <Schedule />
              </PrivateRoute>
            }
          />
          <Route
            path="/exam-homework"
            element={
              <PrivateRoute>
                <ExamHomework />
              </PrivateRoute>
            }
          />
        </Routes>
      </Router>
      <Footer />
    </AuthProvider>
  );
}

export default App;
