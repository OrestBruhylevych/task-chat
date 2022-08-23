import { SearchBoxStyled, SearchIcon } from './SearchBox.styled';

export const SearchBox = ({ value, onChange }) => {
  return (
    <SearchBoxStyled>
      <SearchIcon />
      <input
        name="filter"
        type="text"
        value={value}
        onChange={onChange}
        placeholder="Search or start new chat..."
      />
    </SearchBoxStyled>
  );
};
