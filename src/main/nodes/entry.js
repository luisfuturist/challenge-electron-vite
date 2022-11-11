export default function entry(prefix, content) {
    return (
        <span>
            {prefix}
            <span className="text-dark">{content}</span>
            <br/>
        </span>
    );
}