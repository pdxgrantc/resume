import PropTypes from "prop-types";

export default function Header({ title, children }) {
  return (
    <div>
      <DesktopHeader title={title}> {children} </DesktopHeader>
    </div>
  );
}

Header.propTypes = {
  title: PropTypes.string,
  children: PropTypes.node,
};

function DesktopHeader({ title, children }) {
  return (
    <div className="h-[5rem] bg-black mb-10">
      <div className="mx-page flex justify-between">
        <h1 className="text-header font-semibold">{title}</h1>
        <div className="flex gap-5">{children}</div>
      </div>
    </div>
  );
}

DesktopHeader.propTypes = {
  title: PropTypes.string,
  children: PropTypes.node,
};

/*
const DropdownMenu = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [subMenuOpen, setSubMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const toggleSubMenu = () => {
    setSubMenuOpen(!subMenuOpen);
  };

  return (
    <div className="dropdown">
      <button onClick={toggleMenu}>Open Dropdown</button>
      {isOpen && (
        <div className="dropdown-content">
          <ul>
            <li onClick={toggleSubMenu}>Option 1</li>
            {subMenuOpen && (
              <ul className="sub-menu">
                <li>Submenu Option 1</li>
                <li>Submenu Option 2</li>
                <li>Submenu Option 3</li>
              </ul>
            )}
            <li>Option 2</li>
            <li>Option 3</li>
          </ul>
        </div>
      )}
    </div>
  );
};
*/
