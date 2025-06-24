import dojos from './data/dojos.json';
import DojoCircle from './components/DojoCircle';
import DojoSection from './components/DojoSection';
import Footer from './components/Footer';
import useWindowSize from './hooks/useWindowSize';
import useCircleAnimation from './hooks/useCircleAnimation';
import useValidateDojoData from './hooks/useValidateDojoData';

function App() {
  const { isValid, message } = useValidateDojoData(dojos);
  if (!isValid) {
    return <div>{message}</div>;
  }

  const [width, height] = useWindowSize();
  useCircleAnimation();

  const styles = {};
  // if(width && height) {
  //   styles.backgroundImage = `url(${"https://picsum.photos/" + width + "/" + height + ")"}`;
  // }

  return (
    <>
      <div id="top"></div>
      <section className="viewport-one" style={styles}>
        <div>
          <div className="header">
            <h1>Aikido-Gemeinschaft Oder-Spree e.V.</h1>
          </div>
          <div className="flex-center">
            <div id="circle-container" className="circle-container">
              <div className="center-element circle">
                <a href="#agos"><img src={"../src/assets/agos.png"} alt={"Aikido-Gemeinschaft Oder-Spree e.V."} /></a>
              </div>
              {renderDojoCircles()}
            </div>
          </div>
        </div>
      </section>
      {renderDojoSections()}
      <Footer />
    </>
  );

  // Render functions for better readability
  function renderDojoCircles() {
    return dojos.map((dojo, index) => <DojoCircle key={index} dojo={dojo} />);
  }

  function renderDojoSections() {
    return dojos.map((dojo, index) => <DojoSection key={index} dojo={dojo} />);
  }
}

export default App;
