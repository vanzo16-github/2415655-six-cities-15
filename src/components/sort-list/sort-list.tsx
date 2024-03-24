import { SortOptions, TSortOptions } from '../../const';
import { useAppDispatch, useAppSelector } from '../../hooks';
import { changeSort } from '../../store/action';

type OptionItemProps = {
  name: TSortOptions;
}

type SortListProps = {
  isOpenForm: boolean;
}

function SortListItem({name}: OptionItemProps): JSX.Element {
  const activeSort = useAppSelector((state) => state.sortOption);
  const dispatch = useAppDispatch();

  const handleSortClick = () => {
    dispatch(changeSort({option: name}));
  };

  return (
    <li className={`places__option ${activeSort === name && 'places__option--active'}`} tabIndex={0} onClick={handleSortClick}>{name}</li>
  );
}

function SortList({isOpenForm}: SortListProps): JSX.Element {

  return (
    <ul className={`places__options places__options--custom ${isOpenForm && 'places__options--opened'}`}>
      {Object.values(SortOptions).map((name) => <SortListItem name={name} key={name} />)}
    </ul>
  );
}

export default SortList;
