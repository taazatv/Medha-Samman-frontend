import { Link } from "react-router-dom";

function MedhaSamman() {
  return (
    <div className="relative flex w-fit flex-col items-center justify-center rounded-xl bg-[#dd1f58] p-8">
      <div className="absolute top-2 self-end pr-24 text-white">
        Click here for more updates
      </div>
      <table className="w-[90vw] max-w-[1000px] border-collapse overflow-hidden rounded-2xl border border-gray-300 bg-white shadow-lg">
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
                className="font-semibold text-blue-600 hover:underline"
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
