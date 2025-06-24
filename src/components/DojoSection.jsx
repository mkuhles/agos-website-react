import PropTypes from 'prop-types';

export default function DojoSection({dojo}) {
    return (
        <section className="dojo-section" id={dojo.id}>
            <div>
            <h2>{dojo.name}</h2>
            {dojo.description ? (
                <p>{dojo.description}</p>
            ) : ( null)}
            </div>
            <div>
            {dojo.logo ? (
                <img src={"../src/assets/"+dojo.logo} alt={"Dojo " + dojo.name} />
            ) : (
                <div className="placeholder">Logo fehlt</div>
            )}
            </div>
            <div className="up"><a className='btn' href="#top">zurück zum Start</a></div>
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