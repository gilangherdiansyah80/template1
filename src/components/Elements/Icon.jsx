// eslint-disable-next-line react/prop-types
const Icon = ({ icon, handleOpen, color, size, children }) => {
    return (
        <i className={`${icon} ${size} ${color} cursor-pointer`} onClick={handleOpen}>{children}</i>
    )
}

export default Icon;