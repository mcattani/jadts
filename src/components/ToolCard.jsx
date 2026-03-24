import { Link } from "react-router-dom";

export default function ToolCard({ tool }) {
    const Icon = tool.icon;

    return (
        <div className="col">
            <Link to={tool.path} className="text-decoration-none">
                <div className="card h-100 shadow-sm">
                    <div className="card-body text-center">
                        <Icon size={32} className="mb-3" />
                        <h5 className="card-title">{tool.name}</h5>
                        <p className="card-text text-muted">
                            {tool.description}
                        </p>
                    </div>
                </div>
            </Link>
        </div>
    );
}