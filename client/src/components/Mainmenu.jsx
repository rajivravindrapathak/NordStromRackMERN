import { Menu } from "antd";
import { Link } from "react-router-dom";

export default function Mainmenu() {
  return (
    <div>
      <Menu mode="horizontal" className="main-menu">
        <Menu.Item key="home">
          <Link to="/">new</Link>
        </Menu.Item>
        <Menu.Item key="clearence">
          <Link to="/clearence">clearence</Link>
        </Menu.Item>
        <Menu.Item key="support">
          <Link to="/supportpage">Support</Link>
        </Menu.Item>
        <Menu.Item key="men">
          <Link to="/men">men</Link>
        </Menu.Item>
        <Menu.Item key="women">
          <Link to="/women">women</Link>
        </Menu.Item>
        <Menu.Item key="kids">
          <Link to="/kids">kids </Link>
        </Menu.Item>
        <Menu.Item key="shoes">
          <Link to="/shoes">shoes</Link>
        </Menu.Item>
        <Menu.Item key="bags-accessories">
          <Link to="/bags-accessories">Bags & Accessories</Link>
        </Menu.Item>
        <Menu.Item key="home">
          <Link to="/home">home</Link>
        </Menu.Item>
        <Menu.Item key="beauty">
          <Link to="/beauty">beauty</Link>
        </Menu.Item>
        <Menu.Item key="gift-guide">
          <Link to="/gift-guide">Gift Guide</Link>
        </Menu.Item>
        <Menu.Item key="flash-events">
          <Link to="/flash-events">Flash Events</Link>
        </Menu.Item>
      </Menu>
    </div>
  );
}