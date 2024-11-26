import { useState } from "react";
import { IoSearch, IoMenu, IoClose } from "react-icons/io5";
import { Link as ScrollLink } from "react-scroll";
import { Link } from "react-router-dom";
import { useAuth } from "../context/AuthContext";
import image1 from "../img/image (1).jpg";
import image2 from "../img/image (2).png";
import image3 from '../img/image (3).png';
import image4 from '../img/image (4).png';
import image5 from '../img/image (5).png';
import image6 from '../img/image (6).png';
import image8 from '../img/image5.png';
import image9 from '../img/img2.png'
import img from '../img/image.png'


export default function Index() {
    const [isOpen, setIsOpen] = useState(false);
    const { user, logout } = useAuth();
    const images = [
        image1,
        image2,
        image3,
        image4,
        image5,
        image6,        
        image8,
        image9
    ];
    return (
        <>
            <nav className="sticky top-0 w-full bg-white shadow-sm z-50">
    <div className="container mx-auto flex items-center justify-between p-4 lg:p-0">
        {/* Logo */}
        <div className="flex items-center">
            <img
                className="w-14 h-14 sm:w-20 sm:h-20"
                src={img}
                alt="Symphony Logo"
            />
        </div>

        {/* Menu icon for mobile */}
        <div className="lg:hidden">
            <button onClick={() => setIsOpen(!isOpen)}>
                {isOpen ? (
                    <IoClose className="w-8 h-8" />
                ) : (
                    <IoMenu className="w-8 h-8" />
                )}
            </button>
        </div>

        {/* Links and search bar for larger screens */}
        <div className="hidden lg:flex items-center space-x-5">
            
            

            {!user ? (
                <>
                    <Link
                        to="/login"
                        className="text-white font-semibold bg-blue-300 border-2 border-blue-300 py-2 px-3 rounded-lg hover:bg-blue-400 hover:border-blue-400 hover:text-white transition duration-500 ease-in-out"
                    >
                        Iniciar sesión
                    </Link>
                    <Link
                        to="/sign-up"
                        className="text-white font-semibold bg-blue-500 border-2 border-blue-500 py-2 px-3 rounded-lg hover:bg-blue-600 hover:border-blue-600 hover:text-white transition duration-500 ease-in-out"
                    >
                        Crear cuenta
                    </Link>
                </>
            ) : (
                <>
                    <p className="font-medium text-lg sm:text-xl">¡Hola {user.name}!</p>
                    <button
                        onClick={logout}
                        className="text-white font-semibold bg-blue-500 border-2 border-blue-500 py-2 px-3 rounded-lg hover:bg-blue-600 hover:border-blue-600 hover:text-white transition duration-500 ease-in-out"
                    >
                        Cerrar sesión
                    </button>
                </>
            )}
        </div>
    </div>

    {/* Mobile menu */}
    {isOpen && (
        <div className="absolute top-0 left-0 w-full h-screen bg-white z-40 flex flex-col items-center p-8 space-y-6 text-center shadow-lg lg:hidden">
            {/* Close button */}
            <button onClick={() => setIsOpen(false)} className="absolute top-4 right-4 text-gray-700">
                <IoClose className="w-8 h-8" />
            </button>

            <ScrollLink
                to="home"
                spy={true}
                smooth={true}
                offset={-70}
                duration={500}
                className="w-full py-4 text-lg font-medium text-gray-700 hover:bg-gray-100 rounded-lg"
                onClick={() => setIsOpen(false)}
            >
                Inicio
            </ScrollLink>
            <ScrollLink
                to="about-us"
                spy={true}
                smooth={true}
                offset={-70}
                duration={500}
                className="w-full py-4 text-lg font-medium text-gray-700 hover:bg-gray-100 rounded-lg"
                onClick={() => setIsOpen(false)}
            >
                Nosotros
            </ScrollLink>
            <div className="w-full flex items-center justify-center relative text-gray-500">
                <IoSearch className="absolute left-3 w-5 h-5" />
                <input
                    type="text"
                    name="search"
                    placeholder="Buscar..."
                    className="w-full py-2 pl-10 pr-3 font-semibold text-black placeholder-gray-500 rounded-lg border-none ring-2 ring-gray-300"
                />
            </div>

            {!user ? (
                <>
                    <Link
                        to="/login"
                        className="w-full py-3 text-white font-semibold bg-blue-300 border-2 border-blue-300 rounded-lg hover:bg-blue-400 hover:border-blue-400 hover:text-white transition duration-500 ease-in-out"
                        onClick={() => setIsOpen(false)}
                    >
                        Iniciar sesión
                    </Link>
                    <Link
                        to="/sign-up"
                        className="w-full py-3 text-white font-semibold bg-blue-500 border-2 border-blue-500 rounded-lg hover:bg-blue-600 hover:border-blue-600 hover:text-white transition duration-500 ease-in-out"
                        onClick={() => setIsOpen(false)}
                    >
                        Crear cuenta
                    </Link>
                </>
            ) : (
                <>
                    <p className="font-medium text-lg sm:text-xl">¡Hola {user.name}!</p>
                    <button
                        onClick={() => {
                            logout();
                            setIsOpen(false);
                        }}
                        className="w-full py-3 text-white font-semibold bg-blue-500 border-2 border-blue-500 rounded-lg hover:bg-blue-600 hover:border-blue-600 hover:text-white transition duration-500 ease-in-out"
                    >
                        Cerrar sesión
                    </button>
                </>
            )}
        </div>
    )}
</nav>


            <div className="min-h-screen bg-gray-100 p-6">
            <h1 className="text-4xl font-bold text-center mb-8">Galería de Fotos</h1>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                {images.map((image, index) => (
                    <div
                        key={index}
                        className="relative overflow-hidden rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300"
                    >
                        <img
                            src={image}
                            alt={`Imagen ${index + 1}`}
                            className="w-full h-56 object-cover"
                        />
                    </div>
                ))}
            </div>
        </div>



            
        </>
    )
}