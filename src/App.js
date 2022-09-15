// import { useState } from "react";
import React from "react";
import {
  BrowserRouter,  
  Routes,
  Route,
} from 'react-router-dom';
import { createGlobalStyle } from 'styled-components';
import reset from 'styled-reset';

import Layout from "./components/Layout";
import Home from "./Home";
import AccentColor from "./article/goobyeIE/AccentColor";
import BackdropFilter from "./article/goobyeIE/BackdropFilter";
import BackgroundClip from "./article/goobyeIE/BackgroundClip";
import BlendMode from "./article/goobyeIE/BlendMode";
import ClipPath from "./article/goobyeIE/ClipPath";
import Filter from "./article/goobyeIE/Filter";
import LineClamp from "./article/goobyeIE/LineClamp";
import ScrollBehavior from "./article/goobyeIE/ScrollBehavior";

import Center from "./article/Layout/Center";
import ContainerQueries from "./article/Layout/ContainerQueries";
import Grid from "./article/Layout/Grid";

import NotFound from "./components/NotFound";

// リセットCSS
const GlobalStyle = createGlobalStyle`
  ${reset}
  :root {
    --size: 0;
    --inset-top: 0;
    --inset-right: 0;
    --inset-bottom: 0;
    --inset-left: 0;
  }
  html {
    font-size: 62.5%;
  }
  body {
    margin: 0;
  }
`

const App = () => {
  return (
    <BrowserRouter>
      <GlobalStyle />
      <Layout>
        <Routes>
          <Route path="*" element={<NotFound />} />
          <Route path="/" element={<Home />} />
          <Route path="AccentColor" element={<AccentColor />} />
          <Route path="BackdropFilter" element={<BackdropFilter />} />
          <Route path="BackgroundClip" element={<BackgroundClip />} />
          <Route path="BlendMode" element={<BlendMode />} />
          <Route path="ClipPath" element={<ClipPath />} />
          <Route path="Filter" element={<Filter />} />
          <Route path="LineClamp" element={<LineClamp />} />
          <Route path="ScrollBehavior" element={<ScrollBehavior />} />
          <Route path="Center" element={<Center />} />
          <Route path="ContainerQueries" element={<ContainerQueries />} />
          <Route path="Grid" element={<Grid />} />
        </Routes>
      </Layout>
    </BrowserRouter>
  );
}

export default App;
