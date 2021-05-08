import UserProfile from '../components/UserProfile'
import { useHistory } from "react-router-dom";

const Details: React.FC<{}> = () => {
  const history = useHistory();
  const {state} = history.location

  return <UserProfile {...state} />;
}

export default Details;
