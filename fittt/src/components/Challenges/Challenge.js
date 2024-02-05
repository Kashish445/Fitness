// App.js
import React, { useState } from 'react';

const ChallengeBox = ({ id, imageSrc, challengeText }) => {
  const [accepted, setAccepted] = useState(false);

  const handleAcceptChallenge = () => {
    setAccepted(true);
  };

  return (
    <div className={`challenge-box ${accepted ? 'accepted' : ''}`} id={`challenge-${id}`}>
      <img src={imageSrc} alt="Challenge" />
      <p>{challengeText}</p>
      <button onClick={handleAcceptChallenge}>Accept Challenge</button>
      {accepted && <p>Challenge Accepted!</p>}
    </div>
  );
};

const App = () => {
  // Sample data for challenges
  const challenges = [
    { id: 1, imageSrc: 'https://th.bing.com/th/id/R.5897eeb53999aa07c2cbae8e219867da?rik=nqy6F%2fjFPtSf1g&riu=http%3a%2f%2fthinkhealth.priorityhealth.com%2fwp-content%2fuploads%2f2015%2f09%2fPriority-Health-Personal-Wellness-Benefits-of-Swimming-Group-1024x682.jpg&ehk=eFeQX6MZSn00ac9djud9lrdcyXz0xrS4gcIDwW1vzLs%3d&risl=&pid=ImgRaw&r=0', challengeText: 'Swim For 30 days' },
    { id: 2, imageSrc: 'https://th.bing.com/th/id/OIP.X1GqksOfV9xisvMX2N1bnwHaE8?rs=1&pid=ImgDetMain', challengeText: 'Jogging 30 days Challenge' },
    { id: 3, imageSrc: 'https://post.greatist.com/wp-content/uploads/2020/01/Runner-training-on-running-track-1200x628-facebook.jpg', challengeText: 'Running 30 days Challenge' },
    { id: 4, imageSrc: 'https://th.bing.com/th/id/OIP.se9r7zl-gLM-DqLEG1208AHaE8?rs=1&pid=ImgDetMain', challengeText: 'Walking 30 days Challenge' },
    { id: 5, imageSrc: 'https://img.washingtonpost.com/rw/2010-2019/WashingtonPost/2015/09/27/Sports/Images/490333262.jpg?uuid=il_vsmVjEeWDJaQrWkWbHg', challengeText: 'Cycling 30 days Challenge' },
    { id: 6, imageSrc: 'https://1.bp.blogspot.com/-oqGhCr0i5w4/XobVWImaANI/AAAAAAAAAXI/cWTG3CD40lI2ByMrPPj96dxJEsbWPSOFACLcBGAsYHQ/s1600/71K9GxKlOCL._AC_SL1200_.jpg', challengeText: 'Skipping 30 days Challenge' },
    // Add more challenges as needed
  ];
  return (
    <div id="app-container" style={{ textAlign: 'center', margin: '20px', backgroundColor:'black' }}>

      <h1>Make an Outh!</h1>
      <div
        style={{
          display: 'flex',
          flexWrap: 'wrap',
          justifyContent: 'space-between',
        }}
      >
        {challenges.map((challenge) => (
          <ChallengeBox
            key={challenge.id}
            id={challenge.id}
            imageSrc={challenge.imageSrc}
            challengeText={challenge.challengeText}
          />
        ))}
      </div>
      <style>
        {`
          
          .challenge-box {
            padding: 20px;
            margin: 10px auto; /* Center the box horizontally */
            text-align: center;
            width: 30%;
            height: 400px;
            box-shadow: 0 0 10px rgba(0, 0, 0, 0.1); /* Add a subtle shadow effect */
            border: 2px solid #21D4FD;
            border-radius: 15px;
            font-size: 20px;
            background-color: #fff;
            margin-bottom: 20px;
            
            transition: background-color 0.3s ease; /* Smooth transition effect */
          
            /* Add hover effect */
            &:hover {
              background-image: linear-gradient(220.55deg, #FFADF7 0%, #B1FF96 100%);
 /* Change to the desired hover color */
            }
          }
          
          

          .challenge-box img {
            max-width: 400px;
            height: 300px;
          }

          .accepted {
            background-image: linear-gradient(180deg, #FFB7B7 0%, #727272 100%), radial-gradient(60.91% 100% at 50% 0%, #FFD1D1 0%, #260000 100%), linear-gradient(238.72deg, #FFDDDD 0%, #720066 100%), linear-gradient(127.43deg, #00FFFF 0%, #FF4444 100%), radial-gradient(100.22% 100% at 70.57% 0%, #FF0000 0%, #00FFE0 100%), linear-gradient(127.43deg, #B7D500 0%, #3300FF 100%);
background-blend-mode: screen, overlay, hard-light, color-burn, color-dodge, normal;
 /* Example color for accepted challenges */
          }
        `}
      </style>
    </div>
  );
};

export default App;


 