import { useState } from 'react'
import data from './assets/data/data.json';
import './css/App/App.css'
import ProfileCard from './components/ProfileCard';
import ActivityCard from './components/ActivityCard';
import Footer from './components/Footer';

function App() {
  const [timeFrame, setTimeFrame] = useState('weekly');

  return (
    <>
      <main className='dashboard-container'>
        <ProfileCard timeFrame={timeFrame} setTimeFrame={setTimeFrame} />

        {data.map((activity) => (
          <ActivityCard key={activity.title} activity={activity} timeFrame={timeFrame} />
        ))}

      </main>
      <Footer></Footer>
    </>
  )
}

export default App
