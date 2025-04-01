import SvdIlustration from "../components/svdIlustration";

function ErrorPage() {

  return (
    <>
      <main className="bg-fuchsia-900  min-h-screen flex items-center justify-center">
        <div className="absolute">
          <SvdIlustration />
        </div>
        <div className="absolute">
          <h1>404</h1>
          <p>Page Not Found</p>
          <button>Back for home</button>
        </div>
      </main>
    </>
  );
}
export default ErrorPage;


