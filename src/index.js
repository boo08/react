import React from 'react'
import * as ReactDOM from 'react-dom/client';
import { ApolloClient, InMemoryCache, ApolloProvider } from '@apollo/client';
import Launches from './pages/Launches';
import Missions from './pages/Missions';
import Rockets from './pages/Rockets';
import Ships from './pages/Ships';
import NoPage from './pages/NoPage';
import Launch from './pages/Launch';
import Mission from './pages/Mission';
import Rocket from './pages/Rocket';
import Ship from './pages/Ship';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ProfileComponent from './pages/ProfileComponent';

const client = new ApolloClient({
  uri: 'https://api.spacex.land/graphql/',
  cache: new InMemoryCache(),
});

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <ApolloProvider client={client}>
    <BrowserRouter>
      <Routes>
        <Route exact path="/" element={<Launches />} />
        <Route path="*" element={<NoPage />} />
        <Route path="missions" element={<Missions />} />
        <Route path="rockets" element={<Rockets />} />
        <Route path="ships" element={<Ships />} />
        <Route path="launch/:id" element={<Launch />} />
        <Route path="mission/:id" element={<Mission />} />
        <Route path="rocket/:id" element={<Rocket />} />
        <Route path="ship/:id" element={<Ship />} />
        <Route
          path='/u/:username/'
          element={<ProfileComponent />}
        />
      </Routes>
    </BrowserRouter>
  </ApolloProvider>,
);
