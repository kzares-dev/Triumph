import React from 'react';
import Heatmap from 'react-calendar-heatmap';
import { subYears, isBefore, isSameDay, addDays } from 'date-fns';


const generateHeatmapValues = (startDate, endDate) => {
    const values = [];

    let currentDate = startDate;
    while (isBefore(currentDate, endDate) || isSameDay(currentDate, endDate)) {
        const count = Math.random() * 4;

        values.push({ date: currentDate, count: Math.round(count) });

        currentDate = addDays(currentDate, 1);
    }

    return values;
};


const RandomCalendar = () => {
    const startDate = subYears(new Date(), 1);
    const endDate = new Date();

    return (
        <div>
            <Heatmap
                startDate={startDate}
                endDate={endDate}
                values={generateHeatmapValues(startDate, endDate)}
                gutterSize={3.5}
                classForValue={(item) => {
                    let clampedCount = 0;

                    if (item !== null) {
                        clampedCount = Math.max(item.count, 0);
                        clampedCount = Math.min(item.count, 4);
                    }

                    return `scale-${clampedCount}`;
                }}
                showWeekdayLabels
            />
        </div>
        );
};

export default RandomCalendar;
