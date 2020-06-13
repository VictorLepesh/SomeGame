import React from 'react';
import './index.css';

function App() {
    return (
        <div class="cube-wrapper">
            <div class="cube-box-area">
                <div class="cube-box cube-box-front"></div>
                <div class="cube-box cube-box-right"></div>
                <div class="cube-box cube-box-back"></div>
                <div class="cube-box cube-box-left"></div>
                <div class="cube-box cube-box-top"></div>
                <div class="cube-box cube-box-bottom"></div>
            </div>
        </div>
    )
}

export default App;