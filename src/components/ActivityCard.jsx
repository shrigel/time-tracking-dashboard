import elipsisIcon from "../assets/images/icon-ellipsis.svg";
import iconWork from '../assets/images/icon-work.svg';
import iconPlay from '../assets/images/icon-play.svg';
import iconStudy from '../assets/images/icon-study.svg';
import iconExercise from '../assets/images/icon-exercise.svg';
import iconSocial from '../assets/images/icon-social.svg';
import iconSelfCare from '../assets/images/icon-self-care.svg';

function ActivityCard({ activity, timeFrame }) {
    const categoryClass = activity.title.toLowerCase().replace(' ', '-');

    const icons = {
        Work: iconWork,
        Play: iconPlay,
        Study: iconStudy,
        Exercise: iconExercise,
        Social: iconSocial,
        'Self Care': iconSelfCare,
    };

    const previousLabels = {
        daily: 'Yesterday',
        weekly: 'Last Week',
        monthly: 'Last Month'
    }

    return (
        <>
            <section className={`activity-card ${categoryClass}`}>
                <div className="activity-banner">
                    <img src={icons[activity.title]} alt={`${activity.title} icon`} />
                </div>
                <div className="activity-content">
                    <div className="activity-header">
                        <span className="activity-title">{activity.title}</span>
                        <img src={elipsisIcon} alt="elipsis icon" />
                    </div>
                    <div className="activity-time">
                        <p>{activity.timeframes[timeFrame].current}hrs</p>
                        <p>{previousLabels[timeFrame]} - {activity.timeframes[timeFrame].previous}hrs</p>
                    </div>
                </div>
            </section>
        </>
    )
}

export default ActivityCard;