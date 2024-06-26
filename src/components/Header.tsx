import { Link } from "react-router-dom";

const Header = () => {
    const autent = true
    return (
        <nav className="bg-primarioUno">
            <div className="flex  justify-around items-center  p-2">
                <a href="/" className="flex items-center">
                    <img src="./public/capiñatasLogo1.png" className="h-20 scale-150 " alt="CaPiñatas Logo" />
                </a>
                <div className="flex md:order-1 ml-[40px] ">
                    <button type="button" data-collapse-toggle="navbar-search" aria-controls="navbar-search" aria-expanded="false" className="md:hidden text-gray-500 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-700 focus:outline-none focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-700 rounded-lg text-sm p-2.5 mr-1" >
                        <svg className="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
                            <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z" />
                        </svg>
                        <span className="sr-only">Search</span>
                    </button>
                    <div className="relative hidden md:block">
                        <div className=" absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                            <svg className="w-4 h-4 text-gray-500 dark:text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
                                <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z" />
                            </svg>
                            <span className="sr-only">Search icon</span>
                        </div>
                        <input type="text" id="search-navbar" className="block w-full p-2 pl-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Search..." />
                    </div>
                    <button data-collapse-toggle="navbar-search" type="button" className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600" aria-controls="navbar-search" aria-expanded="true">
                        <span className="sr-only">Open main menu</span>
                        <svg className="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 17 14">
                            <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M1 1h15M1 7h15M1 13h15" />
                        </svg>
                    </button>
                </div>
                <div className="items-center justify-between hidden w-full md:flex md:w-auto md:order-1" id="navbar-search">
                    <div className="relative mt-5 md:hidden">
                        <div className="absolute inset-y-0 left-0 flex items-center pl-4 pointer-events-none">
                            <svg className="w-4 h-4 text-gray-500 dark:text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
                                <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z" />
                            </svg>
                        </div>
                        <input type="text" id="search-navbar" className="block w-full p-2 pl-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Search..." />
                    </div>
                    <div>
                        <ul className="flex  flex-col p-4 md:p-0 mt-4 font-medium border border-gray-100 rounded-lg bg-gray-50 md:flex-row md:space-x-8 md:mt-0 md:border-0 md:bg-primarioUno dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
                            <li>
                                <a href="/" className="block py-2 pl-3 pr-4 text-white text-3xl hover:bg-gray-100 md:hover:bg-transparent md:hover:text-black rounded md:bg-transparent md:text-primarioDos md:p-0 md:dark:text-blue-500" aria-current="page">Productos</a>
                            </li>
                            <li>
                            <Link to={"/informacion"} className="block py-2 pl-3 pr-4 text-primarioDos text-3xl rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-black md:p-0 md:dark:hover:text-blue-500 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700">Conocenos</Link>
                            </li>
                        </ul>
                    </div>
                    {autent ? (
                        <div className="ml-10 mr-10">
                            <ul className="ml-[70px] flex flex-col p-1 md:p-0 mt-4 font-medium border border-gray-100 rounded-lg bg-gray-50 md:flex-row md:space-x-8 md:mt-0 md:border-0 md:bg-primarioUno dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
                                <li>
                                <Link to={"/registro"} className="block py-2 pl-3 pr-4 text-primarioDos text-3xl rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-black md:p-0 md:dark:hover:text-blue-500 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700">Registrate</Link>
                                </li>
                                <li>
                                    <a className="block py-2 pl-3 pr-4 text-primarioDos rounded  md:p-0 md:dark:hover:text-blue-500 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent text-3xl dark:border-gray-700">/</a>
                                </li>
                                <li>
                                <Link to={"/inicioSesion"} className="block py-2 pl-3 pr-4 text-primarioDos text-3xl rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-black md:p-0 md:dark:hover:text-blue-500 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700">Iniciar sesion</Link>
                                </li>
                            </ul>
                        </div>) : (<div></div>)}
                </div>
            </div>
        </nav>
    );
};
export default Header