import eventImg01 from "../images/event-01.png";
import eventImg02 from "../images/event-02.png";
import eventImg03 from "../images/event-03.png";
import eventImg04 from "../images/event-04.png";
import eventImg05 from "../images/event-05.png";
import eventImg06 from "../images/event-06.png";
import eventImg07 from "../images/event-07.png";
import eventImg08 from "../images/event-08.png";
import eventImg09 from "../images/event-09.png";
import likeon from "../images/likeon.png";
import likeoff from "../images/likeoff.png";

const events = [
  {
    id: "01",
    eventName: "Coffee Journey 2019",
    imgUrl: eventImg01,
    category: "business",
    location: "Indobild, Blugreen Office SBI, 8th Floor",
    date: "1 Aug 2019 - 3 Aug 2019 | 11:00 - 17:00",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio nostrum accusantium iste, voluptas cumque provident! Consequatur officiis animi rem tempore voluptate cumque hic similique aperiam ut consectetur distinctio repudiandae quia quam quos, quas illo, iusto, necessitatibus odio veniam exercitationem quis voluptatibus debitis laboriosam! Esse debitis obcaecati blanditiis at impedit quibusdam!",
    status: likeon,
  },
  {
    id: "02",
    eventName: "ESL Indonesia Championship Season 2 - Dota 2 Finals",
    imgUrl: eventImg02,
    category: "esport",
    location: "Tennis Indoor Stadium, Jl. Pintu Satu Senaya…",
    date: "Sun, 15 Sep 2019 | 10:00 AM - 08:00 PM WIB",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio nostrum accusantium iste, voluptas cumque provident! Consequatur officiis animi rem tempore voluptate cumque hic similique aperiam ut consectetur distinctio repudiandae quia quam quos, quas illo, iusto, necessitatibus odio veniam exercitationem quis voluptatibus debitis laboriosam! Esse debitis obcaecati blanditiis at impedit quibusdam!",
    status: likeoff,
  },
  {
    id: "03",
    eventName: "Binance Super Meetup Indonesia",
    imgUrl: eventImg03,
    category: "business",
    location: "Sheraton Grand Jakarta Gandaria City Hotel…",
    date: "Sat, 14 Sep 2019 | 04:00 PM - 06:00 PM WIB",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio nostrum accusantium iste, voluptas cumque provident! Consequatur officiis animi rem tempore voluptate cumque hic similique aperiam ut consectetur distinctio repudiandae quia quam quos, quas illo, iusto, necessitatibus odio veniam exercitationem quis voluptatibus debitis laboriosam! Esse debitis obcaecati blanditiis at impedit quibusdam!",
    status: likeoff,
  },
  {
    id: "04",
    eventName: "Indonesia-Korea Conference 2019",
    imgUrl: eventImg04,
    category: "business",
    location: "Soehanna Hall, Kec. Kby. Baru, DKI Jakarta",
    date: "Wed, 18 Sep 2019 | 08:00 AM - 05:00 AM WIB",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio nostrum accusantium iste, voluptas cumque provident! Consequatur officiis animi rem tempore voluptate cumque hic similique aperiam ut consectetur distinctio repudiandae quia quam quos, quas illo, iusto, necessitatibus odio veniam exercitationem quis voluptatibus debitis laboriosam! Esse debitis obcaecati blanditiis at impedit quibusdam!",
    status: likeon,
  },
  {
    id: "05",
    eventName: "The 6th International Young Investors Award",
    imgUrl: eventImg05,
    category: "business",
    location: "Taman Mini Indonesia Indah, Jl. Raya Taman…",
    date: "9 Oct 2019 - 12 Oct 2019 | 08:00 PM WIB",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio nostrum accusantium iste, voluptas cumque provident! Consequatur officiis animi rem tempore voluptate cumque hic similique aperiam ut consectetur distinctio repudiandae quia quam quos, quas illo, iusto, necessitatibus odio veniam exercitationem quis voluptatibus debitis laboriosam! Esse debitis obcaecati blanditiis at impedit quibusdam!",
    status: likeon,
  },
  {
    id: "06",
    eventName: "Opera at the Ballpark General Admission",
    imgUrl: eventImg06,
    category: "art",
    location: "Oracle Park, 24 Willie Mays Plaza, San Fransis…",
    date: "Sat, 21 Sep 2019 | 7:30 PM - 10:30 PM PDT",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio nostrum accusantium iste, voluptas cumque provident! Consequatur officiis animi rem tempore voluptate cumque hic similique aperiam ut consectetur distinctio repudiandae quia quam quos, quas illo, iusto, necessitatibus odio veniam exercitationem quis voluptatibus debitis laboriosam! Esse debitis obcaecati blanditiis at impedit quibusdam!",
    status: likeoff,
  },
  {
    id: "07",
    eventName: "PLANET HOME 2019 - VILLAGE",
    imgUrl: eventImg07,
    category: "education",
    location: "Palace of Fine Arts, 3601 Lyon Street, San Fra…",
    date: "13 Sep 2019 - 15 Sep 2019 | 05:00 PM PDT",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio nostrum accusantium iste, voluptas cumque provident! Consequatur officiis animi rem tempore voluptate cumque hic similique aperiam ut consectetur distinctio repudiandae quia quam quos, quas illo, iusto, necessitatibus odio veniam exercitationem quis voluptatibus debitis laboriosam! Esse debitis obcaecati blanditiis at impedit quibusdam!",
    status: likeoff,
  },
  {
    id: "08",
    eventName: "TEDxSanFransisco : Dare To Know",
    imgUrl: eventImg08,
    category: "education",
    location: "Herbst Theatre, 401 Van Ness Avenue, San Fr…",
    date: "Thu, 3 Oct 2019 | 09:00 - 05:30 PM PDT",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio nostrum accusantium iste, voluptas cumque provident! Consequatur officiis animi rem tempore voluptate cumque hic similique aperiam ut consectetur distinctio repudiandae quia quam quos, quas illo, iusto, necessitatibus odio veniam exercitationem quis voluptatibus debitis laboriosam! Esse debitis obcaecati blanditiis at impedit quibusdam!",
    status: likeoff,
  },
  {
    id: "09",
    eventName: "Morcheeba at The Midway",
    imgUrl: eventImg09,
    category: "music",
    location: "The Midway, 900 Marin St, San Fransisco",
    date: "11 Aug 2019 - 12 Aug 2019 | 09:00 & 14:00",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio nostrum accusantium iste, voluptas cumque provident! Consequatur officiis animi rem tempore voluptate cumque hic similique aperiam ut consectetur distinctio repudiandae quia quam quos, quas illo, iusto, necessitatibus odio veniam exercitationem quis voluptatibus debitis laboriosam! Esse debitis obcaecati blanditiis at impedit quibusdam!",
    status: likeon,
  },
];

export default events;
