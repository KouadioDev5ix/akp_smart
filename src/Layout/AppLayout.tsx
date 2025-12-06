import { useEffect, useState } from "react";
import akp_smart from "../Asset/Img/Logo_AKP.jpg";
import { navBarData } from "../Constant/NavBarData";
import { NavLink, Outlet, useNavigate } from "react-router-dom";
import { LogOut } from "lucide-react";
import LoaderComponent from "../components/Loader";

export default function AppLayout() {
  const [logOutLoading, setLogOutLoading] = useState<boolean>(false);

  const navigateTo = useNavigate();

  /**
   * Handle Log Out -   Simulate a log out process with a loading state
   */
  const handlelogOut = () => {
    setLogOutLoading(true);

    setTimeout(() => {
      setLogOutLoading(false);
      navigateTo("/login");
    }, 2000);
  };
/**
 * Open Dialog Modal - Open the log out confirmation modal
 */
  const openDialogModal = () => {
    (document.getElementById("deconnection") as HTMLDialogElement).showModal();
    setLogOutLoading(false);
  };

  /**
   * Close Modal - Close the log out confirmation modal
   */

  const closeModal = () => {
    (document.getElementById("deconnection") as HTMLDialogElement).close();
  };

  useEffect(() => {}, []);

  return (
    <div className="flex h-screen w-full overflow-hidden">
      <div className="h-full w-80 bg-main ">
        <div className="pt-5 flex  items-center justify-center px-4">
          <div>
            <div className="flex items-center justify-center">
              <img className="w-28 h-auto" src={akp_smart} alt="logo" />
            </div>
            <h1 className="text-xl pt-4 text-white leading-3 font-extrabold ml-6 ">
              AKP - SMART
            </h1>
          </div>
        </div>

        {/* NAVIGATIONS */}
        <div className="flex-col items-center justify-center pt-7 px-4 py-4 gap-1">
          <div>
            {navBarData.map((item) => (
              <NavLink
                key={item.id}
                to={item.href}
                className={({ isActive }) =>
                  isActive
                    ? "flex items-center gap-1 py-2 px-2 my-1 text-sm font-semibold rounded-lg hover:bg-navbar hover:text-white text-white bg-orange-600 "
                    : "flex items-center gap-1 py-2 px-2 my-1 text-white bg-sideBarLinkIsActiveBg text-sbbsWhite  text-sm font-semibold rounded-lg hover:bg-orange-600 hover:text-white "
                }
              >
                <span>{item.icon}</span>
                {item.label}
              </NavLink>
            ))}
          </div>
        </div>

        <button
          className="text-white font-semibold text-md ml-3.5 absolute bottom-5 bg-sbbsRed flex items-center justify-center w-56 py-2 rounded-md gap-2 cursor-pointer transition-all bg-red-600"
          onClick={openDialogModal}
        >
          <LogOut className="text-white w-4 h-4" size={24} />
          Se deconnecter
        </button>
      </div>

      {/* OUTLET (THE CHILDREN) */}
      <div className="outlet overflow-y-scroll w-full no-scrollbar p-4">
        <Outlet />
      </div>

      <dialog id="deconnection" className="modal items-start pt-10 rounded-lg">
        <div className="modal-box p-3">
          <form method="dialog">
            {/* if there is a button in form, it will close the modal */}
            <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">
              ✕
            </button>
          </form>

          <div className="my-4">
            <h1 className="text-xl font-extrabold leading-3 ">
              Se deconnecter
            </h1>
          </div>

          {/* <div>
            {requestHasError && (
              <span className="text-sbbsRed text-white text-sm">
                {errorMessage}
              </span>
            )}
          </div> */}

          <div className={`h-fit`}>
            <div className="mt-4 pb-5">
              <p className=" text-sm font-normal">
                Vous êtes sur le point de vous déconnecter. Toutes les
                modifications non enregistrées seront perdues. <br />{" "}
                Souhaitez-vous vraiment continuer ?
              </p>
            </div>
          </div>

          <div className="flex items-center gap-4">
            <button
              disabled={logOutLoading}
              className={`
                ${
                  logOutLoading
                    ? "cursor-not-allowed w-full h-10 bg-red-600 rounded-md text-white"
                    : "w-full h-10 bg-red-600 rounded-md text-white"
                }   
              `}
              onClick={handlelogOut}
            >
              {logOutLoading ? (
                <span className="flex items-center justify-center">
                  <>
                    <LoaderComponent />
                  </>
                </span>
              ) : (
                "Me deconnecter"
              )}
            </button>

            <button
              className={`${
                logOutLoading
                  ? "cursor-not-allowed w-full h-10 bg-gray-200 rounded-md text-black"
                  : "w-full h-10 bg-gray-200 rounded-md text-black"
              }`}
              onClick={closeModal}
            >
              Annuler
            </button>
          </div>
        </div>
      </dialog>
    </div>
  );
}
