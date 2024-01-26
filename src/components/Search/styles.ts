import styed from "styled-components";
import TextField from "@mui/material/TextField";

export const StyledInput = styed(TextField)`
    width: 400px;
    background: #fff;
    
   .MuiOutlinedInput-root {
    padding-right: 0;

    input {
        padding: 15px
     }
   }
   
   .MuiInputAdornment-root {
    background: #eee;
    height: auto;
    padding: 10px;
   }
`;
