import { useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";

import { setLogIn } from "../redux/reducer";

export function useForm(initialForm, validateForm) {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [form, setForm] = useState(initialForm);
  const [errors, setErrors] = useState({});
  const [loading, setLoading] = useState(false);
  const [alert, setAlert] = useState(false);

  const handleChange = (event) => {
    const { name, value } = event.target;
    setForm({
      ...form,
      [name]: value,
    });
  };
  const handleBlur = (event) => {
    handleChange(event);
    setErrors(validateForm(form));
  };
  const handleSubmit = (event) => {
    event.preventDefault();
    setErrors(validateForm(form));
    if (Object.keys(errors).length === 0) {
      setLoading(true);
      fetch("https://pbakxq15qi.execute-api.us-west-2.amazonaws.com/testing", {
        method: "POST",
        body: JSON.stringify(form),
        headers: {
          "Content-Type": "application/json",
        },
      })
        .then(() => {
          setLoading(false);
          dispatch(setLogIn(form));
          navigate('/inicio')
        })
        .catch(() => {
          setLoading(false);
          setAlert(true);
        });
    } else {
      return;
    }
  };
  return {
    form,
    errors,
    loading,
    alert,
    setAlert,
    handleChange,
    handleBlur,
    handleSubmit,
  };
}
