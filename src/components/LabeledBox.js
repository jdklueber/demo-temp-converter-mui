import { Box } from "@mui/material";

function LabeledBox({children, label}) {
    return (
        <Box sx={{
            height: 200,
            width: 200,
            border: 1,
            paddingLeft: 1,
            margin: 2
        }}>
            <h2>{label}</h2>
            {children}
        </Box>
    )
}

export default LabeledBox;