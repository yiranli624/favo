import React, { useState } from "react";
import { Link } from "react-router-dom";
import ProgressRing from "../ProgressRing";
import "./User.scss";
import starImage from "../../Assets/star.png";
import userToggleButtonRight from "../../Assets/right-chevron.png";
import userToggleButtonLeft from "../../Assets/left-chevron.png";

const User = ({ info }) => {
  const { id, name, profilePicture, volunteeredHours, upcomingJobs, completedJobs } = info;
  const [userOpen, setUserOpen] = useState(true);

  let userSidebarClass = userOpen ? "user-open" : "user-closed";
  let userButtonClass = userOpen ? userToggleButtonLeft : userToggleButtonRight;
  let userToggleButtonClass = userOpen
    ? "user-toggle-button-open"
    : "user-toggle-button-closed";
  let userTransitionClass = userOpen
    ? "user-open-transition"
    : "user-close-transition";
  let componentsWrapperClass = userOpen
    ? "components-wrapper-open"
    : "components-wrapper-closed";

  return (
    <div data-testid="user-sidebar-element" className={componentsWrapperClass}>
      <section className={userSidebarClass} id={id}>
        <section
          className={`user-profile-heading-wrapper ${userTransitionClass}`}
        >
          <h1 className={`user-profile-heading ${userTransitionClass}`}>
            My Profile
          </h1>
        </section>
        <div
          className={`profile-picture-wrapper ${userTransitionClass}`}
        >
          <img className="profile-user-image" src={profilePicture}/>
        </div>
        <h3 className={`username ${userTransitionClass}`}>{name}</h3>
        <div className={`rating-wrapper ${userTransitionClass}`}>
          <img className="star-image" src={starImage} alt="star-icon" />
          <img className="star-image" src={starImage} alt="star-icon" />
          <img className="star-image" src={starImage} alt="star-icon" />
          <img className="star-image" src={starImage} alt="star-icon" />
          <img className="star-image" src={starImage} alt="star-icon" />
        </div>
        <div className={`section-titles ${userTransitionClass}`}>
          <p className={`sidebar-titles ${userTransitionClass}`}>
            Total Hours Volunteered
          </p>
          <hr className={`section-line ${userTransitionClass}`} />
        </div>
        <div className={userTransitionClass}>
          <ProgressRing 
            volunteeredHours={volunteeredHours}
            completedJobs={completedJobs}
          />
        </div>
        <div className={`section-titles ${userTransitionClass}`}>
          <p className="sidebar-titles">My Upcoming Jobs</p>
          <hr className={`section-line ${userTransitionClass}`} />
        </div>
        <div className={`upcoming-job-cards-wrapper ${userTransitionClass}`}>
          {upcomingJobs.map((job) => {
            return (
              <Link
                data-testid={`upcoming-${job.id}`}
                to={`/postings/${job.eventId}`}
                className={`upcoming-job-link-wrapper ${userTransitionClass}`}
                key={job.id}
              >
                <section key={job.id} className="upcoming-job-card">
                  <div className="event-info-wrapper">
                    <h3 className="job-event-main-detail">
                      {job.positionName}
                    </h3>
                    <h3 className="job-event-main-detail">{job.date}</h3>
                  </div>
                  <h4 className="job-event-name">{job.eventName}</h4>
                </section>
              </Link>
            );
          })}
        </div>
      </section>
      <button className={userToggleButtonClass}>
        <img
          className="glyph-icon-sidebar"
          src={userButtonClass}
          onClick={() => setUserOpen(!userOpen)}
          alt="user-sidebar-button-chevron"
        />
      </button>
      <div className="user-background-transition"></div>
    </div>
  );
};

export default User;
