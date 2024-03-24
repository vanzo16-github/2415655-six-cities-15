import { useState } from 'react';
import { useAppSelector } from '../../hooks';
import SortList from '../sort-list/sort-list';

function Sort(): JSX.Element {
  const [isOpenForm, setIsOpenForm] = useState<boolean>(false);
  const activeSort = useAppSelector((state) => state.sortOption);

  const handleFormClick = () => {
    setIsOpenForm(!isOpenForm);
  };
  return (
    <form className="places__sorting" action="#" method="get" onClick={handleFormClick}>
      <span className="places__sorting-caption">Sort by</span>
      <span className="places__sorting-type" tabIndex={0}>
        {activeSort}
        <svg className="places__sorting-arrow" width={7} height={4}>
          <use xlinkHref="#icon-arrow-select" />
        </svg>
      </span>
      <SortList isOpenForm={isOpenForm} />
    </form>
  );
}

export default Sort;
