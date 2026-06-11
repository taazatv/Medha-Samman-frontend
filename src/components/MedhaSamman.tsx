import { Link } from "react-router-dom";
import "./MedhaSamman.css";

function MedhaSamman() {
  const comingSoon = (e: React.MouseEvent) => {
    e.preventDefault();
    alert("Registration Coming Soon!");
  };

  return (
    <section className="medha-section">
      <div className="medha-container">
        <div className="glow glow-1"></div>
        <div className="glow glow-2"></div>

        <div className="medha-header">
          <img
            src="/Medha-logo.png"
            alt="Medha Samman"
            className="medha-logo"
          />

          <div className="header-content">
            <span className="badge">
              🎓 Registration Open
            </span>

            <h2>Medha Samman 2026</h2>

            <p>
              Select your city and class to continue
              registration
            </p>
          </div>
        </div>

        <div className="events-grid">
          {/* LIVE CARD */}
          <Link
            to="/kolkata/class-12"
            className="event-card live-card"
          >
            <span className="live-badge">
              LIVE
            </span>

            <h3>Kolkata</h3>

            <p>Class 12 Registration Open</p>
          </Link>

          {/* COMING SOON CARDS */}

          <a
            href="#"
            onClick={comingSoon}
            className="event-card"
          >
            <h3>Kolkata</h3>
            <p>Class 10</p>
            <span className="soon">
              Coming Soon
            </span>
          </a>

          <a
            href="#"
            onClick={comingSoon}
            className="event-card"
          >
            <h3>Durgapur</h3>
            <p>Class 12 & Class 10</p>
            <span className="soon">
              Coming Soon
            </span>
          </a>

          <a
            href="#"
            onClick={comingSoon}
            className="event-card"
          >
            <h3>Siliguri</h3>
            <p>Class 12 & Class 10</p>
            <span className="soon">
              Coming Soon
            </span>
          </a>

          <a
            href="#"
            onClick={comingSoon}
            className="event-card"
          >
            <h3>Ranchi</h3>
            <p>Class 12 & Class 10</p>
            <span className="soon">
              Coming Soon
            </span>
          </a>

          <a
            href="#"
            onClick={comingSoon}
            className="event-card"
          >
            <h3>Patna</h3>
            <p>Class 12 & Class 10</p>
            <span className="soon">
              Coming Soon
            </span>
          </a>
        </div>
      </div>
    </section>
  );
}

export default MedhaSamman;