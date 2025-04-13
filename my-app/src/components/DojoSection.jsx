import PropTypes from 'prop-types';

export default function DojoSection({dojo}) {
    return (
        <section id={dojo.id}>
            <h2>{dojo.name}</h2>
            {dojo.description ? (
                <p>{dojo.description}</p>
            ) : ( null)}
            <div className="up"><a href="#top">zurück zum Start</a></div>
        </section>
    )
}

DojoSection.propTypes = {
    dojo: PropTypes.shape({
        id: PropTypes.string.isRequired,
        name: PropTypes.string.isRequired,
        description: PropTypes.string,
    }).isRequired,
};