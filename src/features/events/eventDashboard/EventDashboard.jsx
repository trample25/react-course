import React, { useState } from "react";
import { Grid, GridColumn } from "semantic-ui-react";
import EventList from "./EventList";
import { sampleData } from "../../../app/api/sampleData";

export default function EventDashboard() {
  const [events, setEvents] = useState(sampleData);

  // function handleCreateEvent(event) {
  //   setEvents([...events, event]);
  // }
  //
  // function handleUpdateEvent(updatedEvent) {
  //     setEvents(events.map(evt => evt.id === updatedEvent.id ? updatedEvent : evt));
  //     selectEvent(null);
  //     setFormOpen(false);
  // }

  function handleDeleteEvent(eventId) {
      setEvents(events.filter(evt => evt.id !== eventId));

  }

  return (
    <Grid>
      <Grid.Column width={10}>
        <EventList events={events} deleteEvent={handleDeleteEvent}/>
      </Grid.Column>
      <GridColumn width={6}>
        <h2>Event filters</h2>
      </GridColumn>
    </Grid>
  );
}
