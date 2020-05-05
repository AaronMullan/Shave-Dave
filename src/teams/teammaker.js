import { useState, useEffect } from "react";

function TeamMaker() {
  const [isLoaded, setIsLoaded] = useState(false);
  const [scores, setScores] = useState([]);
  useEffect(() => {
    fetch("https://sheets.googleapis.com/v4/spreadsheets/1aUpL55gR8X3l6X5Ucjx5BTiN6pPunnZW0T8YqPjd3Jc/values/Sheet1!C2:J3?key=AIzaSyBgawbsVXzM8xSh4leGzfSTeNOhQjyzCMs")
      .then(res => res.json())
      .then(
        (result) => {
          setIsLoaded(true);
          setScores(result.values);
        },
      )
      
      const teams = {
        monkeytail: {
          image: 'assets/ronswanson.png',
          href: 'https://www.bmorerestaurantrelief.org/donate',
          dollars: '15'
        },
        lemmy: {
          image: 'assets/Lemmy.png',
          href: 'https://www.bmorerestaurantrelief.org/donate',
          dollars: '27'
        },
        cleanshaven: {
          image: 'assets/cleanshaven.png',
          href: 'https://www.bmorerestaurantrelief.org/donate',
          dollars: '1500'
        },
        blankbeard: {
          image: 'assets/blankbeard.jpeg',
          href: 'https://www.bmorerestaurantrelief.org/donate',
          dollars: '5'
        }
      }
      return { teams };
    }, [])
}
export default TeamMaker;