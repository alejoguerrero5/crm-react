import { Form, useNavigate, useLoaderData, useActionData, redirect } from 'react-router-dom'
import { getClient, updateClient } from '../data/clients'
import RegisterForm from '../components/RegisterForm'
import Error from '../components/Error'

export async function loader({params}){
    const client = await getClient(params.idClient)
    if(Object.values(client).length ===0){
        throw new Response('',{
            status: 404,
            statusText: 'Cliente no existe'
        })
    }
    return client
}

export async function action({request, params}){
  const formData = await request.formData()
  const data = Object.fromEntries(formData)
  const email = formData.get('email')

  //Validación
  const errors = []
  if(Object.values(data).includes('')){
    errors.push('Todos los campos son obligatorios')
  }

  //Retornar datos si hay errores
  if(Object.keys(errors).length){
    return errors
  }
  
  //Actualizar el cliente
  await updateClient(params.idClient,data)
  return redirect('/');
}

const EditClient = () => {

    const navigate = useNavigate()
    const client = useLoaderData()
    const errors = useActionData()

  return (
    <>
      <h1 className='font-black text-4xl text-cyan-850'>Editar Cliente</h1>
      <p className='mt-3'>A continuación podras modificar los datos de un cliente</p>

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
          <RegisterForm 
            client={client}
          />

          <input
            type='submit'
            className='mt-5 w-full bg-cyan-850 p-3 uppercase font-bold text-lime-450 text-lg hover:text-lime-200'
            value='Guardar Cambios'
          />
        </Form>
      </div>

    </>
  )
}

export default EditClient
