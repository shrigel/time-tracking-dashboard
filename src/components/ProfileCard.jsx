import jeremyImg from '../assets/images/image-jeremy.png';

function ProfileCard({ timeFrame, setTimeFrame }) {
    return (
        <>
            <section className="profile-card">
                <div className="profile-info">
                    <img src={jeremyImg} alt="profile picture" />
                    <div className="profile-text">
                        <span>Report for</span>
                        <span className="profile-name">Jeremy Robson</span>
                    </div>
                </div>
                <div className="time-frame">
                    <button className={timeFrame === 'daily' ? 'active' : ''} onClick={() => setTimeFrame('daily')}>Daily</button>
                    <button className={timeFrame === 'weekly' ? 'active' : ''} onClick={() => setTimeFrame('weekly')}>Weekly</button>
                    <button className={timeFrame === 'monthly' ? 'active' : ''} onClick={() => setTimeFrame('monthly')}>Monthly</button>
                </div>
            </section>
        </>
    )
}

export default ProfileCard;