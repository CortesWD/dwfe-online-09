/**
 * Components
 */
import Inner from "./components/InnerFunction";
import MultipleA from "./components/MultipleA";
import MultipleB from "./components/MultipleB";
import MultipleC from "./components/MultipleC";
import Ternary from "./components/Ternary";

export default function RenderTypes() {
  return (
    <div className="App">
      <h1>Render Types</h1>
      <Ternary condition />
      {<Inner />}
      <MultipleA type="1" />
      <MultipleA type="2" />
      {<MultipleA />}
      {<MultipleB type="2" />}
      {<MultipleC />}
    </div>
  );
}