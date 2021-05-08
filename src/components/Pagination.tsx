import { previousPage, nextPage, actualPage} from '../redux/reducers/pageSlice';
import { PaginationBtnsWrapper, PaginationBtn, Container} from './StyledComponents'
import { useAppDispatch } from '../redux/hooks';
import lodash from 'lodash';
const styles = {
  container: {
    boxShadow: '0px -3px 9px rgb(0 0 0 / 18%)',
    backgroundColor: '#fff',
    position: 'fixed',
    padding: '.7rem',
    margin: 'auto',
    bottom: 0,
    right: 0,
    left: 0
  },
  disabled: {
    backgroundColor: '#6d6f71db',
    borderColor: '#6d6f71db',
    color: '#fff'
  },
  active: {
    backgroundColor: '#1e83ecd9',
    borderColor: '#1e83ec',
    color: '#fff'
  }
} as const;

const Pagination = ({currentPage, totalCount}: any) => {
  const dispatch = useAppDispatch();
  const pages = lodash.range(1, Math.ceil(totalCount / 10) + 1)

  const disable = {
    next: currentPage >= pages.length ? styles.disabled : {},
    previous: currentPage <= 1 ? styles.disabled : {},
  };

  return(
  <Container style={styles.container}>
    <PaginationBtn
      disabled={!lodash.isEmpty(disable.previous)}
      onClick={() => dispatch(previousPage())}
      style={disable.previous}>Prev</PaginationBtn>

    <PaginationBtnsWrapper>
      {
        pages.map((p: number) => (
          <PaginationBtn style={currentPage === p ? styles.active : {}} onClick={() => dispatch(actualPage(p))}
            key={p}>
            {p}
          </PaginationBtn>
        ))
      }
    </PaginationBtnsWrapper>

    <PaginationBtn disabled={!lodash.isEmpty(disable.next)}
      onClick={() => dispatch(nextPage())}
      style={disable.next}>Next</PaginationBtn>
  </Container>
  );
};
export default Pagination;
