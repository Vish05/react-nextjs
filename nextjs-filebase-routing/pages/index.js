import { getFeaturedEvents } from "../dumm-data";
import EventList from "../components/events/event-list";
function HomePage() {
  const featureEvents = getFeaturedEvents();
  return (
    <div>
      <EventList items={featureEvents} />
    </div>
  );
}

export default HomePage;
