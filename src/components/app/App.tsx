import { useEffect } from "react";
import { callApi } from "../../utils/api";

const App = () => {
  useEffect(() => {
    callApi().then((data) => console.log(data));
  }, []);
  return <div>Hello</div>;
};

export default App;
