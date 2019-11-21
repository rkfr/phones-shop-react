import React from 'react';

const CrossIcon = ({
  handleClick, className, height = 32, width = 32, fill = '#000000',
}) => {
  const styles = {
    svg: {
      enableBackground: 'new 0 0 512 512',
      height,
      width,
      fill,
      position: 'absolute',
      top: '50%',
      left: '50%',
      transform: 'translate(-50%, -50%)',
    },
    st0: {
      display: 'inline',
    },
    st1: {
      fill,
      strokeWidth: '6',
      strokeLinecap: 'round',
      strokeLine: 'join',
      strokeMiterlimit: '10',

    },
    st2: {
      display: 'none',
    },
  };

  return (
    <button
      onClick={handleClick}
      className={className}
      type="button"
    >
      <svg style={styles.svg} version="1.1" viewBox="0 0 512 512" xmlSpace="preserve" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink">
        <g style={styles.st2}>
          <g style={styles.st0}>
            <line style={styles.st1} x1="112.5" x2="401" y1="112.5" y2="401" />
            <line style={styles.st1} x1="401" x2="112.5" y1="112.5" y2="401" />
          </g>
        </g>
        <g><path d="M268.064,256.75l138.593-138.593c3.124-3.124,3.124-8.189,0-11.313c-3.125-3.124-8.189-3.124-11.314,0L256.75,245.436   L118.157,106.843c-3.124-3.124-8.189-3.124-11.313,0c-3.125,3.124-3.125,8.189,0,11.313L245.436,256.75L106.843,395.343   c-3.125,3.125-3.125,8.189,0,11.314c1.562,1.562,3.609,2.343,5.657,2.343s4.095-0.781,5.657-2.343L256.75,268.064l138.593,138.593   c1.563,1.562,3.609,2.343,5.657,2.343s4.095-0.781,5.657-2.343c3.124-3.125,3.124-8.189,0-11.314L268.064,256.75z" /></g>
      </svg>
    </button>
  );
};
export default CrossIcon;
