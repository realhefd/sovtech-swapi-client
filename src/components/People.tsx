import { useHistory } from "react-router-dom";
import avatar from '../assets/avatar.jpg';
import {
  StyledCardContent,
  StyledRoundedBtn,
  StyledCard,
  StyledSpan,
  Container,
  Avatar
} from './StyledComponents';

const People = ({ people }: any) => {
  const history = useHistory();
  const handleClick = (person: any) => {
    const url = person.name.trim().split(' ').join('+')
    history.push(`/details/${url}`, { from: 'Home', person: person })
  }

  return (
    <Container style={{ paddingBottom: 70 }}>
      {
        people.map((person: any, index: string | number) => (
          <StyledCard key={ index }>
            <Avatar><img alt="Avatar" src={avatar} /></Avatar>
            <StyledCardContent>
              <StyledSpan style={{ alignSelf: 'flex-start' }}>{ person.name }</StyledSpan>
              <span style={{ marginBottom: 4 }}>{ `${person.height} Centimetres Tall` }</span>
              <StyledRoundedBtn onClick={() => handleClick(person)}>Details</StyledRoundedBtn>
            </StyledCardContent>
          </StyledCard>
        ))
      }
    </Container>
  );
};

export default People;
