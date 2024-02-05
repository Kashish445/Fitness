import React from 'react';
import './Friend.css';

const Friend = () => {
    const activities = [
        { name: "Jane", activity: "just set a new record in cycling: 30 km!", image: "https://nationaltoday.com/wp-content/uploads/2022/08/4568164-min-1200x834.jpg" },
        { name: "Mike", activity: "completed the 30-Day Running Streak Challenge!", image: "https://img.freepik.com/free-photo/low-angle-view-unrecognizable-muscular-build-man-preparing-lifting-barbell-health-club_637285-2497.jpg?size=626&ext=jpg&ga=GA1.1.1448711260.1706659200&semt=sph" },
        { name: "Anna", activity: "shared a new workout: 'Hill Sprints Interval'!", image: "https://www.financialexpress.com/wp-content/uploads/2022/10/workout.jpg?w=350" },
        { name: "John", activity: "just set a new record in running: 18 km!", image: "https://th.bing.com/th/id/R.ee280562fdf3a23a8de44003edcafd2e?rik=CZOjszo%2ffZKxmg&riu=http%3a%2f%2fwww.highreshdwallpapers.com%2fwp-content%2fuploads%2f2014%2f01%2fAthletic-Running-HD-Image.jpg&ehk=wRAGQ3TOW480q6hs8x7u8whibiJ%2bduPVlAKfqjhC%2blA%3d&risl=&pid=ImgRaw&r=0" },
        { name: "Mila", activity: "completed the 30-Day Running Streak Challenge!", image: "https://th.bing.com/th/id/R.2b896cd9104b766c409fd9a6fd0fb0a7?rik=hAhD7mizY78y5g&riu=http%3a%2f%2fwww.pixelstalk.net%2fwp-content%2fuploads%2f2016%2f07%2fHD-Running-Background.jpg&ehk=MwwuV0BpWFEGhzALwI103Lda5jWNZKoxbFN%2b6VRzPZk%3d&risl=1&pid=ImgRaw&r=0" },
        { name: "John", activity: "completed the 30-Day Running Streak Challenge!", image: "https://inspirepodiatry.com.au/wp-content/uploads/2017/04/inspirepodiatry.com_.au-albany-creek-home-page-top-fit-running-injuries.jpg" },
        { name: "Anna", activity: "just set a new record in swimming: 14 km!", image: "https://www.thoughtco.com/thmb/nC09nEP-VeUv8ZIX_68obWrMdEM=/1280x853/filters:fill(auto,1)/swimmer137682458-57bc48d83df78c8763ce3874.jpg" },
        {name: "Boni", activity: "just set a new milestone weightlift: 56kg!", image: "https://www.verywellfit.com/thmb/SjRh18DGj88wPMrhcv6Qd_9IX3I=/4608x3072/filters:fill(FFDB5D,1)/GettyImages-149909265-5680a9593df78ccc15a75891.jpg" }
      ];
    
      return (
        <div className="friend-activities-container">
          <h1>Friends Activities</h1>
          <div className="friend-activity-grid">
            {activities.map((friend, index) => (
              <div key={index} className="friend-card">
                <img src={friend.image} alt={friend.name} />
                <p>{friend.name}</p>
                <div>
                  <p>{friend.activity}</p>
                 
                </div>
              </div>
            ))}
          </div>
        </div>
      );
    };

export default Friend;
