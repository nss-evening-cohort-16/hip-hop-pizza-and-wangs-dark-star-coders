const createDom = () => {
  document.querySelector('#app').innerHTML = `
    <div id="navigation"></div>
    <div id="main-container">
        <div id="main-button"></div>
        <div id="form-container"></div>
        <div id="store"></div>
        <div id="view"></div>
    </div>`;
};

export default createDom;
