import React, { useState } from "react";
import { Container, Row, Col } from "reactstrap";
import DatePicker from "react-datepicker";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper";
import "swiper/css";
import "swiper/css/navigation";
import "react-datepicker/dist/react-datepicker.css";
import "../styles/home.css";
import EventsList from "../components/UI/EventsList";
import events from "../assets/data/events";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

const Home = () => {
  const [startDate, setStartDate] = useState(new Date());
    const [filterTerm, setFilterTerm] = useState('');
    const [selectedCategory, setSelectedCategory] = useState('');
  
    function handleFilterTermChange(event) {
      setFilterTerm(event.target.value);
    }
  
    function handleCategorySelectionChange(event) {
      setSelectedCategory(event.target.value);
    }
  
    function handleSubmit(event) {
      event.preventDefault();
      const filteredItems = events.filter(item => {
        if (selectedCategory && item.category !== selectedCategory) {
          return false;
        }
        if (!item.name.includes(filterTerm)) {
          return false;
        }
        return true;
      });
      console.log(filteredItems);
    }


  return (
    <>
      <section className="hero__section">
        <Container>
          <Row>
            <Col lg="4">
              <div className="search__event">
                <h3>Hey! Looking for an interesting event? Let us help you find it.</h3>
                
                <div>
                  
                  <label>First, choose a category that you want.</label>
                  <div className="filter">
                    <select  value={selectedCategory} onChange={handleCategorySelectionChange}>
                      <option className="default">
                        Category Event
                      </option>
                      <option value="education">Education</option>
                      <option value="esport">E-Sport</option>
                      <option value="business">Business</option>
                      <option value="art">Art</option>
                      <option value="music">Music</option>
                    </select>
                  </div>
                </div>
                <div>
                  <label>Where do you want to go?</label>
                  <div className="filter">
                    <i className="ri-search-line"></i>
                    <input type="text" placeholder="Search Location" />
                  </div>
                </div>
                <div>
                  <label>Fill up your free time!</label>
                  <div className="date">
                    <i className="ri-calendar-line"></i>
                    <DatePicker selected={startDate} onChange={(date) => setStartDate(date)} />
                  </div>
                </div>
                <span></span>
                <button>Let's Go!</button>
                
              </div>
            </Col>

            <Col lg="8">
              <div className="highlighted__events">
                <h3 className="title">Our Highlighted Event</h3>
                <div>
                  <Swiper spaceBetween={50} slidesPerView={2} navigation modules={[Navigation]} onSlideChange={() => console.log("slide change")} onSwiper={(swiper) => console.log(swiper)}>
                    {events.map(({ imgUrl, eventName, date, location, status }, id) => {
                      return (
                        <SwiperSlide className="events__item card" key={id}>
                          <Link to="/events/01">
                            <div className="event__header">
                              <motion.img whileHover={{scale:1.1}} src={imgUrl} alt="" className="event__img" />
                            </div>
                            <div className="event__shortdesc">
                              <h3 className="event__name">{eventName}</h3>
                              <p className="event__date">{date}</p>
                              <p className="event__location">{location}</p>
                            </div>
                            <div className="like__wrapper">
                              <img src={status} alt="status" />
                            </div>
                          </Link>
                        </SwiperSlide>
                      );
                    })}
                  </Swiper>
                </div>
              </div>
            </Col>
          </Row>
        </Container>
      </section>
      <section>
        <Container>
          <Row>
            <Col lg="12">
              <h3 className="upcoming__event mb-4">Upcoming Event</h3>
            </Col>
            <EventsList />
          </Row>
        </Container>
      </section>
    </>
  );
};

export default Home;
