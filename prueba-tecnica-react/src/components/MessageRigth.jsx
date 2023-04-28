import { Avatar, Box, Typography } from "@mui/material";

export function MessageRigth({sender, message}) {
    return (
        <>
        <Box sx={{display: "flex", justifyContent: "end", alignItems: "center", gap: 1, paddingTop: 2, paddingBottom: 2}}>
        <Typography className="message--rigth--text" variant="body1" component={"span"} >{message}</Typography>
        <Avatar sx={{background: "#4ECCA3"}}>AG</Avatar>
        </Box>
        </>
    )
}