import React from 'react';
import BackgroundImage from '../../../IMG/LandingPageBackGround.png';

function Body() {

  const getStartedOnClick = () => {
    alert('Get Started button clicked!');
  }

  return (
      <div
        className={`flex flex-col items-center pt-10 min-h-screen bg-cover bg-center`}
        style={{ backgroundImage: `url(${BackgroundImage.src})` }}
      >
        <div className={`text-center text-[#526A59]`}>
          <h1 className={`text-4xl font-bold mb-4`}>Welcome to EvalNest</h1>
          <p className={`text-lg mb-4 text-black rounded-lg p-1`}>
            Your platform for efficient evaluations
          </p>
          <button
            className={`bg-green-700 hover:bg-green-800 text-white font-bold py-2 px-4 rounded`}
            onClick={getStartedOnClick}
          >
            Get Started
          </button>
        </div>
      </div>
  );
}

export default Body;
