import styled from "styled-components";

export const Container = styled.div`
  justify-content: center;
  padding: 2rem 4rem 0;
  flex-direction: row;
  flex-wrap: wrap;
  display: flex;
`;

export const StyledCardContent = styled.div`
  justify-content: flex-start;
  align-content: flex-start;
  align-items: flex-start;
  flex-direction: column;
  flex-wrap: wrap;
  display: flex;
  width: 235px;
`;

export const NavbarHeader = styled.header`
  -webkit-box-shadow: 0 2px 3px rgb(0 0 0 / 18%);
  -ms-box-shadow: 0 2px 3px rgba(0, 0, 0, 0.18);
  box-shadow: 0 3px 9px rgb(0 0 0 / 18%);
  justify-content: space-between;
  font-size: calc(10px + 2vmin);
  background-color: #fff;
  min-height: max-content;
  flex-direction: column;
  align-items: center;
  flex-direction: row;
  padding: 5px 15px;
  position: sticky;
  display: flex;
  z-index: 1;
  top: 0;
`;

export const NavbarImage = styled.img`
  pointer-events: none;
  height: 50px;


@media (prefers-reduced-motion: no-preference) {
  .logo {
    animation: floating-animation infinite 3s ease-in-out;
  }
}

@keyframes floating-animation {
  0% {
    transform: translateY(0);
  }
  50% {
    transform: translateY(5px);
  }
  100% {
    transform: translateY(0);
  }
}
`;

export const StyledRoundedBtn = styled.button`
  letter-spacing: .0892857143em;
  transition-duration: .28s;
  background-color: #1e83ec;
  border-color: #1e83ec;
  border-radius: 30px;
  border-style: none;
  cursor: pointer;
  min-width: 85px;
  font-size: 14px;
  padding: 0 15px;
  height: 30px;
  color: #fff;
  &:hover, &:focus {
    opacity:.7
  }
`;

export const StyledSpan = styled.span`
  font-family: Roboto,sans-serif;
  overflow-wrap: break-word;
  text-overflow: ellipsis;
  letter-spacing: normal;
  white-space: nowrap;
  align-self: center;
  font-size: 1.5rem;
  text-align: start;
  overflow: hidden;
  line-height: 1.2;
  flex: auto 1 auto;
`;