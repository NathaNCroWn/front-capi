import { Link } from "react-router-dom";

const Producto = () => {
    return (
        <div>
            <div className="fixed top-7 left-6 group mt-[120px] ">
                <Link to={"/"} className=" text-white bg-primarioUno hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-blue-600 focus:outline-none">Volver</Link>
            </div>
            <div className="grid grid-cols-2 md:grid-cols-2">
                <div>
                    <img className="h-100 ml-[400px] mt-[100px]  scale-150  rounded-lg " src=" ./public/sirenita.png" />
                </div>
                <div className="mt-[250px] ml-[200px]">
                    <div className="  justify-center h-[66vh] " >
                        <div className="border-x-2  border-black  md:w-[400px] lg:w-[500px] bg-primarioDos rounded-lg shadow-2xl dark:border md:mt-0 sm:max-w-md xl:p-0 dark:bg-gray-800 dark:border-gray-700 ">
                            <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
                                <div className="text-center  ">
                                    <p className="text-4xl font-semibold  text-gray-900 dark:text-white">Piñata de la sirenita</p>
                                    <p className="text-xl font-semibold  text-gray-900 dark:text-white">Basada en la sirenita</p>
                                    <p className="text-xl font-semibold text-gray-900 dark:text-white">valor:$20.000</p>
                                    <div className="mt-5 grid  gap-4">
                                        <Link to={"/"} className="text-white bg-primarioUno hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800">Cotizar</Link>
                                    </div>
                                    <p>-Esta piñata esta compuesta de materiales como: Papel crepe, fomi escarchado, cartón cartulina.</p>
                                    <p>-Medidas: 45 cm de alto, 45cm de acho para capacidad de un relleno.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};
export default Producto