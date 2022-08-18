import { Box } from "components/Box/Box";
import { ImSearch } from "react-icons/im";

export const SearchBox = ({ value, onChange }) => {
  return (
      <Box display="flex" >
          <ImSearch/>
          <input
        type="text"
        value={value}
        // onChange={e => onChange(e.target.value)}
         />
    </Box>
  );
};