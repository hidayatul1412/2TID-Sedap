import frameworkData from "./framework.json";

export default function FrameworkList() {
    return (
        <div className="p-8">
            {frameworkData.framework.map((item) => (
                <div key={item.id} className="border p-4 mb-4 rounded-lg shadow-md bg-white">
                    <h2 className="text-lg font-bold text-gray-800">{item.name}</h2>
                    <p className="text-gray-600">{item.description}</p>
                    <p className="text-gray-600">{item.details.developer}</p>
                    <p className="text-gray-600">{item.details.releaseYear}</p>
                    <p className="text-blue-600">{item.details.officialWebsite}</p>
                    <p>{item.tags.map((tag, index) => (
                        <span key={index} className="bg-blue-100 text-gray-700 px-2 py-1 text-xs rounded-full mr-2">
                            {tag}
                        </span>
                    ))}
                    </p>
                </div>
            ))}
        </div>
    )
}