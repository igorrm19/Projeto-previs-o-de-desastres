import SvdIlustration from "../components/svdIlustration";
import useHooksNavigation from "../../../hooks/navegation";

function ErrorPage() {
    const { goToLogin } = useHooksNavigation();

  return (
    <>
      <main className="bg-gray-900 text-white min-h-screen flex items-center justify-center flex-col space-y-4">
        <div className="">
          <SvdIlustration />
        </div>

        <div>
          <h1 className="font-bold text-4xl space-y-4 text-blue-500">404</h1>

          <p>Page Not Found</p>

           <button onClick={goToLogin} className="w-1/2 px-5 py-2 text-sm tracking-wide text-white transition-colors duration-200 bg-blue-900 rounded-lg shrink-0 sm:w-auto hover:bg-blue-600 dark:hover:bg-blue-500 dark:bg-blue-600">
                    Back to home
          </button>

        </div>
      </main>
    </>
  );
}
export default ErrorPage;


