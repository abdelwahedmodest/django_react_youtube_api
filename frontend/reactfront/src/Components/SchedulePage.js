import React, { useState } from 'react';
import Calendar from 'react-calendar';
import './SchedulePage.css'; // Assurez-vous d'importer votre fichier CSS

const SchedulePage = () => {
	const [date, setDate] = useState(new Date());
	const [schedule, setSchedule] = useState([]);

	const handleDateChange = (newDate) => {
    	setDate(newDate);
    	fetchSchedule(newDate); // Remplacez ceci par une fonction pour récupérer le schedule
	};

	const fetchSchedule = (date) => {
    	// Exemple de schedule pour chaque jour. Remplacez ceci par une API si nécessaire.
    	const exampleSchedule = Array.from({ length: 24 }, (_, i) => ({
        	hour: `${i}:00`,
        	task: `Task for ${i}:00`
    	}));
    	setSchedule(exampleSchedule);
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
