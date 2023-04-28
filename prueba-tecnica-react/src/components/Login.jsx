import { useForm } from "../hooks/useForm";
import "../styles/login.css";

import {
  FormLabel,
  Input,
  Button,
  CircularProgress,
  Alert,
  Container,
  Typography,
  Collapse,
  Paper,
} from "@mui/material/";

const initialForm = {
  user: "",
  password: "",
};
const validationsForm = (form) => {
  let errors = {};

  if (!form.user) {
    errors.user = "Este campo es requerido";
  }

  if (!form.password) {
    errors.password = "Este campo es requerido";
  }

  return errors;
};
export function Login() {
  const {
    form,
    errors,
    loading,
    open,
    setOpen,
    handleChange,
    handleBlur,
    handleSubmit,
  } = useForm(initialForm, validationsForm);

  console.log(open);

  return (
    <Container maxWidth="xs" sx={{marginTop: 10,}}>
      <Paper elevation={6}  sx={{padding: 2}}>
        <Typography variant="h3">Login</Typography>
        <form onSubmit={handleSubmit} className="form--container">
          <FormLabel>Usuario: </FormLabel>
          <Input
            type="text"
            name="user"
            value={form.user}
            onChange={handleChange}
            onBlur={handleBlur}
          />
          {errors.user && (
            <span style={{ color: "#f44336" }}>{errors.user}</span>
          )}
          <FormLabel>Contraseña: </FormLabel>
          <Input
            type="password"
            name="password"
            value={form.password}
            onChange={handleChange}
            onBlur={handleBlur}
          />
          {errors.password && (
            <span style={{ color: "#f44336" }}>{errors.password}</span>
          )}
          <Button
            type="submit"
            value="send"
            variant="contained"
            color="primary"
            size="large"
          >
            Log in
          </Button>
          {loading && <CircularProgress sx={{ margin: "auto" }} />}
          {open && (
            <Collapse in={open}>
              <Alert
                severity="error"
                onClose={() => {
                  setOpen(false);
                }}
              >
                ¡Usuario o contraseña incorrecta!
              </Alert>
            </Collapse>
          )}
        </form>
      </Paper>
    </Container>
  );
}
