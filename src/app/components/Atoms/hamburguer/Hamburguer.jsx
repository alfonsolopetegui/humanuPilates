"use client";

const HamburgerButton = ({ onToggle, isActive}) => {
  const handleClick = (event) => {
    // event.stopPropagation(); 
    onToggle(); 
  };

  return (
    <button
      // ref={buttonRef} 
      className={`hamburger hamburger--spin ${isActive ? "is-active" : ""}`}
      type="button"
      onClick={handleClick}
    >
      <span className="hamburger-box">
        <span className="hamburger-inner"></span>
      </span>
    </button>
  );
};

export default HamburgerButton;
