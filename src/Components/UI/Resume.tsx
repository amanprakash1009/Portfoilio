import styled from "styled-components";

const Resume = () => {
  return (
    <StyledWrapper>
      <button
        onClick={() => {
          window.open("/Resume.pdf", "_blank");
        }}
      >
        Resume
      </button>
    </StyledWrapper>
  );
};

const StyledWrapper = styled.div`
  button {
    --color: #ffffff;
    background: black;
    font-family: inherit;
    display: inline-block;
    width: 8em;
    height: 2.6em;
    line-height: 2.5em;
    margin: 20px;
    position: relative;
    cursor: pointer;
    overflow: hidden;
    border: 2px solid var(--color);
    transition: color 0.5s;
    z-index: 1;
    font-size: 17px;
    border-radius: 6px;
    font-weight: 500;
    color: white;
  }

  button:before {
    content: "";
    position: absolute;
    z-index: -1;
    background: var(--color);
    height: 150px;
    width: 200px;
    border-radius: 50%;
  }

  button:hover {
    color: #000000;
  }

  button:before {
    top: 100%;
    left: 100%;
    transition: all 0.7s;
  }

  button:hover:before {
    top: -30px;
    left: -30px;
  }

  button:active:before {
    background: #ffffff;
    transition: background 0s;
  }
`;

export default Resume;
