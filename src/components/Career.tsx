import "./styles/Career.css";

const Career = () => {
  return (
    <div className="career-section section-container">
      <div className="career-container">
        <h2>
          My career <span>&</span>
          <br />
          experience
        </h2>
        <div className="career-info">
          <div className="career-timeline">
            <div className="career-dot"></div>
          </div>

          {/* Education 1 */}
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>Diploma</h4>
                <h5>Directorate of Technical Education</h5>
              </div>
              <h3>2017 – 2019</h3>
            </div>
            <p>
              Completed Diploma under the Directorate of Technical Education,
              building a strong foundation in technical and engineering concepts.
            </p>
          </div>

          {/* Education 2 */}
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>B.Com</h4>
                <h5>Calicut University</h5>
              </div>
              <h3>2019 – 2022</h3>
            </div>
            <p>
              Graduated with a Bachelor of Commerce from Calicut University,
              developing analytical and business management skills.
            </p>
          </div>

          {/* Job 1 */}
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>Full-Stack Developer</h4>
                <h5>EduMetrix Learning Solutions Pvt Ltd</h5>
              </div>
              <h3>Jul – Dec 2023</h3>
            </div>
            <p>
              Worked as a Full-Stack Developer, contributing to educational
              platforms and web solutions using modern JavaScript frameworks and
              backend technologies.
            </p>
          </div>

          {/* Job 2 - Current */}
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>Junior Developer</h4>
                <h5>Cloud System WLL</h5>
              </div>
              <h3>NOW</h3>
            </div>
            <p>
              Currently working as a Junior Developer at Cloud System WLL,
              Manjeri — building scalable web applications and APIs while
              growing expertise in full-stack development.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Career;
