import Layout from '../components/layouts/Layout'
import {css} from '@emotion/react';
import {Formulario, Campo, InputSubmit, Error} from '../components/ui/Formulario';

// validaciones
import useValidacion from '../hooks/useValidacion';
import validarCrearCuenta from '../validacion/validarCrearCuenta';

const STATE_INICIAL = {
  nombre: '',
  email: '',
  password: ''
}

const CrearCuenta = () => {
  const {valores, errores, submitForm, handleSubmit, handleChange, handleBlur} = useValidacion(STATE_INICIAL, validarCrearCuenta, crearCuenta)
  const {nombre, email, password} = valores

  function crearCuenta() {
    console.log('Creando cuenta...')
  }

  return (
    <div>
      <Layout>
        <>
          <h1
            css={css`
              text-align: center;
              margin-top: 5rem;
            `}
          >CrearCuenta</h1>
          <Formulario
            onSubmit={handleSubmit}
            noValidate // para cancelar la validacion del form en html
          >
            <Campo>
              <label htmlFor="nombre">Nombre</label>
              <input
                type="text"
                id="nombre"
                placeholder='Tu Nombre'
                name='nombre'
                value={nombre}
                onChange={handleChange}
                onBlur={handleBlur}
              />
            </Campo>

            {errores.nombre && <Error>{errores.nombre}</Error>}

            <Campo>
              <label htmlFor="email">Email</label>
              <input
                type="email"
                id="email"
                placeholder='Tu Email'
                name='email'
                value={email}
                onChange={handleChange}
                onBlur={handleBlur}
              />
            </Campo>

            {errores.email && <Error>{errores.email}</Error>}

            <Campo>
              <label htmlFor="password">Password</label>
              <input
                type="password"
                id="password"
                placeholder='Tu Password'
                name='password'
                value={password}
                onChange={handleChange}
                onBlur={handleBlur}
              />
            </Campo>

            {errores.password && <Error>{errores.password}</Error>}

            <InputSubmit
              type="submit"
              value="Crear Cuenta"
            />
          </Formulario>
        </>
      </Layout>
    </div>

  )
}

export default CrearCuenta