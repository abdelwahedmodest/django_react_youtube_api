import React, { useState, useEffect } from 'react';
import { Calendar, momentLocalizer } from 'react-big-calendar';
import moment from 'moment';
import 'react-big-calendar/lib/css/react-big-calendar.css';
import axios from 'axios';

const localizer = momentLocalizer(moment);

const AnnualCalendar = () => {
  const [events, setEvents] = useState([]);

  // Charger les actions à partir du backend Django
  useEffect(() => {
	axios.get('/api/actions/')
  	.then(response => {
    	const events = response.data.map(action => ({
      	id: action.id,
      	title: action.title,
      	start: new Date(action.start_date),
      	end: new Date(action.end_date),
      	description: action.description,
    	}));
    	setEvents(events);
  	})
  	.catch(error => console.error('Erreur lors du chargement des actions:', error));
  }, []);

  // Gérer la création d'une nouvelle action
  const handleSelectSlot = ({ start, end }) => {
	const title = window.prompt('Enter a new action title');
	if (title) {
  	const newEvent = {
    	title,
    	start,
    	end,
  	};
 	 
  	// Enregistrer la nouvelle action dans Django
  	axios.post('/api/actions/', newEvent)
    	.then(response => {
      	setEvents([...events, { ...newEvent, id: response.data.id }]);
    	})
    	.catch(error => console.error('Erreur lors de la création de l\'action:', error));
	}
  };

  // Gérer la modification/suppression d'une action
  const handleSelectEvent = event => {
	const newTitle = window.prompt('Edit action title', event.title);
	if (newTitle) {
  	axios.put(`/api/actions/${event.id}/`, { ...event, title: newTitle })
    	.then(() => {
      	setEvents(events.map(e => (e.id === event.id ? { ...e, title: newTitle } : e)));
    	})
    	.catch(error => console.error('Erreur lors de la modification de l\'action:', error));
	}
  };

  return (
	<div>
  	<h2>Calendrier Éditorial Annuel</h2>
  	<Calendar
    	localizer={localizer}
    	events={events}
    	startAccessor="start"
    	endAccessor="end"
    	selectable
    	onSelectSlot={handleSelectSlot}
    	onSelectEvent={handleSelectEvent}
    	style={{ height: 800 }}
  	/>
	</div>
  );
};

export default AnnualCalendar;
