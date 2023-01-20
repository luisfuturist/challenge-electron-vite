export default function Entry({ prefix, children }) {
    return (
        <span>
            {prefix}
            <span className="text-dark">
                {children}
            </span>
            <br/>
        </span>
    );
}