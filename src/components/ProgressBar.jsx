import React, { useState } from 'react'
import { CircularProgressbar, buildStyles } from 'react-circular-progressbar';
import VisibilitySensor from 'react-visibility-sensor';
import 'react-circular-progressbar/dist/styles.css';

const ProgressBar = ({ item, index }) => {
    const [showProgress, setShowProgress] = useState(true)
    return (
        <div key={index} className="bg-[#854aec] text-white rounded-3xl p-4">
            <VisibilitySensor active={showProgress}>
                {({ isVisible }) => {
                    const percentage = isVisible ? item.count : 0;
                    isVisible && setShowProgress(false)
                    return (
                        <CircularProgressbar
                            styles={buildStyles({
                                pathColor: `#4911a9`,
                                textColor: '#fff',
                                trailColor: '#fff',
                                backgroundColor: '#a87ef2',
                            })}
                            value={percentage}
                            text={item.count + "%"}
                            className="w-1/2 mx-auto text-xl font-bold"
                            background={true} />
                    )
                }}
            </VisibilitySensor>
            <h2 className="text-center font-semibold text-2xl uppercase mt-4">{item.title}</h2>
        </div>
    )
}

export default ProgressBar
