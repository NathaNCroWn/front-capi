import { Link } from "react-router-dom";

const InicioSesion = () =>{
    return(
        <div className=" flex items-center justify-center h-[86vh]" >
        <div className="w-full md:w-[400px] lg:w-[500px] bg-primarioDos rounded-lg shadow-2xl dark:border md:mt-0 max-w-md  sm:max-w-md xl:p-0 dark:bg-gray-800 dark:border-gray-700 ">
            <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
                <div className=" flex items-center justify-center mb-6"><img src="./public/capiñatasLogo2.png" className="w-25 h-25 " /></div>
                <form className="space-y-4 md:space-y-6">
                    <div className="mb-6">
                        <label htmlFor="Usuario" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Ingrese su Usuario</label>
                        <input type="Usuario" id="Usuario" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"  required />
                    </div>
                    <div className="mb-6">
                        <label htmlFor="password" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Ingrese su Contraseña</label>
                        <input type="password" id="password" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" required />
                    </div>
                    <div>
                    <Link to={"/"} className="text-white bg-primarioUno hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800">Iniciar Sesion</Link>
                    
                    </div>
                    <div className="flex items-start mb-6">
                        <label htmlFor="ConCuenta " className="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300">No tienes cuenta?</label>
                        <Link to={"/registro"} className="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300 md:hover:bg-transparent md:hover:text-primarioUno">Registrate</Link>
                    </div>
                </form>
            </div>
        </div>
    </div>
    );
};
export default InicioSesion