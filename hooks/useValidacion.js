
import React, {useState, useEffect} from 'react';

const useValidacion = (stateInicial, validar, fn) => {

  const [valores, guardarValores] = useState(stateInicial); // lo q el usuario coloque en los inputs
  const [errores, guardarErrores] = useState({});
  const [submitForm, guardarSubmitForm] = useState(false); // cuando el usuario le de a enviar cambia a true y el useEffects ejecuta el codigo

  useEffect(() => {
    if (submitForm) {
      const noErrores = Object.keys(errores).length === 0; // errores es un objeto y con Objects.keys verificamos si esta vacio

      if (noErrores) {
        fn(); // Fn = Función que se ejecuta en el componente
      }
      guardarSubmitForm(false);
    }
  }, []);

  return (  );
}

export default useValidacion;