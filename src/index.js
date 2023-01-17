import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
//import Snowfall from 'react-snowfall';
//import snowLogo from './images/snow.png';

//const snowFlake = document.createElement('img');
//snowFlake.src = snowLogo; 
//const images = [snowFlake];

const root = ReactDOM.createRoot(document.getElementById('root'));
const App = React.lazy(() => import('./App'));
root.render(
  <React.StrictMode>
    {/*<Snowfall
    style={{
      position: 'fixed',
      top: 0,
      left: 0,
      width: '100vw',
      height: '100vh',
      zIndex: 9999,
    }} 
    snowflakeCount={35}
    radius={[10, 20]}
    speed={[0.5 , 2.5]}
    wind={[-0.5, 2]}
    images={images}
    rotationSpeed={[-1, 1]}
  />*/}
    <React.Suspense fallback={
      <div className='cargandoprograma'>
        <div className="spinner">
            <div className="dot1"></div>
            <div className="dot2"></div>
        </div>
      </div>
    }>
      <App />
    </React.Suspense>
  </React.StrictMode>
);