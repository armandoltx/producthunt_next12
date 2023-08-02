
import React, {useState, useEffect} from 'react';

const useValidacion = (stateInicial, validar, fn) => {

  const [valores, guardarValores] = useState(stateInicial); // lo q el usuario coloque en los inputs
  const [errores, guardarErrores] = useState({});
  const [submitForm, guardarSubmitForm] = useState(false); // cuando el usuario le de a enviar cambia a true y el useEffects ejecuta el codigo

  useEffect(() => {
    if(submitForm) {
      const noErrores = Object.keys(errores).length === 0; // errores es un objeto y con Objects.keys verificamos si esta vacio

      if(noErrores) {
        fn(); // Fn = Función que se ejecuta en el componente
      }
      guardarSubmitForm(false);
    }
  }, [errores]);

  // Función que se ejecuta conforme el usuario escribe algo
  const handleChange = e => {
    guardarValores({
      ...valores,
      [e.target.name]: e.target.value
    })
  }

  // Función que se ejecuta cuando el usuario hace submit
  const handleSubmit = e => {
    e.preventDefault();
    const erroresValidacion = validar(valores);
    guardarErrores(erroresValidacion);
    guardarSubmitForm(true);
  }

  return {
    valores,
    errores,
    submitForm,
    handleSubmit,
    handleChange
  }
}

export default useValidacion;