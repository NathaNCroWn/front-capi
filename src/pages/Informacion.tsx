import { BsFacebook, BsInstagram, BsWhatsapp } from "react-icons/bs";
import { Link } from "react-router-dom";

const Informacion = () => {
    return (
        <div className="flex flex-col xl:flex-row items-center ">
            <div className="xl:w-1/2 space-x-4 ">
                <img src="./public/capiñatasLogo2.png" className="mx-auto scale-125 hover:scale-150" />
                <h1 className=" mt-[30px] text-4xl text-center font-semibold  md:hover:bg-transparent md:hover:text-primarioUno">Nuestras redes sociales.</h1>
                <div className="flex flex-col xl:flex-row mt-[20px] ">
                    <Link to={"https://www.instagram.com/"} className="mx-auto md:hover:bg-transparent md:hover:text-primarioUno">< BsInstagram size={"100px"} /></Link>
                    <Link to={"https://www.facebook.com/"} className="mx-auto md:hover:bg-transparent md:hover:text-primarioUno">< BsFacebook size={"100px"} /></Link>
                    <Link to={"https://web.whatsapp.com/"} className="mx-auto md:hover:bg-transparent md:hover:text-primarioUno">< BsWhatsapp size={"100px"} /></Link>
                </div>
            </div>
            <div className="mt-4">
                <div className=" max-w-[800px] p-10 bg-primarioDos" >
                    <h1 className="text-5xl font-semibold   " >TALLER DE ELABORACION DE PIÑATAS</h1>
                    <p className="font-extralight text-4xl ">Somos un emprendimiento de piñatas nuevo en el
                        mercado el cual dispone de una variedad de piñatas de
                        excelente calidad de los motivos que desee, estas son
                        elaboradas de la manera mas similar y acorde a lo exigido
                        por el cliente.<br />
                        <br />
                        Gracias al cumplimiento de las exigencias del cliente con
                        los productos ganamos una excelente reputación que a
                        estado creciendo puesto que nuestros clientes al quedar
                        satisfechos con nuestros productos tienden a volver e
                        incluso aconsejan a otras personas de adquirir nuestros
                        productos.<br />
                        <br />
                        Pueden contactarnos mediante las redes sociales si desea
                        realizar alguna cotización o visualizar mas de nuestro
                        trabajo.
                    </p>
                </div>
            </div>
        </div>
    );
};
export default Informacion