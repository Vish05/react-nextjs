import { Fragment } from "react";
import { useRouter } from "next/router";
import { getAllEvents } from "../../dumm-data";
import EventList from "../../components/events/event-list";
import EventSearch from "../../components/events/events-search";

function AllEventPage() {
  const events = getAllEvents();
  const router = useRouter();

  function findEventHandler(year, month) {
    const fullPath = `/events/${year}/${month}`;
    router.push(fullPath);
  }

  return (
    <Fragment>
      <EventSearch onSearch={findEventHandler} />
      <EventList items={events} />
    </Fragment>
  );
}

export default AllEventPage;
