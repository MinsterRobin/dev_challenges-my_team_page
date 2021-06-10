import React from 'react';
import ReactDOM from 'react-dom';

import TeamPage from './pages/Team'
import GlobalStyles from "./components/GlobalStyles";

ReactDOM.render(
    <React.StrictMode>
        <GlobalStyles>
            <TeamPage />
        </GlobalStyles>
    </React.StrictMode>,
    document.getElementById('root')
);