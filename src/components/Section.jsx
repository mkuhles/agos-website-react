import PropTypes from 'prop-types';

export default function Section(props) {
    return (
        <section className={props.className} id={props.id}>
            <div className="section-content">
                {props.children ?
                    props.children
                : null}
            </div>
        </section>
    )
}

Section.propTypes = {
    className: PropTypes.string,
    children: PropTypes.node,
    id: PropTypes.string
};