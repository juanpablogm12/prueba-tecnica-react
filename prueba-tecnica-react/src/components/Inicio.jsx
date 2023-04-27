import { Container, Typography } from "@mui/material";

export function Inicio() {

    return (
        <Container>
            <Typography>Bienvenido a React User Chat, aquí podras visualizar el funcionamiento de un chat para tu aplicación</Typography>
            <img src="chat2.jpg" style={{width: 300, height: "auto" }}/>
            <Typography>este proyecto fue realizado con react redux y react router dom para la creacion de la interfaz, donde tambien resalta la implementación de customs hooks para un codigo mas limplio y el local storage para manter la sesion iniciada</Typography>
        </Container>
    )
}