import React from "react";
import cl from "./modal.module.css";

const MyModal = ({ children, visible, setVisible, title, crossBtn }) => {
  const rootClasses = [cl.myModal];

  if (visible) {
    rootClasses.push(cl.active);
  }

  return (
    <div className={rootClasses.join(" ")} onClick={() => setVisible(false)}>
      <div className={cl.myModalContent} onClick={(e) => e.stopPropagation()}>
        <div className={cl.myModalHeader}>
          <h1>{title}</h1>
          {crossBtn && (
            <button className={cl.btnClose} onClick={() => setVisible(false)}>
              <svg
                fill="#000000"
                viewBox="0 0 32 32"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M18.8,16l5.5-5.5c0.8-0.8,0.8-2,0-2.8l0,0C24,7.3,23.5,7,23,7c-0.5,0-1,0.2-1.4,0.6L16,13.2l-5.5-5.5  c-0.8-0.8-2.1-0.8-2.8,0C7.3,8,7,8.5,7,9.1s0.2,1,0.6,1.4l5.5,5.5l-5.5,5.5C7.3,21.9,7,22.4,7,23c0,0.5,0.2,1,0.6,1.4  C8,24.8,8.5,25,9,25c0.5,0,1-0.2,1.4-0.6l5.5-5.5l5.5,5.5c0.8,0.8,2.1,0.8,2.8,0c0.8-0.8,0.8-2.1,0-2.8L18.8,16z" />
              </svg>
            </button>
          )}
        </div>
        {children}
      </div>
    </div>
  );
};

export default MyModal;