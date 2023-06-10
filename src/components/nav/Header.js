import logo from '../../img/logo.png';

const Header = () => {
  return (
    <nav>
      <div className="logo">
        <img src={logo} alt="logo" />
      </div>
      <div className="nav-text">
        <p className="nav-text-primary">MEMORY GAME</p>
        <p className="nav-text-secondary">
          Get points by clicking on an image but don't click on any more than
          once!
        </p>
      </div>
    </nav>
  );
};

export default Header;
