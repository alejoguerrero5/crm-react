import { useNavigate, Form, useActionData, redirect } from 'react-router-dom'
import RegisterForm from '../components/RegisterForm'
import Error from '../components/Error'
import {addClient} from '../data/clients'

export async function action({request}) {
  const formData = await request.formData()

  //Obtener información del formData
  /* console.log(formData.get('nombre')) */
  /* console.log(...formData) */
  const data = Object.fromEntries(formData)

  const email = formData.get('email')

  //Validación
  const error = []
  if(Object.values(data).includes('')){
    error.push('Todos los campos son obligatorios')
  }

  //Validar con expresion regular
  /* let regex = new RegExp("([!#-'*+/-9=?A-Z^-~-]+(\.[!#-'*+/-9=?A-Z^-~-]+)*|\"\(\[\]!#-[^-~ \t]|(\\[\t -~]))+\")@([!#-'*+/-9=?A-Z^-~-]+(\.[!#-'*+/-9=?A-Z^-~-]+)*|\[[\t -Z^-~]*])");
  if(!regex.test(email)){
    error.push('El email no es valido')
  } */


  //Retornar datos si hay errores
  if(Object.keys(error).length){
    return error
  }
  

  await addClient(data)
  
  return redirect('/');
}

const NewClient = () => {

  const errors = useActionData()

  const navigate = useNavigate()

  return (
    <>
      <h1 className='font-black text-4xl text-cyan-850'>Nuevo Cliente</h1>
      <p className='mt-3'>Llena todos los campos para registrar un nuevo cliente</p>

      <div className="flex justify-end">
        <button
          className="bg-cyan-850 text-lime-450 px-3 py-1 font-bold uppercase"
          onClick={() => navigate(-1)}
        >
          Volver
        </button>
      </div>

      <div className='bg-white shadow-md md:w-3/4 mx-auto px-5 py-10 mt-10'>

        {errors?.length && errors.map((error, i ) => <Error key={i}>{error}</Error>)}

        <Form
          method='post'
          //noValidate
        >
          <RegisterForm />

          <input
            type='submit'
            className='mt-5 w-full bg-cyan-850 p-3 uppercase font-bold text-lime-450 text-lg hover:text-lime-200'
            value='Registrar Cliente'
          />
        </Form>



      </div>

    </>
  )
}

export default NewClient
