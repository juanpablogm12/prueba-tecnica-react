import { useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";

import { setLogIn } from "../redux/reducer";
import { setItem } from "../utils/localStorage";

export function useForm(initialForm, validateForm) {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const URL = "https://pbakxq15qi.execute-api.us-west-2.amazonaws.com/testing"

  const [form, setForm] = useState(initialForm);
  const [errors, setErrors] = useState({});
  const [loading, setLoading] = useState(false);
  const [open, setOpen] = useState(false);

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
      fetch(URL, {
        method: "POST",
        body: JSON.stringify(form),
        headers: {
          "Content-Type": "application/json",
        },
      })
        .then(() => {
          setLoading(false);
          dispatch(setLogIn(form));
          setItem('logIn', form)
          navigate('/inicio')
        })
        .catch(() => {
          setLoading(false);
          setOpen(true);
        });
    } else {
      return;
    }
  };
  return {
    form,
    errors,
    loading,
    open,
    setOpen,
    handleChange,
    handleBlur,
    handleSubmit,
  };
}
