import { Outlet, Link, useLocation } from 'react-router-dom'

const Layuout = () => {
    const location = useLocation()

    return (
        <div className='md:flex md:min-h-screen'>
            <aside className='md:w-1/4 bg-cyan-850 px-5 py-10'>
                <h2 className='text-4xl font-black text-center text-lime-450'>CRM Clientes</h2>

                <nav className='mt-10'>
                    <Link
                        className={`${location.pathname === '/' ? 'text-lime-200' : 'text-lime-450'} text-2xl block mt-2 hover:text-lime-200`}
                        to='/'>Clientes
                    </Link>
                    <Link
                        className={`${location.pathname === '/clients/new' ? 'text-lime-200' : 'text-lime-450'} text-2xl block mt-2 hover:text-lime-200`}
                        to='/clients/new'>Nuevo Cliente
                    </Link>
                </nav>

            </aside>
            <main className='md:w-3/4 p-10 md:h-screen overflow-scroll'>
                <Outlet />
            </main>
        </div>
    )
}

export default Layuout
