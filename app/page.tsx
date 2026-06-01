import loadDynamic from "next/dynamic";

export const dynamic = "force-static";

const App = loadDynamic(() => import("./HomePage"), {
  ssr: false,
});

export default App;
