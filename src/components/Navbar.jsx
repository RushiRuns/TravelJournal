import img from "/images/path.svg";
export default function Navbar() {
  return (
    <header className="nav-container">
      <nav className="nav">
        <img src={img} alt="" className="nav__logo" />
        <p className="nav__title">my travel journal.</p>
      </nav>
    </header>
  );
}
