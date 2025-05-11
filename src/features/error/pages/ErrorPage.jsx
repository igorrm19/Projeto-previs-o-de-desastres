import SvdIlustration from "../components/svdIlustration";
import useHooksNavigation from "../../../hooks/navegation";
import BUTTON from "../../../components/button";

function ErrorPage() {
  const { goToLogin } = useHooksNavigation();

  return (
    <>
      <div className="bg-gray-900 text-white min-h-screen flex items-center justify-center flex-col space-y-4">
        <div className="">
          <SvdIlustration />
        </div>

        <div>
          <h1 className="font-bold text-4xl space-y-4 text-blue-500">404</h1>

          <p>Page Not Found</p>

          <BUTTON onClick={goToLogin} text="Back to home" />
        </div>
      </div>
    </>
  );
}

export default ErrorPage;
//
