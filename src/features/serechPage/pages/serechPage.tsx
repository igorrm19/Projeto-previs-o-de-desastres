function SearechPage() {
  return (
    <>
      <div className="bg-gray-900 h-screen w-screen flex items-center justify-center">
        <form className="flex flex-col md:flex-row gap-3">
          <div className="flex">
            <input
              type="search"
              placeholder="Procurar por sua cidade"
              className="w-[55vh] px-3 h-14  border-none  border-gray-300  click:border-blue-700 focus:border-blue-700 focus:outline-none"
              style={{ borderRadius: "8px 0 0 8px" }}
            ></input>

            <button
              type="submit"
              className=" text-white transition-colors duration-200 bg-blue-700  shrink-0  hover:bg-blue-600 dark:hover:bg-blue-500 dark:bg-blue-600rounded-r px-2 md:px-3 py-0 md:py-1"
              style={{ borderRadius: "0 8px 8px 0" }}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="25"
                height="25"
                fill="currentColor"
                className="text-white"
                viewBox="0 0 16 16"
              >
                <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001q.044.06.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1 1 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0" />
              </svg>
            </button>
          </div>
        </form>
      </div>
    </>
  );
}

export default SearechPage;
