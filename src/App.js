import Heading from "./Component/Heading";
import Premium from "./Component/Premium";
import Upgradebutton from "./Component/Upgradebutton";
import "./styles.css";

export default function App() {
  return (
    <div className="App">
      <Heading name="Save time and write with confidence" />
      <br />
      <Upgradebutton />
      <br />
      <br />
      <Heading name="Experience the full power of QuillBot" />
      <br />
      <Premium />
    </div>
  );
}
