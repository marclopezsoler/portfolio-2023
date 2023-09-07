import dynamic from "next/dynamic";

const HomePage = dynamic(() => import("./HomePage"), {
  ssr: false,
});

const App = () =>{
  const pageTitle= "marc lópez portfolio";

  return <HomePage title={pageTitle} />;
}

export default App;
