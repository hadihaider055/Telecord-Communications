import "./style.css";
import PatternService from "../../Assets/pattern-2.png";
const Services = () => {
  return (
    <section className="services__section">
      <img
        src={PatternService}
        alt="Pattern Service"
        className="PatternService"
      />
      <div className="services__div">
        <span className="services__span">
          <h4 className="services__title">Services</h4>
        </span>
        <h1 className="services__subtitle">
          Top-Notch Business <br />
          Communication Solutions
        </h1>
        <div className="services">
          <div className="email__marketing">
            <i className="far fa-envelope"></i>
            <p className="services__tag">Email Marketing and Communications</p>
          </div>
          <div className="email__marketing">
            <i className="far fa-chart-bar"></i>
            <p className="services__tag">
              Digital Marketing & PR Technology Audit
            </p>
          </div>
          <div className="email__marketing">
            <i className="fas fa-signal"></i>
            <p className="services__tag">Content Creation and Marketing</p>
          </div>
          <div className="email__marketing">
            <i className="fab fa-digital-ocean"></i>
            <p className="services__tag">Crisis Communication</p>
          </div>
          <div className="email__marketing">
            <i className="fab fa-pushed"></i>
            <p className="services__tag">Integrated Marketing Strategy</p>
          </div>
          <div className="email__marketing">
            <i className="fas fa-chart-line"></i>
            <p className="services__tag">Marketing and Public Relations</p>
          </div>
          <div className="email__marketing">
            <i className="fas fa-users-cog"></i>
            <p className="services__tag">Community Management</p>
          </div>
          <div className="email__marketing">
            <i className="far fa-comments"></i>
            <p className="services__tag">Social Media Crisis Communication</p>
          </div>
        </div>
        <div className="buttons">
          <button className="view__all__services">View All Services</button>
          <button className="more__about__stelecord">
            More About Telecord
          </button>
        </div>
      </div>
    </section>
  );
};

export default Services;
