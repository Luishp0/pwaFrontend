import React from "react";
import { Link } from "react-router-dom";
import { login } from "..";
import { useAuth } from "../context/AuthContext";
import { FaEnvelope, FaLock } from "react-icons/fa";

export default function Login() {
    const { user } = useAuth();

    return (
        <div className="flex min-h-screen items-center justify-center bg-blue-100 px-6 py-12">
            <div className="w-full max-w-md bg-white p-8 rounded-lg shadow-lg">
                <div className="text-center">
                    <h2 className="text-3xl font-bold text-gray-800">
                        {user?.name || "Usuario"} Iniciar Sesión
                    </h2>
                </div>
                <form className="mt-6 space-y-5" onSubmit={(event) => login(event)}>
                    {/* Input Correo electrónico */}
                    <div>
                        <label
                            htmlFor="email"
                            className="block text-sm font-medium text-gray-700"
                        >
                            Correo electrónico
                        </label>
                        <div className="relative mt-2">
                            <span className="absolute inset-y-0 left-0 flex items-center pl-3 text-gray-400">
                                <FaEnvelope />
                            </span>
                            <input
                                required
                                id="email"
                                name="email"
                                type="email"
                                autoComplete="email"
                                className="w-full pl-10 px-4 py-2 text-gray-900 border rounded-md shadow-sm focus:ring-2 focus:ring-indigo-400 focus:outline-none"
                            />
                        </div>
                    </div>

                    {/* Input Contraseña */}
                    <div>
                        <label
                            htmlFor="password"
                            className="block text-sm font-medium text-gray-700"
                        >
                            Contraseña
                        </label>
                        <div className="relative mt-2">
                            <span className="absolute inset-y-0 left-0 flex items-center pl-3 text-gray-400">
                                <FaLock />
                            </span>
                            <input
                                required
                                id="password"
                                name="password"
                                type="password"
                                autoComplete="current-password"
                                className="w-full pl-10 px-4 py-2 text-gray-900 border rounded-md shadow-sm focus:ring-2 focus:ring-indigo-400 focus:outline-none"
                            />
                        </div>
                    </div>

                    {/* Botón */}
                    <button
                        type="submit"
                        className="w-full py-3 mt-4 text-white bg-indigo-600 rounded-md hover:bg-indigo-700 focus:ring-2 focus:ring-indigo-400 focus:ring-offset-1 transition duration-300"
                    >
                        Iniciar sesión
                    </button>
                </form>

                <div className="text-center mt-6">
                    <p className="text-sm text-gray-600">
                        ¿Aún no tienes una cuenta?{" "}
                        <Link
                            to="/sign-up"
                            className="text-indigo-500 hover:text-indigo-700 font-semibold"
                        >
                            Crea tu cuenta aquí
                        </Link>
                    </p>
                </div>

                {/* Botón para regresar al Index */}
                <div className="text-center mt-4">
                    <Link
                        to="/"
                        className="inline-block mt-3 py-2 px-4 text-indigo-600 border border-indigo-600 rounded-lg font-medium hover:bg-indigo-600 hover:text-white transition duration-300"
                    >
                        Volver al Inicio
                    </Link>
                </div>
            </div>
        </div>
    );
}
