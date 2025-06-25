import PropTypes from 'prop-types';
import SocialIcons from './SocialIcons';

function DojoCircle({ dojo }) {
  return (
    <div className="circle-element circle flip-card">
        <div className='flip-card-inner'>
            <div className="flip-card-front">
                {dojo.logo ? (
                    <img src={"../src/assets/"+dojo.logo} alt={"Dojo " + dojo.name} />
                ) : (
                    <div className="circle-title">{dojo.name}</div>
                )}
            </div>
            <div className="flip-card-back">
                <div className="flip-card-back-inner">
                    <div className="title">{dojo.name}</div>
                    
                    <SocialIcons icons={{
                        facebook: dojo.facebook,
                        gmaps: dojo.gmaps,
                        dojoName: dojo.name
                    }} />

                    <a className="btn" href={"#" + dojo.id}>{"Erfahre mehr"}</a>
                </div>
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