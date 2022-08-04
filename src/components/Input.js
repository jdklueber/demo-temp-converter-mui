import { TextField } from "@mui/material";

function Input({label, type, onChange, value}) {
    return (
        <div>
            <TextField value={value} onChange={onChange} type={type} label={label} variant="standard" />
        </div>
    )
}

export default Input;