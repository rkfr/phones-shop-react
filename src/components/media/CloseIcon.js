import React from 'react';

const CloseIcon = ({ handleClick, className }) => {
  const style = {
    svg: {
      enableBackground: 'new 0 0 512 512',
      height: 32,
      width: 32,
    },
    st0: {
      display: 'inline',
    },
    st1: {
      fill: 'none',
      stroke: '#000000',
      strokeWidth: '16',
      strokeLinecap: 'round',
      strokeLine: 'join',
      strokeMiterlimit: '10',

    },
    st2: {
      display: 'none',
    },
  };

  return (
    <div
      onClick={handleClick}
      tabIndex="0"
      role="button"
      onKeyDown={handleClick}
      className={className}
    >
      <svg style={style.svg} version="1.1" viewBox="0 0 512 512" xmlSpace="preserve" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink">
        <g style={style.st2}>
          <g style={style.st0}>
            <line style={style.st1} x1="112.5" x2="401" y1="112.5" y2="401" />
            <line style={style.st1} x1="401" x2="112.5" y1="112.5" y2="401" />
          </g>
        </g>
        <g><path d="M268.064,256.75l138.593-138.593c3.124-3.124,3.124-8.189,0-11.313c-3.125-3.124-8.189-3.124-11.314,0L256.75,245.436   L118.157,106.843c-3.124-3.124-8.189-3.124-11.313,0c-3.125,3.124-3.125,8.189,0,11.313L245.436,256.75L106.843,395.343   c-3.125,3.125-3.125,8.189,0,11.314c1.562,1.562,3.609,2.343,5.657,2.343s4.095-0.781,5.657-2.343L256.75,268.064l138.593,138.593   c1.563,1.562,3.609,2.343,5.657,2.343s4.095-0.781,5.657-2.343c3.124-3.125,3.124-8.189,0-11.314L268.064,256.75z" /></g>
      </svg>
    </div>
  );
};
export default CloseIcon;
