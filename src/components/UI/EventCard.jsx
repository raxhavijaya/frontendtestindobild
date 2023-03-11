import React from "react";
import "../../styles/event-card.css";
import { Col } from "reactstrap";
import events from "../../assets/data/events";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

const EventCard = () => {
  return (
    <>
      {events.map(({ imgUrl, eventName, location, date, status }, id) => {
        return (
          <Col lg="4" md="6" className="mb-4 gap-3" key={id}>
            <Link to="/events/01">
            <div className="events__item card">
              <div className="event__header">
                <motion.img whileHover={{scale:1.1}} src={imgUrl} alt="event" className="event__img" />
              </div>
              <div className="event__shortdesc">
                <h3 className="event__name">{eventName}</h3>
                <p className="event__date">{date}</p>
                <p className="event__location">{location}</p>
              </div>
              <div className="like__wrapper">
                <img src={status} alt="status" />
              </div>
            </div>
            </Link>
          </Col>
        );
      })}
    </>
  );
};

export default EventCard;
