import { StyledCardContent, StyledRoundedBtn, StyledSpan, Container } from '../components/StyledComponents';
const styles = {
  container: {
    flexDirection: 'column',
    alignItems: 'center',
    marginTop: '4rem'
  },
  title: {
    fontSize: '12rem',
    color: '#1e83ec',
    fontWeight: 200
  },
  cardActions: {
    justifyContent: 'space-evenly',
    flexDirection: 'row',
    margin: '2rem'
  },
  details: {
    marginBottom: '4rem'
  }
} as const;

const NotFound: React.FC<{}> = () => {
  return (
    <Container style={styles.container}>
      <StyledSpan style={styles.title}>404</StyledSpan>

      <StyledSpan style={styles.details}>The person or page that you are looking for was not found</StyledSpan>
      <p>Please use one of the links below</p>

      <StyledCardContent style={styles.cardActions}>
        <StyledRoundedBtn>Back</StyledRoundedBtn>
        <StyledRoundedBtn>Home</StyledRoundedBtn>
      </StyledCardContent>
    </Container>
  );
};

export default NotFound;
