import './GuidePage.css';
import React, {Component} from 'react';
import ReactDOM from 'react-dom/client';

import Guide from '../Components/Guide/Guide';

function GuidePage() {
    return (
    <div className="GuidePage">
      <div className="Guide">
        <Guide />
      </div>
    </div>
    );
}

export default GuidePage;