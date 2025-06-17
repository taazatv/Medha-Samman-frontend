import { Link } from "react-router-dom";
import "./MedhaSamman.css"; // Import custom CSS

function MedhaSamman() {
  return (
    <div className="relative mt-4 flex w-full items-center justify-evenly rounded-xl bg-[#e7c91ce8] p-8 max-md:flex-col">
      <img className="w-1/8 max-md:w-2/3" src="/Medha-logo.png" />
      <div className="top-6 right-72 text-lg font-bold text-black md:absolute md:self-end"></div>
      <table className="max-w-[1000px] border-collapse overflow-hidden rounded-2xl border border-gray-300 bg-white shadow-lg md:w-[90vw]">
        <tbody>
          <tr className="transition hover:scale-[1.01] hover:bg-slate-100">
            <td className="border border-gray-300 bg-[#e6f0fa] p-5 text-center text-lg font-semibold text-gray-800">
              Medha Samman 2025 - Class 10
            </td>
            <td className="border border-gray-300 p-5 text-center text-base">
              <Link
                to="/kolkata/class-10"
                className="font-semibold text-blue-600 hover:underline"
              >
                Kolkata
              </Link>
            </td>
            <td className="border border-gray-300 p-5 text-center text-base">
              <Link
                to="/ranchi/class-10"
                className="font-semibold text-blue-600 hover:underline"
              >
                Ranchi
              </Link>
            </td>
          </tr>

          <tr className="transition hover:scale-[1.01] hover:bg-slate-100">
            <td className="border border-gray-300 bg-[#e6f0fa] p-5 text-center text-lg font-semibold text-gray-800">
              Medha Samman 2025 - Class 12
            </td>
            <td className="border border-gray-300 p-5 text-center text-base">
              <Link
                to="/kolkata/class-12"
                className="zoom-animation font-semibold text-lg text-red-600"
              >
                Kolkata
              </Link>
            </td>
            <td className="border border-gray-300 p-5 text-center text-base">
              <Link
                to="/ranchi/class-12"
                className="font-semibold text-blue-600 hover:underline"
              >
                Ranchi
              </Link>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}

export default MedhaSamman;
