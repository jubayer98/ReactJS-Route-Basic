import { useEffect } from 'react';
import PropTypes from 'prop-types';

const PageTitle = ({ title, children }) => {
    // useEffect to update the document title whenever the `title` prop changes
    useEffect(() => {
        document.title = `${title} | GH`;
    }, [title]);

    // Render any children passed to this component
    return <>{children}</>;
};

// Prop validation
PageTitle.propTypes = {
    title: PropTypes.string.isRequired,  // Title is required and must be a string
    children: PropTypes.node             // Children can be any valid React node
};

export default PageTitle;