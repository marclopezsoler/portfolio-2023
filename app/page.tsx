import dynamic from "next/dynamic";

const App = dynamic(() => import("./HomePage"), {
  ssr: false,
});

export default App;
