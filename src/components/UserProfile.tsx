import { GET_PERSON_BY_NAME } from '../graphqlq/queries'
import { useHistory } from "react-router-dom";
import avatar from '../assets/helmet.jpg';
import Loader from '../components/Loader'
import { useQuery } from '@apollo/client';
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

const Profile: any = (location: any) => {
  const {pathname, state} = location as any;
  const name = pathname.match(/details\/(.*)/)?.[1] as string;
  const { loading, error, data } = useQuery(GET_PERSON_BY_NAME, {
    variables: { name: name?.split('+').join(' ') }
  }) as any;

  if (state) return  <DataCard {...state.person}/>;
  if (loading) return <DataCard children={(<Loader/>)}/>;
  if (error) return <DataCard error={error.message}/>;
  if (!loading && !error) return <DataCard {...data.getPerson.results[0]}/>;
};

const DataCard: React.FC<any> = (details: any) => {
  const history = useHistory();
  const { name, height, mass, gender, homeworld } = details;
  const handleClick = () => history.push('/make-a-mess', { from: 'Details' });

  if (details.children) return details.children;

  return (
    <Container>
      <StyledCard style={styles.card}>
        <StyledSpan style={styles.title}>{ name }</StyledSpan>
        <Avatar style={styles.avatar}>
          <img alt="Avatar" src={avatar} />
        </Avatar>

        <StyledCardContent style={styles.cardContent}>
          <StyledSpan>{`Height: ${height}cm`}</StyledSpan>
          <StyledSpan>{`Mass: ${mass}Kg`}</StyledSpan>
          <StyledSpan style={{textTransform: 'capitalize'}}>{`Gender: ${gender}`}</StyledSpan>
          <StyledSpan>{`Homeworld: ${homeworld.name}`}</StyledSpan>
        </StyledCardContent>

        <StyledCardAction style={styles.cardActions}>
          <StyledRoundedBtn onClick={() => history.goBack()}>
            Back</StyledRoundedBtn>
          <StyledRoundedBtn style={styles.danger} onClick={() => handleClick()}>
            Mess Up</StyledRoundedBtn>
        </StyledCardAction>
      </StyledCard>
    </Container>
  );
};

export default Profile;
