import IconButton from "@mui/material/IconButton";
import InputAdornment from "@mui/material/InputAdornment";
import SearchOutlinedIcon from "@mui/icons-material/SearchOutlined";

import { StyledInput } from "./styles";

type SearchPropTypes = {
  searchedText: string;
  onTextChange: (text: string) => void;
  onSearch: () => void;
};

const Search = ({ searchedText, onTextChange, onSearch }: SearchPropTypes) => {
  return (
    <StyledInput
      id="outlined-basic"
      placeholder="Search Gists"
      variant="outlined"
      value={searchedText}
      onChange={(event) => onTextChange(event.target.value)}
      InputProps={{
        endAdornment: (
          <InputAdornment position="end">
            <IconButton onClick={onSearch}>
              <SearchOutlinedIcon />
            </IconButton>
          </InputAdornment>
        ),
      }}
    />
  );
};

export default Search;
