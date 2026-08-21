import { useState } from 'react'
import data from './data.json';
import './App.css'
import ProfileCard from './components/ProfileCard';
import ActivityCard from './components/ActivityCard';

function App() {
  const [timeFrame, setTimeFrame] = useState('weekly');

  return (
    <main className='dashboard-container'>
      <ProfileCard timeFrame={timeFrame} setTimeFrame={setTimeFrame} />

      {data.map((activity) => (
        <ActivityCard key={activity.title} activity={activity} timeFrame={timeFrame} />
      ))}
    </main>
  )
}

export default App
