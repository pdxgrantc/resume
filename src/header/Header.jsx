import PropTypes from "prop-types";

export default function Header({ title, children }) {
  return (
    <div className="z-[500]">
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
        <div className="flex gap-5 my-auto">{children}</div>
      </div>
    </div>
  );
}

DesktopHeader.propTypes = {
  title: PropTypes.string,
  children: PropTypes.node,
};
