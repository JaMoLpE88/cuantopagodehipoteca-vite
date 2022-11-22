import { BsFillSquareFill } from "react-icons/bs";
import SimulatorForm from "../components/SimulatorForm";

const Page = () => {
  return (
    <main className="flex flex-col">
      <section className="flex flex-col space-y-4">
        <div className="flex flex-col space-y-2">
          <h1 className="flex items-center justify-start space-x-2 pl-4 font-medium text-sm">
            <BsFillSquareFill className="inline text-indigo-600" />
            <span className="text-2xl italic">Hipoteca Fija</span>
          </h1>
          <p className="flex text-justify indent-10">
            En una hipoteca fija, el tipo de interés será el mismo siempre,
            durante toda la vida del préstamo, y será el pactado con el banco,
            por lo que la cuota mensual será siempre la misma.
          </p>
        </div>
        <div className="flex flex-col space-y-2">
          <h1 className="flex items-center justify-start space-x-2 pl-4 font-medium text-sm">
            <BsFillSquareFill className="inline text-indigo-600" />
            <span className="text-2xl italic">Hipoteca Variable</span>
          </h1>
          <p className="flex text-justify indent-10">
            Una hipoteca variable, a diferencia de la anterior, es aquella en la
            que el importe de las cuotas mensuales fluctúa según lo haga su
            índice de referencia más conocido como el euribor. A este índice de
            referencia se le debe sumar el diferencial fijo y se revisa la cuota
            año tras año o de manera semestral.
          </p>
        </div>
        <div className="flex flex-col space-y-2">
          <h1 className="flex items-center justify-start space-x-2 pl-4 font-medium text-sm">
            <BsFillSquareFill className="inline text-indigo-600" />
            <span className="text-2xl italic">Euribor</span>
          </h1>
          <p className="flex text-justify indent-10">
            El euríbor es el acrónimo de Tipo Europeo de Oferta Interbancaria.
            Es decir, el tipo de interés al que las entidades de crédito están
            dispuestas a prestarse fondos en euros entre sí.
          </p>
          <p className="flex text-justify indent-10">
            Es el tipo de interés interbancario para depósitos en euros que
            entró en vigor el 1 de enero de 1999. Utilizado comúnmente como tipo
            de referencia para préstamos con interés variable.
          </p>
        </div>
      </section>

      <section className="flex justify-center items-center my-4 flex-col md:flex-row space-y-4 md:space-y-0">
        <div className="flex md:w-1/2 justify-center">
          <img
            src="./finance_main.svg"
            alt="Finance Main"
            width="350"
            height="1"
            className="max-w-full h-auto"
          />
        </div>
        <div className="flex flex-col md:w-1/2">
          <div className="flex flex-col">
            <h1 className="flex items-center justify-start space-x-2 pl-4 font-medium text-sm">
              <BsFillSquareFill className="inline text-yellow-400" />
              <span className="text-2xl italic">Simulador</span>
            </h1>
            <p className="flex text-justify indent-10">
              Seleccione el plazo de la hipoteca, el euribor actual que tiene en
              vigor hasta la siguiente revisión, el diferencial y el euribor que
              quiere simular para así comparar y ver la diferencia de una cuota
              con otra.
            </p>
          </div>
        </div>
      </section>

      <SimulatorForm />
    </main>
  );
};

export default Page;
