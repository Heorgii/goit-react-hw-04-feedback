import PropTypes from 'prop-types';

const Section = ({ title, children }) => {
    return (
        <section>
            <h2>{title}</h2>
            {children}
        </section>
    );
}

Section.protoType = {
    title: PropTypes.string,
    children: PropTypes.element,
}

export default Section;