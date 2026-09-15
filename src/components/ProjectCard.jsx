export default function ProjectCard({ title, description, image, alt }) {
  return (
    <div className="border p-4 rounded-lg shadow">
      <h3 className="text-xl font-semibold mb-2">{title}</h3>

      <p className="mb-3">{description}</p>

      {image && (
        <img
          src={image}
          alt={alt}
          className="w-full h-60 object-cover rounded-md"
        />
      )}
    </div>
  );
}