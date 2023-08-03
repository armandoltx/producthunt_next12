import React, {useEffect, useState, useContext} from "react"
import Layout from "../components/layouts/Layout"
import {FirebaseContext} from "../firebase"
import {collection, getDocs} from 'firebase/firestore'
import DetallesProducto from '../components/layouts/DetallesProducto';

const Home = () => {

  const [productos, guardarProductos] = useState([])

  const {firebase} = useContext(FirebaseContext)

  useEffect(() => {
    const obtenerProductos = async () => {
      const querySnapshot = await getDocs(collection(firebase.db, "productos"));
      const productos = querySnapshot.docs.map(doc => {
        return {
          id: doc.id,
          ...doc.data()
        }
      });
      guardarProductos(productos)

    }
    obtenerProductos()
  }, [])



  return (
    <div>
      <Layout>
        <div className="listado-productos">
          <div className="contenedor">
            <ul className="bg-white">
              {productos.map(producto => (
                <DetallesProducto
                  key={producto.id}
                  producto={producto}
                />
              ))}
            </ul>
          </div>
        </div>
      </Layout>
    </div>
  )
}

export default Home