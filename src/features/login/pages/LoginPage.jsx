import InformationCadrasto from "../components/informationCadrasto";

const LoginPage = () => {
  return (
    <>
      <div className="bg-gray-900 text-white min-h-screen flex items-center justify-center flex-col space-y-7">
        <div className="w-[80%] max-w-9xl mx-auto mt-12  min-h-[700px]  shadow-xl flex">
          <div className="flex w-1/2 flex-col justify-center items-center pr-6 bg-teal-700">
            <InformationCadrasto />
          </div>
          <div className="text-black flex w-1/2 flex-col justify-center items-center pr-6 bg-white">
            2
          </div>
        </div>
      </div>
    </>
  );
};

export default LoginPage;
