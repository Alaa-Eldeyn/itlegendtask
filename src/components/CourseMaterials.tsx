import { materials } from "@/data/data";

export default function CourseMaterials() {
  return (
    <div className="mx-auto bg-white p-6 rounded-lg shadow-xl mb-5">
      <h2 className="text-2xl font-bold mb-6">Course Materials</h2>

      <div className="space-y-4">
        {materials.map((material) => (
          <div
            key={material.id}
            className="flex items-center justify-between py-3 border-b border-gray-100"
          >
            <div className="flex items-center gap-3">
              {material.icon}
              <span className="text-lg">{material.label}: </span>
            </div>
            <span className="text-gray-700">{material.value}</span>
          </div>
        ))}
      </div>
    </div>
  );
}
