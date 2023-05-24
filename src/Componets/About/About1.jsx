import React from "react";
import "./index.css";
function About() {
  return (
    <>
      <div>
        <div>
          <h1 className="ourteam">Our Teams</h1>
        </div>

   <div className="team">
        <div className="ourEmpolyees">
          <div className="ourEmpolyeesImg">
            <img className="teamImg"
              src="https://media.istockphoto.com/id/1399565382/photo/young-happy-mixed-race-businessman-standing-with-his-arms-crossed-working-alone-in-an-office.jpg?b=1&s=170667a&w=0&k=20&c=ZAXJYLesh6gSd9huAgpy6rjpR4z-IFVH9MpxrKIXCrs="
              alt="male"
            />
          </div>
          <div className="ourEmpolyeesBio">
            <h3>RamaKrishna</h3> <br />
            <p> Founder </p>
          </div>
        </div>
    
        <div className="ourEmpolyees">
          <div className="ourEmpolyeesImg">
            <img className="teamImg"
              src="https://media.istockphoto.com/id/1368477551/photo/young-smiling-athlete-in-public-park.jpg?s=1024x1024&w=is&k=20&c=gfaptwMzTgxbgEUQK7YpA81qZHu5DYJu6aWcsMKPzPo="
              alt="male"
            />
          </div>
          <div className="ourEmpolyeesBio">
            <h3>AlluArjun</h3> <br />
            <p> CEO </p>
          </div>
        </div>
       
        <div className="ourEmpolyees">
          <div className="ourEmpolyeesImg">
            <img className="teamImg"
              src="https://media.istockphoto.com/id/1435745704/photo/portrait-of-smiling-mid-adult-businessman-standing-at-corporate-office.jpg?s=1024x1024&w=is&k=20&c=tJytJf_M1BGBHCc7QF7K43xzmyuWzlAzuz_2IVkPeII="
              alt="male"
            />
          </div>
          <div className="ourEmpolyeesBio">
            <h3>RajniKant</h3> <br />
            <p> Project Manager </p>
          </div>
        </div>
     
        <div className="ourEmpolyees">
          <div className="ourEmpolyeesImg">
            <img className="teamImg"
              src="https://media.istockphoto.com/id/1438224442/photo/portrait-of-mid-adult-man-during-a-group-therapy-at-mental-health-center.jpg?s=1024x1024&w=is&k=20&c=qApvBzPBwSSGuchELb9hx9-ha0KiZsJQfXwonsGgR7I="
              alt="male"
            />
          </div>
          <div className="ourEmpolyeesBio">
            <h3>ShriNivas</h3> <br />
            <p> HR </p>
          </div>
        </div>
        </div>
      </div>   
      <div> 

      <h1 className="aboutHanding"> About Us  </h1>
      </div>
      <div className="about"> 
        <div>
          <img
            className="abimg"
            src="https://images.pexels.com/photos/5474296/pexels-photo-5474296.jpeg?auto=compress&cs=tinysrgb&w=1600"
            alt="about our work"
          />
        </div>
        <div className="aboutContent">
          <span style={{ color: "red", fontSize: "40px" }}>
            {" "}
            About The Training Institute StartApps
          </span>
          <br /> Network was founded in 2014 with the mission of providing best
          quality Computer education to our students. Manyof students have
          already got trained professionally and made their career successfully
          in the past. PEN also organizes various events like Techno Minds,
          placement workshops, job fairs, and seminars to encourage student
          interaction and prepare them for job interviews and make them
          industry-ready. In a nutshell, PEN creates skilled IT professionals
          through a variety of courses delivered using the latest teaching
          methodology.Projection Education Network offers many computer courses
          in the field of Web Development and Designing ,.Net , Java,C++
          Multimedia & Animation, Software, Hardware and Networking, Mobile
          Technology, Spoken English, Data Entry and E-Typing Programs to
          fulfill the student with Computer literacy to avail better employment.
          The institute also offers vocational (summer camp) training programs
          for School children using Computers in Accounting, Multimedia,
          Hardware and Networking, Spoken English etc. The various vocational
          courses are offered through Certificate courses, Diploma courses,
          Advanced Diploma Courses and Masters Diploma courses in subjects
          related to the use of computers. These vocational courses are
          constantly updated according to the current trend in the IT industry.
          Training is conducted in comfortable and spacious labs equipped with
          computers which are constantly updated with the latest technology.
        </div>
      </div>
    </>
  );
}

export default About;
