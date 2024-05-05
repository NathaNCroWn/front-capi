import { Link } from "react-router-dom";

const Footer = () => {
    return (<footer>
        <footer className=" rounded-lg shadow dark:bg-gray-900 m-2 bg-primarioUno">
            <div className="w-full max-w-screen-xl mx-auto md:py-4">
                <div className="sm:flex sm:items-center sm:justify-between">
                    <a href="/" className="flex items-center mb-4 sm:mb-0">
                        <img src="./public/capiñatasLogo1.png" className="h-20 scale-150" alt="CaPiñatas Logo" />
                    </a>
                    <ul className="flex flex-wrap items-center mb-6 text-sm font-medium text-white sm:mb-[-5px] dark:text-gray-400">
                        <li>
                            <a href="https://github.com/NathaNCroWn" className="mr-4 hover:underline md:mr-6 ">Desarrollador</a>
                        </li>
                        <li>
                        <Link to={"/inicioSesion"} className="hover:underline">Contactanos</Link>
                        </li>
                    </ul>
                </div>
                <hr className="my-6 sm:mx-auto lg:my-0" />
                <span className="block text-sm text-white sm:text-center dark:text-gray-400">© 2023 <a href="https://github.com/NathaNCroWn" className="hover:underline">Crow Development</a>. All Rights Reserved.</span>
            </div>
        </footer>
    </footer>);
};
export default Footer