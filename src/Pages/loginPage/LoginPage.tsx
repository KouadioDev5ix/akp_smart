import { useState } from "react";
import akp_smart from "../../Asset/akp_logo_actualise.jpg";
import { Eye, EyeClosed, LockKeyhole, User } from "lucide-react";
import { useNavigate } from "react-router-dom";
import LoaderComponent from "../../components/Loader";

export default function LoginPage() {
  // const [searchParams, setSearchParams] = useSearchParams();

  const [isPasswordVisible, setIsPasswordVisible] = useState<boolean>(false);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const navigate = useNavigate();

  /**
   * Toggle password visibility
   *
   */
  const togglePasswordVisibility = () => {
    setIsPasswordVisible(!isPasswordVisible);
  };

  const handleLogin = () => {
    setIsLoading(true);
    setTimeout(() => {
      navigate("/dashboard");
      setIsLoading(false);
    }, 1000);
    // Logic de connexion ici
  };

  return (
    <div className="w-full min-h-screen flex items-center justify-center bg-white p-8">
      {/* THIS IS THE CONTAINER */}

      <div className="w-full max-w-[950px] flex flex-col md:flex-row shadow-2xl rounded-2xl overflow-hidden">
        {/* LEFT SIDE */}

        <div className="w-full md:w-1/2 flex flex-col justify-between p-7 bg-main text-white">
          <div>
            <h1>
              AKP - SMART <br /> Système de Management Agricole et de Ressources
              Territoriales
            </h1>
          </div>

          <div className="text-sm ">&copy; 2024 AKP - All rights reserved.</div>
        </div>

        {/* RIGTH SIDE */}
        <div className="w-full md:w-1/2 p-8">
          <div className="w-full mx-auto space-y-8">
            {/* Logo */}
            <div className="flex items-center justify-center">
              <img
                src={akp_smart}
                alt="image de l'ANADER CI"
                className="w-24 h-auto"
              />
            </div>

            <h1 className="text-center text-gray-600 my-4">
              Bienvenue, veuillez vous authentifier !
            </h1>

            <div className="pt-4 w-full space-y-6">
              {/* Nom utilisateur */}
              <div>
                <label htmlFor="username" className="text-sm text-gray-900">
                  Nom utilisateur
                </label>
                <div className="relative">
                  <input
                    type="text"
                    id="username"
                    placeholder="Entrez votre nom d’utilisateur"
                    className="w-full border border-gray-300 rounded-md px-4 py-2 pl-10 focus:ring-1 focus:ring-gray-600 focus:outline-none"
                  />
                  <User className="w-4  absolute left-3 top-1/2 -translate-y-1/2" />
                </div>
              </div>

              {/* Mot de passe */}
              <div>
                <label htmlFor="password" className="text-sm text-gray-900">
                  Mot de passe
                </label>
                <div className="relative">
                  <input
                    type={isPasswordVisible ? "text" : "password"}
                    id="password"
                    placeholder="Entrez votre mot de passe"
                    className="w-full border border-gray-300 rounded-md px-4 py-2 pl-10 focus:ring-1 focus:ring-gray-600 focus:outline-none"
                  />

                  <LockKeyhole className="w-4 absolute left-3 top-1/2 -translate-y-1/2" />
                  <button
                    type="button"
                    className="absolute right-3 top-1/2 -translate-y-1/2"
                    onClick={togglePasswordVisibility}
                  >
                    {isPasswordVisible ? <Eye /> : <EyeClosed />}
                  </button>
                </div>
              </div>

              {/* Bouton */}
              <div onClick={handleLogin}>
                <button className="flex items-center justify-center w-full h-14 bg-orange-600 text-white rounded-md transition">
                  {isLoading ? (
                    <>
                      <LoaderComponent />
                    </>
                  ) : (
                    " Se connecter"
                  )}
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
