import { useNavigate, Form, redirect } from 'react-router-dom'
import { deleteClient} from '../data/clients'

export async function action({params}){
    await deleteClient(params.idClient)
    return redirect('/')
}

const Client = ({ client }) => {

    const navigate = useNavigate()

    const { nombre, interes, email, telefono, id } = client

    return (
        <tr className="border-b">
            <td className='p-6 space-y-2'>
                <p className="text-2xl text-gray-800">{nombre}</p>
                <p>{interes}</p>
            </td>

            <td className="p-6">
                <p className="text-gray-600"><span className="text-gray-800 uppercase font-bold">Email: </span>{email}</p>
                <p className="text-gray-600"><span className="text-gray-800 uppercase font-bold">Telefono: </span>{telefono}</p>
            </td>

            <td className="p-6 flex gap-3">
                <button
                    type="button"
                    className="text-cyan-850 hover:text-cyan-600 uppercase font-bold text-xs"
                    onClick={() => navigate(`/clients/${id}/edit`)}
                >
                    Editar
                </button>

                <Form
                    method='post'
                    action={`/clients/${id}/delete`}
                    onSubmit={(e)=> {
                        if(!confirm('¿Deseas eliminar este registro?')){
                            e.preventDefault()
                        }
                    }}
                >
                    <button
                        type="submit"
                        className="text-red-600 hover:text-red-400 uppercase font-bold text-xs"
                    >
                        Eliminar
                    </button>
                </Form>


            </td>
        </tr>
    )
}

export default Client

