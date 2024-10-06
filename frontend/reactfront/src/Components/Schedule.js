import React, { useState } from 'react';
import Calendar from 'react-calendar';
import axios from 'axios';
import './SchedulePage.css';

const SchedulePage = () => {
	const [date, setDate] = useState(new Date());
	const [schedule, setSchedule] = useState([]);

	const handleDateChange = (newDate) => {
    	setDate(newDate);
    	fetchSchedule(newDate);
    	logUserActivity(newDate); // Enregistrer l'activité de l'utilisateur
	};

	const fetchSchedule = (date) => {
    	const exampleSchedule = Array.from({ length: 24 }, (_, i) => ({
        	hour: `${i}:00`,
        	task: `Task for ${i}:00`
    	}));
    	setSchedule(exampleSchedule);
	};

	const logUserActivity = (selectedDate) => {
    	const activityData = {
        	user: 1, // Remplacez ceci par l'ID de l'utilisateur authentifié
        	selected_date: selectedDate.toISOString().split('T')[0], // Format YYYY-MM-DD
        	activity_details: `User selected date: ${selectedDate.toDateString()}`,
    	};

    	axios.post('/api/user-activity/', activityData)
        	.then(response => console.log(response.data))
        	.catch(error => console.error("There was an error logging the activity!", error));
	};

	return (
    	<div className="schedule-page">
        	<h1>Choose a Date</h1>
        	<Calendar
            	onChange={handleDateChange}
            	value={date}
            	className="calendar"
        	/>
        	<h2>Schedule for {date.toDateString()}</h2>
        	<ul className="schedule-list">
            	{schedule.map((item, index) => (
                	<li key={index}>
                    	{item.hour}: {item.task}
                	</li>
            	))}
        	</ul>
    	</div>
	);
};

export default SchedulePage;
