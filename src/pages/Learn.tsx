import { radicalZones } from '../data/radicals';

const regions = [
  { id: 1, name: 'Region 1: Horizontal (横)', keys: ['G', 'F', 'D', 'S', 'A'] },
  { id: 2, name: 'Region 2: Vertical (竖)', keys: ['H', 'J', 'K', 'L', 'M'] },
  { id: 3, name: 'Region 3: Left-Falling (撇)', keys: ['T', 'R', 'E', 'W', 'Q'] },
  { id: 4, name: 'Region 4: Dot (捺/点)', keys: ['Y', 'U', 'I', 'O', 'P'] },
  { id: 5, name: 'Region 5: Right-Falling (折)', keys: ['N', 'B', 'V', 'C', 'X'] },
];

export default function Learn() {
  return (
    <div className="space-y-8">
      <div className="text-center mb-8">
        <h2 className="text-3xl font-bold text-gray-900">Wubi Radicals (字根)</h2>
        <p className="mt-2 text-gray-600">The keyboard is divided into 5 regions based on the first stroke.</p>
      </div>

      {regions.map((region) => (
        <div key={region.id} className="bg-white rounded-lg shadow-sm border border-gray-200 overflow-hidden">
          <div className="bg-gray-50 px-6 py-4 border-b border-gray-200">
            <h3 className="text-lg font-semibold text-gray-800">{region.name}</h3>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-5 divide-y md:divide-y-0 md:divide-x divide-gray-200">
            {region.keys.map((key) => {
              const zone = radicalZones.find(z => z.key === key);
              if (!zone) return null;
              return (
                <div key={key} className="p-4 hover:bg-blue-50 transition-colors">
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-2xl font-bold text-blue-600">{zone.key}</span>
                    <span className="text-xs font-mono text-gray-400">{zone.name}</span>
                  </div>
                  <div className="text-sm font-medium text-gray-800 mb-2 h-10 flex items-center">
                    {zone.description}
                  </div>
                  <div className="flex flex-wrap gap-1">
                    {zone.radicals.map((r, idx) => (
                      <span key={idx} className="inline-flex items-center justify-center w-8 h-8 bg-gray-100 rounded text-lg font-serif">
                        {r}
                      </span>
                    ))}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      ))}
    </div>
  );
}
