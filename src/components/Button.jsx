import React from 'react';
import styled from 'styled-components';

const Button = () => {
  return (
    <StyledWrapper>
      <button className="button">
        <p>Read more</p>
      </button>
    </StyledWrapper>
  );
}

const StyledWrapper = styled.div`
  .button {
    all: unset;
    display: flex;
    align-items: center;
    position: relative;
    padding: 0.6em 2em;
    border: mediumspringgreen solid 0.15em;
    border-radius: 0.25em;
    color: black;   /* ✅ Always black */
    font-size: 0.7em;
    font-weight: 600;
    cursor: pointer;
    overflow: hidden;
    transition: border 300ms;
    user-select: none;
  }

  .button p {
    z-index: 1;
    position: relative;
  }

  /* ❌ removed hover text color change */
  .button:hover {
    border-color: mediumspringgreen;
  }

  .button:active {
    border-color: teal;
  }

  .button::after, .button::before {
    content: "";
    position: absolute;
    width: 9em;
    aspect-ratio: 1;
    background: mediumspringgreen;
    opacity: 50%;
    border-radius: 50%;
    transition: transform 500ms, background 300ms;
  }

  .button::before {
    left: 0;
    transform: translateX(-8em);
  }

  .button::after {
    right: 0;
    transform: translateX(8em);
  }

  .button:hover:before {
    transform: translateX(-1em);
  }

  .button:hover:after {
    transform: translateX(1em);
  }

  .button:active:before,
  .button:active:after {
    background: teal;
  }
`;

export default Button;
