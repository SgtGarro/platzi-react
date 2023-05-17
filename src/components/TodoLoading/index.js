import "./TodoLoading.css";

function TodoLoading() {
  return (
    <>
      <div className="loading-item">
        <div className="loading-item-check"></div>
        <p className="loading-item-text"></p>
        <div className="loading-item-close"></div>
      </div>
      <div className="loading-item">
        <div className="loading-item-check"></div>
        <p className="loading-item-text"></p>
        <div className="loading-item-close"></div>
      </div>
      <div className="loading-item">
        <div className="loading-item-check"></div>
        <p className="loading-item-text"></p>
        <div className="loading-item-close"></div>
      </div>
    </>
    // <>
    //   <svg
    //     className="loading-spinner"
    //     xmlns="http://www.w3.org/2000/svg"
    //     viewBox="581 510 38 38"
    //   >
    //     <g transform="matrix(1 0 0 -1 0 960)">
    //       <path
    //         fill="#3b5bdb"
    // d="M599.1,443h1.7c0.1,0,0.1,0,0.2-0.1c0.1,0,0.1-0.1,0.1-0.2v-4.4c0-0.1,0-0.1-0.1-0.2c-0.1,0-0.1-0.1-0.2-0.1   h-1.7c-0.1,0-0.1,0-0.2,0.1c-0.1,0.1-0.1,0.1-0.1,0.2v4.4c0,0.1,0,0.1,0.1,0.2C599,443,599,443,599.1,443z M605.1,441.9   c0.1,0,0.1,0,0.1,0l1.5-0.8c0.1,0,0.1-0.1,0.1-0.2c0-0.1,0-0.1,0-0.2l-2.2-3.8c0-0.1-0.1-0.1-0.2-0.1c-0.1,0-0.2,0-0.2,0v0   l-1.4,0.8c-0.1,0-0.1,0.1-0.1,0.2c0,0.1,0,0.2,0,0.2l2.2,3.8C604.9,441.8,605,441.9,605.1,441.9z M594.8,441.8c0.1,0,0.2,0,0.2-0.1   v0l2.2-3.8c0-0.1,0-0.1,0-0.2c0-0.1-0.1-0.1-0.1-0.2l-1.5-0.8c-0.1,0-0.2,0-0.2,0c-0.1,0-0.1,0.1-0.2,0.1l-2.2,3.8   c0,0.1,0,0.1,0,0.2c0,0.1,0.1,0.1,0.1,0.2l1.5,0.8C594.7,441.8,594.8,441.8,594.8,441.8z M609.7,437.9c0.1,0,0.2,0,0.2-0.1l0.8-1.5   c0-0.1,0-0.1,0-0.2s-0.1-0.1-0.1-0.2h0l-3.8-2.2c-0.1,0-0.1,0-0.2,0c-0.1,0-0.1,0.1-0.2,0.1l-0.8,1.5c0,0.1,0,0.2,0,0.2   c0,0.1,0.1,0.1,0.1,0.2l3.8,2.2C609.6,437.9,609.6,437.9,609.7,437.9z M590.3,437.8c0,0,0.1,0,0.1,0l3.8-2.2c0.1,0,0.1-0.1,0.1-0.2   c0-0.1,0-0.2,0-0.2l-0.8-1.4c0-0.1-0.1-0.1-0.2-0.1c-0.1,0-0.2,0-0.2,0l-3.8,2.2c-0.1,0-0.1,0.1-0.1,0.2c0,0.1,0,0.1,0,0.2l0.8,1.5   C590,437.8,590.1,437.8,590.3,437.8z M607.3,432.2h4.4c0.1,0,0.1,0,0.2-0.1c0,0,0.1-0.1,0.1-0.2v-1.7c0-0.1,0-0.1-0.1-0.2   c0-0.1-0.1-0.1-0.2-0.1h-4.4c-0.1,0-0.1,0-0.2,0.1c0,0.1-0.1,0.1-0.1,0.2v1.7c0,0.1,0,0.1,0.1,0.2   C607.2,432.2,607.3,432.2,607.3,432.2z M588.3,432.1h4.4c0.1,0,0.1,0,0.2-0.1c0-0.1,0.1-0.1,0.1-0.2v-1.7c0-0.1,0-0.1-0.1-0.2   c0-0.1-0.1-0.1-0.2-0.1h-4.4c-0.1,0-0.1,0-0.2,0.1c-0.1,0-0.1,0.1-0.1,0.2v1.7c0,0.1,0,0.1,0.1,0.2   C588.1,432,588.2,432.1,588.3,432.1z M606.8,428.4c0.1,0,0.1,0,0.1,0l3.8-2.2c0.1,0,0.1-0.1,0.1-0.2c0-0.1,0-0.1,0-0.2l-0.8-1.5   c0-0.1-0.1-0.1-0.2-0.1c-0.1,0-0.2,0-0.2,0l-3.8,2.2c-0.1,0-0.1,0.1-0.1,0.2c0,0.1,0,0.2,0,0.2h0l0.8,1.4   C606.6,428.3,606.7,428.4,606.8,428.4z M593.2,428.3c0.1,0,0.2,0,0.3-0.1l0.8-1.5c0-0.1,0-0.2,0-0.2c0-0.1-0.1-0.1-0.1-0.2   l-3.8-2.2c-0.1,0-0.1,0-0.2,0c-0.1,0-0.1,0.1-0.2,0.1l-0.8,1.5c0,0.1,0,0.1,0,0.2s0.1,0.1,0.1,0.2h0l3.8,2.2   C593.1,428.3,593.2,428.3,593.2,428.3z M604.5,425.4c0.1,0,0.2,0,0.2-0.1l2.2-3.8c0-0.1,0-0.1,0-0.2c0-0.1-0.1-0.1-0.1-0.2   l-1.5-0.8c-0.1,0-0.1,0-0.2,0c-0.1,0-0.1,0.1-0.2,0.1v0l-2.2,3.8c0,0.1,0,0.1,0,0.2c0,0.1,0.1,0.1,0.1,0.2l1.5,0.8   C604.4,425.4,604.4,425.4,604.5,425.4z M595.7,425.3l0.1,0l1.4-0.8c0.1,0,0.1-0.1,0.1-0.2c0-0.1,0-0.1,0-0.2l-2.2-3.8   c0-0.1-0.1-0.1-0.2-0.1c-0.1,0-0.1,0-0.2,0l-1.5,0.8c-0.1,0-0.1,0.1-0.1,0.2c0,0.1,0,0.2,0,0.2l2.2,3.8   C595.5,425.3,595.5,425.3,595.7,425.3z M599.2,423.9h1.7c0.1,0,0.1,0,0.2-0.1s0.1-0.1,0.1-0.2v-4.4c0-0.1,0-0.1-0.1-0.2   c0-0.1-0.1-0.1-0.2-0.1h-1.7c-0.1,0-0.1,0-0.2,0.1c-0.1,0-0.1,0.1-0.1,0.2v4.4c0,0.1,0,0.1,0.1,0.2   C599.1,423.9,599.2,423.9,599.2,423.9z"
    //       />
    //     </g>
    //   </svg>
    //   <p className="loading-text">Loading...</p>
    // </>
  );
}

export default TodoLoading;
