import './navigation.scss';
import { Link } from 'react-router-dom';

const Navigation = () => {
  return (
    <div className="navSection">
      <div className="logo">
        <Link to="/" className="listItem">
          <span>records</span>
        </Link>
      </div>
      <div className="icons">
        <i className="fas fa-search"></i>
        <i className="fas fa-grip-horizontal"></i>
        <i className="fas fa-expand"></i>
        <div className="notification">
          <i className="fas fa-bell"></i>
          <span>1</span>
        </div>
        <div className="user">
          <img
            src="data:image/jpeg;base64,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"
            alt=""
          />
          <span>Ama</span>
        </div>
        <i className="fas fa-cog"></i>
      </div>
    </div>
  );
};

export default Navigation;