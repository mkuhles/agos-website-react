import PropTypes from 'prop-types';

export default function SocialIcons({ icons }) {
  return (
    <div className="social-icons">
        {icons.facebook ? (
            <a href={icons.facebook} target="_blank" className="social-icon" title={"Facebook Seite des Dojos " + icons.dojoName}>
                <i className="facebook"></i>
            </a>
        ) : null}
        {icons.gmaps ? (
            <a href={icons.gmaps} target="_blank" className="social-icon"  title={"Google Maps Seite des Dojos " + icons.dojoName}>
                <i className="gmaps"></i>
            </a>
        ) : null}
    </div>
  );
}

SocialIcons.propTypes = {
  icons: PropTypes.shape({
    facebook: PropTypes.string,
    gmaps: PropTypes.string,
    dojoName: PropTypes.string.isRequired,
  }).isRequired,
};