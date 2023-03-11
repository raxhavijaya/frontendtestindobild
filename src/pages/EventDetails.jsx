/* eslint-disable react/jsx-no-target-blank */
import React from "react";
import { Container, Row, Col } from "reactstrap";
import eventimg from "../assets/images/event-01.png";
import pagination from "../assets/images/pagination.png";
import navigationright from "../assets/images/navigationright.png";
import navigationleft from "../assets/images/navigationleft.png";
import "../styles/event-details.css";
import logobai from "../assets/images/logo-bai.png";
import events from "../assets/data/events";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper";
import "swiper/css";
import "swiper/css/navigation";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

const EventDetails = () => {
  return (
    <>
      <section className="eventdetails__section">
        <div className="content__wrapper">
          <Container>
            <Row >
              <Col lg="8" className="p-0">
                <div className="img__wrapper">
                <img src={eventimg} alt="Event" />
                  <img src={pagination} alt="Pagination" className="pagination" />
                  <div className="navigation__wrapper">
                    <img src={navigationleft} alt="navleft" />
                    <img src={navigationright} alt="naright" />
                  </div>
                </div>
              </Col>
              <Col lg="4" className="event__detail">
                <div className="event__title">
                  <h3>Indonesia Aeropress Coffee and Barista Championship 2019</h3>
                  <p>By Indobild.com</p>
                </div>
                <div className="icon__title">
                  <i className="ri-share-fill"></i>
                  <i className="ri-heart-fill"></i>
                </div>
                <div className="btn">
                  <button>Book Ticket</button>
                </div>
              </Col>
              <Col lg="4">
                <div className="date__details">
                  <i class="ri-calendar-2-fill"></i>
                  <div>
                    <h3>Friday, 1 August 2019</h3>
                    <p>10:00 WIB - 18:00 WIB</p>
                  </div>
                </div>
              </Col>
              <Col lg="4">
                <div className="location__details">
                  <i class="ri-map-pin-2-fill"></i>
                  <div>
                    <h3>JIEXPO, Hall C</h3>
                    <p>RW.10, Pademangan Tim., Kec. Pademangan, Kota Jakarta Pusat, Daerah Khusus Ibukota Jakarta 14410</p>
                    <a href="https://maps.google.com" target="_blank">
                      Show Map
                    </a>
                  </div>
                </div>
              </Col>
              <Col lg="4">
                <div className="price__details">
                  <i className="ri-coupon-2-fill"></i>
                  <div>
                    <h3>Free</h3>
                    <p>Only 100 tickets left</p>
                  </div>
                </div>
              </Col>
              <span></span>
              <Col lg="12" className="mb-4">
                <div className="desc__event">
                  <h3>About The Event</h3>
                  <p>
                    Lorem ipsum, dolor sit amet consectetur adipisicing elit. Debitis repellat dolorem quos quae minus, sunt aperiam a iste fugiat facilis, saepe sapiente, deleniti pariatur dolores. Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum a aliquid ab earum neque recusandae impedit qui, incidunt facere. Ratione illum beatae exercitationem blanditiis dolor veritatis, esse odio sapiente voluptatem!
                    Est atque natus fuga repudiandae.{" "}
                  </p>
                  <button>Read more</button>
                </div>
              </Col>
              <span></span>
              <Col lg="12">
                <div className="organize__event">
                  <h3>Organize Profile</h3>
                  <div className="logo__wrapper">
                    <img src={logobai} alt="Logo BAI" />
                    <div className='organize'>
                      <h3>PT Buana Artha Indopratama</h3>
                      <p>
                       Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quae perspiciatis a enim quo repellendus eligendi veritatis explicabo ullam! Ratione debitis quos ullam mollitia repellat eum voluptatibus cupiditate totam nesciunt molestiae! Lorem ipsum dolor sit amet consectetur, adipisicing elit. Inventore accusamus vel vitae a distinctio qui adipisci quam reiciendis laudantium obcaecati...
                        <button>See more</button>
                      </p>
                      <button className="follow">Follow</button>
                    </div>
                    </div>
                </div>
              </Col>
              <Col lg="12">
                <div className="related__events">
                  <h3 className="title__section">Related Events</h3>
                  <div>
                    <Swiper spaceBetween={50} slidesPerView={3} navigation modules={[Navigation]} onSlideChange={() => console.log("slide change")} onSwiper={(swiper) => console.log(swiper)}>
                      {events.map(({ imgUrl, eventName, date, location, status }, id) => {
                        return (
                          <SwiperSlide className="events__item card" key={id}>
                            <Link to="/events/01">
                              <div className="event__header">
                                <motion.img whileHover={{ scale: 1.1 }} src={imgUrl} alt="" className="event__img" />
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
        </div>
      </section>
    </>
  );
};

export default EventDetails;
