import EventDashboard from "../../features/events/eventDashboard/EventDashboard";
import NavBar from "../../features/nav/NavBar";
import {Container} from "semantic-ui-react";
import {useState} from "react";

function App() {
    const [formOpen, setFormOpen] = useState(false);
    const [selectedEvent, setSelectedEvent] = useState(null);

    function handleSelectEvent(event) {
        setSelectedEvent(event)
        setFormOpen(true);
    }

    function handleCreateFormOpen() {
        setSelectedEvent(null);
        setFormOpen(true);
    }

    return (
        <>
            <h1>Re-vents123</h1>
            <NavBar setFormOpen={handleCreateFormOpen}/>

            <Container className="main">
                <EventDashboard formOpen={formOpen} setFormOpen={setFormOpen} selectEvent={handleSelectEvent} selectedEvent={selectedEvent}/>
            </Container>

        </>
    );
}

export default App;
