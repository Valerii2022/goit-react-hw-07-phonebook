import { useDispatch, useSelector } from 'react-redux';
import { filter, getFilteredNames } from 'redux/filterSlice';
import { FindLabel, FindInput, Form } from './styled';

export const Filter = () => {
  const dispatch = useDispatch();
  const queryFilter = useSelector(getFilteredNames);
  return (
    <Form>
      <FindLabel>
        Find contacts by name
        <FindInput
          type="text"
          name="searchName"
          value={queryFilter ?? ''}
          onChange={e => dispatch(filter(e.target.value))}
        />
      </FindLabel>
    </Form>
  );
};
