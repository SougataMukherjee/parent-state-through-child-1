import { useState } from "react";
import Child from "./Child";
import PropTypes from "prop-types";
const App = () => {
  const [activeTab, setActiveTab] = useState(1);
  const [fruit, setFruit] = useState({ fruit1: "apple", fruit2: "mango" });

  const handleTabChange = (tabNumber) => {
    setActiveTab(tabNumber);
  };
  const handleFruitChange = (newFruit, key) => {
    setFruit({
      ...fruit,
      [key]: newFruit.target.value,
    });
  };

  return (
    <div>
      <div className="tabs">
        <button
          className={activeTab === 1 ? "active" : ""}
          onClick={() => handleTabChange(1)}
        >
          Tab1
        </button>
        <button
          className={activeTab === 2 ? "active" : ""}
          onClick={() => handleTabChange(2)}
        >
          Tab2
        </button>
      </div>

      <div className="tab-content">
        {activeTab === 1 && (
          <>
            <a href="#*">Tab1 Link</a>
            <Child fruit={fruit} onFruitChange={handleFruitChange} />
          </>
        )}

        {activeTab === 2 && <a href="##">Tab2 Link</a>}
      </div>
    </div>
  );
};
App.propTypes = {
  fruit: PropTypes.shape({
    fruit1: PropTypes.string.isRequired,
    fruit2: PropTypes.string.isRequired,
  }).isRequired,
  onFruitChange: PropTypes.func.isRequired,
};
export default App;
