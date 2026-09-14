export default function ProjectCard({ title, description, image, alt }) {
  return (
    <div className="border p-4 rounded-lg shadow">
      <h3 className="text-xl font-semibold">{title}</h3>
      <p className="mb-2">{description}</p>

      {image && (
        <img
          src={image}
          alt={alt}
          className="w-80 h-60 object-cover rounded-md mb-2"
        />
      )}
    </div>
  );
}