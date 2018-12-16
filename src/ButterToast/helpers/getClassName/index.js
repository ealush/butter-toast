const getClassName = ({ namespace, className }) => (
    [namespace, className, 'butter-toast'].filter(Boolean).join(' ')
);

export default getClassName;