import SvdIlustration from "../components/svdIlustration";
import useHooksNavigation from "../../../hooks/navegation";

function ErrorPage() {
    const { goToLogin } = useHooksNavigation();
  
  
  return (
    <>
      <main className="bg-fuchsia-700  min-h-screen flex items-center justify-center flex-col space-y-4">
        <div className="">
          <SvdIlustration />
        </div>
        <div>
          <h1 className="font-bold text-4xl space-y-4">404</h1>
          <p>Page Not Found</p>
          <button onClick={goToLogin}  className="w-36 h-11 bg-gradient-to-r from-blue-800 via-orange-600 to-orange-700 text-gray-50 shadow-2xl rounded-xl hover:from-purple-800 hover:via-orange-600 hover:to-orange-700  transition-all duration-300">Back for home</button>
        </div>
      </main>
    </>
  );
}
export default ErrorPage;


