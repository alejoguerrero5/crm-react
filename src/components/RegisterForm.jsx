

const RegisterForm = ({client}) => {
    return (
        <>
            <div className="mb-4">
                <label
                    className="text-gray-800"
                    htmlFor="nombre"
                >Nombre:</label>
                <input 
                    id="nombre"
                    type="text"
                    className="mt-2 block w-full p-3 bg-gray-100"
                    placeholder="Nombre del Cliente"
                    name="nombre"
                    defaultValue={client?.nombre}
                />
            </div>
            <div className="mb-4">
                <label
                    className="text-gray-800"
                    htmlFor="interes"
                >Interes:</label>
                <input 
                    id="interes"
                    type="text"
                    className="mt-2 block w-full p-3 bg-gray-100"
                    placeholder="Linea de interes"
                    name="interes"
                    defaultValue={client?.interes}
                />
            </div>

            <div className="mb-4">
                <label
                    className="text-gray-800"
                    htmlFor="email"
                >E-mail:</label>
                <input 
                    id="email"
                    type="email"
                    className="mt-2 block w-full p-3 bg-gray-100"
                    placeholder="Email del Cliente"
                    name="email"
                    defaultValue={client?.email}
                />
            </div>

            <div className="mb-4">
                <label
                    className="text-gray-800"
                    htmlFor="telefono"
                >Teléfono:</label>
                <input 
                    id="telefono"
                    type="tel"
                    className="mt-2 block w-full p-3 bg-gray-100"
                    placeholder="Teléfono del Cliente"
                    name="telefono"
                    defaultValue={client?.telefono}
                />
            </div>

            <div className="mb-4">
                <label
                    className="text-gray-800"
                    htmlFor="notas"
                >Notas:</label>
                <textarea
                    as="textarea"
                    id="notas"
                    type="text"
                    className="mt-2 block w-full p-3 bg-gray-100 h-40 align-self"
                    placeholder="Notas del Cliente"
                    name="notas"
                    defaultValue={client?.notas}
                />
            </div>
        </>
    )
}

export default RegisterForm