import { Notification } from "./notification";

const App = () => {
  return (
    <div className="App bg-[#EEEEEE]">
      <div className="flex min-h-screen flex-col justify-between">
        <header className="mb-[2rem] h-[5rem] w-full bg-[#222831] bg-opacity-50"></header>
        <main className="h-[100rem] flex-grow">
          <Notification />
        </main>
        <footer className="mt-[5rem] h-[5rem] w-full bg-[#393E46] bg-opacity-70"></footer>
      </div>
    </div>
  );
};

export default App;
