import { useState } from "react";
import { BsArrowDown, BsArrowUp } from "react-icons/bs";

const SimulatorForm = () => {
  const [range, setRange] = useState(3);
  const [capital, setCapital] = useState(0);
  const [euract, setEuract] = useState(0);
  const [diferencial, setDiferencial] = useState(0);
  const [eursim, setEursim] = useState(0);
  const [cuotact, setCuotact] = useState(0);
  const [cuotsim, setCuotsim] = useState(0);
  const [result, setresult] = useState();
  const [visible, setvisible] = useState(false);

  const formatCuot = (cuot) => {
    return cuot
      .toFixed(2)
      .replace(".", ",")
      .replace(/\B(?=(\d{3})+(?!\d))/g, ".");
  };

  const calcSim = () => {
    const G4 = Number(capital);
    const G6 = (Number(euract) + Number(diferencial)) / 100 / 12;
    const G6sim = (Number(eursim) + Number(diferencial)) / 100 / 12;
    const G8 = Number(range) * 12;

    const act = G4 / ((1 - (1 + G6) ** -G8) / G6);
    const sim = G4 / ((1 - (1 + G6sim) ** -G8) / G6sim);

    sim > act ? setresult(true) : setresult(false);

    setCuotact(formatCuot(act));
    setCuotsim(formatCuot(sim));

    setvisible(true);
  };

  return (
    <>
      <section
        id="simulator"
        className="flex justify-center items-center flex-col"
      >
        <label
          className="block tracking-wide text-xs font-bold mb-2"
          htmlFor="range_years"
        >
          PLAZO DE HIPOTECA
        </label>
        <input
          id="range_years"
          type="range"
          value={range}
          max="40"
          min="3"
          className="w-full h-2 accent-black bg-yellow-400 rounded-lg appearance-none cursor-pointer"
          onChange={(e) => setRange(e.target.value)}
        />
        <div className="text-center text-sm">
          <input
            type="number"
            name="input_years"
            id="input_years"
            min="3"
            max="40"
            value={range}
            onChange={(e) => setRange(e.target.value)}
            className="mt-2 mr-2 w-10 rounded-lg border border-black bg-gray-50 focus:bg-yellow-50 p-1 text-center"
            required
          />
          años
        </div>

        <label
          className="block tracking-wide text-xs font-bold mt-4 mb-2"
          htmlFor="capital_input"
        >
          CAPITAL PENDIENTE
        </label>
        <input
          type="number"
          id="capital_input"
          min="0"
          value={capital}
          onChange={(e) => setCapital(e.target.value)}
          className="text-center bg-gray-50 border border-black focus:bg-yellow-50 text-sm rounded-lg block w-full p-1"
          placeholder="€"
          required
        ></input>

        <label
          className="block tracking-wide text-xs font-bold mt-4 mb-2"
          htmlFor="euract_input"
        >
          EURIBOR ACTUAL
        </label>
        <input
          type="number"
          id="euract_input"
          value={euract}
          min="0"
          onChange={(e) => setEuract(e.target.value)}
          className="text-center bg-gray-50 border border-black focus:bg-yellow-50 text-sm rounded-lg block w-full p-1"
          placeholder="%"
          required
        ></input>

        <label
          className="block tracking-wide text-xs font-bold mt-4 mb-2"
          htmlFor="diferencial_input"
        >
          DIFERENCIAL
        </label>
        <input
          type="number"
          id="diferencial_input"
          min="0"
          value={diferencial}
          onChange={(e) => setDiferencial(e.target.value)}
          className="text-center bg-gray-50 border border-black focus:bg-yellow-50 text-sm rounded-lg block w-full p-1"
          placeholder="%"
          required
        ></input>

        <label
          className="block tracking-wide text-xs font-bold mt-4 mb-2"
          htmlFor="eursim_input"
        >
          EURIBOR SIMULADO
        </label>
        <input
          type="number"
          id="eursim_input"
          min="0"
          value={eursim}
          onChange={(e) => setEursim(e.target.value)}
          className="text-center bg-gray-50 border border-black focus:bg-yellow-50 text-sm rounded-lg block w-full p-1"
          placeholder="%"
          required
        ></input>

        <button
          onClick={calcSim}
          className="mt-4 py-1 px-2 text-xs font-bold bg-yellow-400 hover:bg-yellow-600 hover:text-white border border-black rounded"
        >
          CALCULAR
        </button>
      </section>

      <section id="table_results" className={`mt-4 ${visible ? "" : "hidden"}`}>
        <table className="w-full text-sm text-gray-500">
          <thead className="text-xs text-gray-700 bg-gray-50 ">
            <tr>
              <th scope="col" className="py-3 px-6 text-center">
                CUOTA ACTUAL
              </th>
              <th scope="col" className="py-3 px-6 text-center">
                CUOTA SIMULADA
              </th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td scope="row" className="text-center py-4 px-6 text-indigo-600">
                {cuotact}€
              </td>
              <td
                className={`text-center py-4 px-6 ${
                  result ? "text-red-500 " : "text-green-500"
                }`}
              >
                {result ? (
                  <BsArrowUp className="inline" />
                ) : (
                  <BsArrowDown className="inline" />
                )}
                {cuotsim}€
              </td>
            </tr>
          </tbody>
        </table>
      </section>
    </>
  );
};

export default SimulatorForm;
