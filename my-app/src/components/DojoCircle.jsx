import PropTypes from 'prop-types';

function DojoCircle({ dojo }) {
  return (
    <div className="circle-element circle">
            <div>
                <a href={"#" + dojo.id} className="circle-link" title={"Erfahre mehr über das Dojo " + dojo.name}>
                    {dojo.logo ? (
                        <img src={"../src/assets/"+dojo.logo} alt={"Dojo " + dojo.name} />
                    ) : (
                        <div className="circle-title">{dojo.name}</div>
                    )}
                    
                </a>
                <div className="social-icons">
                    {dojo.facebook ? (
                        <a href={dojo.facebook} target="_blank" className="social-icon" title={"Facebook Seite des Dojos " + dojo.name}>
                            <i className="facebook"></i>
                        </a>
                    ) : null}
                    {dojo.gmaps ? (
                        <a href={dojo.gmaps} target="_blank" className="social-icon"  title={"Google Maps Seite des Dojos " + dojo.name}>
                            <i className="gmaps"></i>
                        </a>
                    ) : null}
                </div>
            </div>
    </div>
  );
}

DojoCircle.propTypes = {
  dojo: PropTypes.shape({
    id: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    logo: PropTypes.string,
    facebook: PropTypes.string,
    gmaps: PropTypes.string,
  }).isRequired,
};

export default DojoCircle;