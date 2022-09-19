import { Fragment } from "react";
import { useRouter } from "next/router";
import { getFilteredEvents } from "../../dumm-data";

import EventList from "../../components/events/event-list";
import ResultTitle from "../../components/events/results-title";
import Button from "../../components/ui/button";
import ErrorAlert from "../../components/ui/error-alert";

function FilterEventPage() {
  const router = useRouter();

  const filterData = router.query.slug;
  if (!filterData) {
    return <p className="center">Loading...!!!</p>;
  }

  const filteredYear = filterData[0];
  const filteredMonth = filterData[1];

  const numYear = +filteredYear;
  const numMonth = +filteredMonth;

  if (
    isNaN(numYear) ||
    isNaN(numMonth) ||
    numYear > 2030 ||
    numYear < 2021 ||
    numMonth < 1 ||
    numMonth > 12
  ) {
    return (
      <Fragment>
        <ErrorAlert>
          <p className="center">Invalid Filter. Please adjust your value..!!</p>
        </ErrorAlert>
        <div className="center">
          <Button links="/event">Show All</Button>
        </div>
      </Fragment>
    );
  }

  const filteredEvents = getFilteredEvents({
    year: numYear,
    month: numMonth,
  });

  if (!filteredEvents || filteredEvents.length === 0) {
    return (
      <Fragment>
        <ErrorAlert>
          <p>No Event Found..!!!</p>
        </ErrorAlert>
        <div className="center">
          <Button links="/event">Show All</Button>
        </div>
      </Fragment>
    );
  }

  const humanReadableDate = new Date(numYear, numMonth - 1);

  return (
    <Fragment>
      <ResultTitle data={date} />
      <EventList items={filteredEvents} />
    </Fragment>
  );
}

export default FilterEventPage;
