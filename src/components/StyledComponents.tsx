import styled from "styled-components";

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