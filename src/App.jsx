import DojoCircle from './components/DojoCircle';
import DojoSection from './components/DojoSection';
import Footer from './components/Footer';
import SEO from './components/SEO';
import useCircleAnimation from './hooks/useCircleAnimation';
import useValidateDojoData from './hooks/useValidateDojoData';
import './scss/styles.scss';
import { useEffect, useState } from 'react';
import useWindowSize from './hooks/useWindowSize';

export function App() {
  const [dojos, setDojos] = useState([]);
  const [siteData, setSiteData] = useState({ title: "Aikido-Gemeinschaft Oder-Spree e.V." });
  // const { isValid, message } = useValidateDojoData(dojos);
  // if (!isValid) {
  //   return <div>{message}</div>;
  // }

  useEffect(() => {
    
    async function getData(url) {
      const response = await fetch(url, { 
        mode: 'cors'
      });
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      return await response.json();
    }
    async function fetchDojos() {
      try {
        const dojosurl = import.meta.env.VITE_DATA_API_URL + '/dojos';
        setDojos(await getData(dojosurl));
      } catch (error) {
        console.error('Error fetching dojo data:', error);
        setDojos([]); // Set to empty array on error
      }
    }
    async function fetchSiteData() {
      try {
        const url = import.meta.env.VITE_DATA_API_URL + '/site';
        setSiteData(await getData(url));
      } catch (error) {
        console.error('Error fetching site data:', error);
        setSiteData({}); // Set to empty array on error
      }
    }
    fetchDojos();
    fetchSiteData();

  }, []);

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
            <h1>{siteData.title}</h1>
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
      <SEO />
      <Footer />
      <div className="up"><a className='btn' href="#top" title="Zurück zum Start">hoch</a></div>
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
