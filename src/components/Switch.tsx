import styled from "styled-components";

const SwitchWrapper = styled.div`
  justify-content: flex-end;
  display: flex;
  width: 12rem;
  input[type=checkbox] {
    visibility: hidden;
    height: 0;
  }

  label {
    text-indent: -9999px;
    border-radius: 100px;
    position: relative;
    background: grey;
    cursor: pointer;
    display: block;
    height: 30px;
    width: 80px;
  }

  label:after {
    border-radius: 90px;
    position: absolute;
    transition: 0.3s;
    background: #fff;
    height: 22px;
    content: '';
    width: 32px;
    left: 4px;
    top: 4px;
  }

  input:checked + label {
    background: #1e83ec;
  }

  input:checked + label:after {
    transform: translateX(-100%);
    left: calc(100% - 5px);
  }
`;

const Switch: React.FC<{}> = () => {
  return(
    <SwitchWrapper>
      <input type="checkbox" id="switch" />
      <label htmlFor="switch">Toggle</label>
    </SwitchWrapper>
  );
};

export default Switch;
