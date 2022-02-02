import { Form } from "components/Form";
import { WatchCard } from "components/WatchCard";
import { nanoid } from "nanoid";
import { format } from "date-fns";
import React, { useEffect, useState } from "react";
import "App.css";

const WatchesPage = () => {
  const [time, setTime] = useState(null);
  const [watches, setWatches] = useState([]);

  useEffect(() => {
    const idInterval = setInterval(() => setTime(new Date()), 1000);
    return () => clearInterval(idInterval);
  }, []);

  const handleSubmit = (e, dataValue) => {
    e.preventDefault();
    setWatches([...watches, { id: nanoid(), ...dataValue }]);
    e.currentTarget.reset();
  };

  const handleRemove = (idItem) => {
    setWatches(() => watches.filter(({ id }) => id !== idItem));
  };

  return (
    <div className="container">
      <Form handleSubmit={handleSubmit} />
      <div>
        <div className="local-watch">
          Местное время: {format(new Date(), "HH:mm:ss")}
        </div>
        <div className="container-watches">
          {watches.map(({ name, timeZone, id }) => (
            <WatchCard
              handleRemove={handleRemove}
              timeZone={timeZone}
              id={id}
              name={name}
              key={id}
            />
          ))}
        </div>
      </div>
    </div>
  );
};
export { WatchesPage };
