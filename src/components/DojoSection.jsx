import PropTypes from 'prop-types';
import Section from './Section';
import Parser from 'html-react-parser';

export default function DojoSection({dojo}) {
    return (
        <Section className="dojo-section" id={dojo.id}>
            <h2 className="section-title">{dojo.name}</h2>
            <div className="dojo-logo">
            {dojo.logo ? (
                <img src={dojo.logo} alt={"Dojo " + dojo.name} />
            ) : (
                <div className="placeholder">Logo fehlt</div>
            )}
            </div>
            {dojo.description ? (
                <>{Parser(dojo.description)}</>
            ) : ( null)}
        </Section>
    )
}

DojoSection.propTypes = {
    dojo: PropTypes.shape({
        id: PropTypes.string.isRequired,
        name: PropTypes.string.isRequired,
        description: PropTypes.string,
    }).isRequired,
};