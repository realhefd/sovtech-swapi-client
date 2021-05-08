import UserProfile from '../components/UserProfile'



import { useHistory } from "react-router-dom";






const Details: React.FC<{}> = () => {
  const history = useHistory();
  
  


  return <UserProfile {...history.location} />;
}

export default Details;
