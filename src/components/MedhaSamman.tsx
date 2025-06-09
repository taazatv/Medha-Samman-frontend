import { Link } from 'react-router-dom';

function MedhaSamman() {
  return (
    <div className="flex justify-center p-8 bg-gradient-to-br from-[#e0eafc] to-[#cfdef3] w-screen">
      <table className="border-collapse w-[90vw] max-w-[1000px] border border-gray-300 shadow-lg bg-white rounded-2xl overflow-hidden">
        <tbody>
          <tr className="transition hover:bg-slate-100 hover:scale-[1.01]">
            <td className="border border-gray-300 p-5 text-center font-semibold bg-[#e6f0fa] text-gray-800 text-lg">
              Medha Samman Class 10
            </td>
            <td className="border border-gray-300 p-5 text-center text-base">
              <Link to="/kolkata/class-10" className="text-blue-600 font-semibold hover:underline">
                Kolkata
              </Link>
            </td>
            <td className="border border-gray-300 p-5 text-center text-base">
              <Link to="/ranchi/class-10" className="text-blue-600 font-semibold hover:underline">
                Ranchi
              </Link>
            </td>
          </tr>
          <tr className="transition hover:bg-slate-100 hover:scale-[1.01]">
            <td className="border border-gray-300 p-5 text-center font-semibold bg-[#e6f0fa] text-gray-800 text-lg">
              Medha Samman Class 12
            </td>
            <td className="border border-gray-300 p-5 text-center text-base">
              <Link to="/kolkata/class-12" className="text-blue-600 font-semibold hover:underline">
                Kolkata
              </Link>
            </td>
            <td className="border border-gray-300 p-5 text-center text-base">
              <Link to="/ranchi/class-12" className="text-blue-600 font-semibold hover:underline">
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