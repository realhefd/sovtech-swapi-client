import { useHistory } from "react-router-dom";
import avatar from '../assets/helmet.jpg';

import {
  StyledCardContent as StyledCardAction,
  StyledCardContent,
  StyledRoundedBtn,
  StyledCard,
  StyledSpan,
  Container,
  Avatar
} from './StyledComponents'

const styles = {
  card: {
    justifyContent: 'center',
    flexDirection: 'column',
    alignContent: 'center',
    alignItems: 'center',
    display: 'flex',
    flex: '0 0 65%',
    padding: '2rem'
  },
  avatar: {
    border: '1px solid',
    margin: '1.5rem',
    height: 200,
    width: 200
  },
  title: {
    fontSize: '2.25rem',
    fontWeight: 400
  },
  cardContent: {
    alignContent: 'center'
  },
  cardActions: {
    justifyContent: 'space-between',
    flexDirection: 'row',
    margin: '2rem'
  },
  danger: {
    backgroundColor: '#f50057d9',
    borderColor: '#f50057'
  }
} as const;

const Profile: React.FC<any> = ({person}: any) => {
  const history = useHistory();
  const {name, height, mass, gender, homeworld } = person
  const handleClick = () => history.push('/mess', { from: 'Details' })

  return (
    <Container>
      <StyledCard style={styles.card}>
        <StyledSpan style={styles.title}>{ name }</StyledSpan>
        <Avatar style={styles.avatar}><img alt="Avatar" src={avatar} /></Avatar>
        <StyledCardContent style={styles.cardContent}>
          <StyledSpan>{`Height: ${height}cm`}</StyledSpan>
          <StyledSpan>{`Mass: ${mass}Kg`}</StyledSpan>
          <StyledSpan style={{textTransform: 'capitalize'}}>{`Gender: ${gender}`}</StyledSpan>
          <StyledSpan>{`Homeworld: ${homeworld.name}`}</StyledSpan>
        </StyledCardContent>
        <StyledCardAction style={styles.cardActions}>
          <StyledRoundedBtn onClick={() => history.goBack()}>Back</StyledRoundedBtn>
          <StyledRoundedBtn style={styles.danger} onClick={() => handleClick()}>Mess Up</StyledRoundedBtn>
        </StyledCardAction>
      </StyledCard>
    </Container>
  );
};

export default Profile;
