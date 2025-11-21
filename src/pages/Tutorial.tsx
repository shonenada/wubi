import { Link } from 'react-router-dom';

export default function Tutorial() {
  return (
    <div className="max-w-3xl mx-auto space-y-12 text-gray-800">
      <div className="text-center space-y-4">
        <h1 className="text-4xl font-bold text-gray-900">Wubi 86 Tutorial for Beginners</h1>
        <p className="text-xl text-gray-500">Learn the logic behind the most efficient Chinese input method.</p>
      </div>

      <section className="space-y-4">
        <h2 className="text-2xl font-bold text-blue-600 border-b pb-2">1. What is Wubi?</h2>
        <p>
          Wubi (Five Pen/Stroke) is a shape-based input method. Unlike Pinyin, which relies on pronunciation, 
          Wubi relies on how a character is written. You type by breaking down a character into components called <strong>Radicals (字根)</strong>.
        </p>
        <p>
          The keyboard is divided into 5 regions based on the first stroke of the radical:
        </p>
        <ul className="list-disc list-inside space-y-2 ml-4 bg-gray-50 p-4 rounded-lg">
          <li><strong>Region 1 (Horizontal 一):</strong> Keys G, F, D, S, A</li>
          <li><strong>Region 2 (Vertical 丨):</strong> Keys H, J, K, L, M</li>
          <li><strong>Region 3 (Left-falling 丿):</strong> Keys T, R, E, W, Q</li>
          <li><strong>Region 4 (Dot/Right-falling 丶):</strong> Keys Y, U, I, O, P</li>
          <li><strong>Region 5 (Hook/Turn 乙):</strong> Keys N, B, V, C, X</li>
        </ul>
      </section>

      <section className="space-y-4">
        <h2 className="text-2xl font-bold text-blue-600 border-b pb-2">2. The Rules of Decomposition</h2>
        <p>
          To type a character, you must decompose it into radicals following the writing order (Stroke Order):
        </p>
        <div className="grid md:grid-cols-3 gap-4">
            <div className="bg-white p-4 border rounded shadow-sm">
                <h3 className="font-bold mb-2">Top to Bottom</h3>
                <p className="text-sm text-gray-600">Example: <span className="text-lg text-black">字</span> = <span className="text-lg text-black">宀 + 子</span></p>
            </div>
            <div className="bg-white p-4 border rounded shadow-sm">
                <h3 className="font-bold mb-2">Left to Right</h3>
                <p className="text-sm text-gray-600">Example: <span className="text-lg text-black">汉</span> = <span className="text-lg text-black">氵 + 又</span></p>
            </div>
            <div className="bg-white p-4 border rounded shadow-sm">
                <h3 className="font-bold mb-2">Outside to Inside</h3>
                <p className="text-sm text-gray-600">Example: <span className="text-lg text-black">国</span> = <span className="text-lg text-black">囗 + 玉</span></p>
            </div>
        </div>
      </section>

      <section className="space-y-4">
        <h2 className="text-2xl font-bold text-blue-600 border-b pb-2">3. How to Type</h2>
        <p>Depending on the character, you press 1 to 4 keys.</p>

        <div className="space-y-6">
            <div>
                <h3 className="text-xl font-semibold mb-2">A. Roots (Roots are keys themselves)</h3>
                <p>For frequent roots (like those in the rhyme), you press their key + space (mostly).</p>
                <p className="text-sm text-gray-500 mt-1">Example: <strong>金 (Q)</strong>, <strong>人 (W)</strong></p>
            </div>

            <div>
                <h3 className="text-xl font-semibold mb-2">B. Characters with exactly 4 roots</h3>
                <p>Type the keys for the 1st, 2nd, 3rd, and 4th root.</p>
                <p className="text-sm text-gray-500 mt-1">Example: <strong>照 (JVkO)</strong> = 日 (J) + 刀 (V) + 口 (K) + 灬 (O)</p>
            </div>

            <div>
                <h3 className="text-xl font-semibold mb-2">C. Characters with more than 4 roots</h3>
                <p>Type the 1st, 2nd, 3rd, and the <strong>Last</strong> root.</p>
                <p className="text-sm text-gray-500 mt-1">Example: <strong>缩 (XPWJ)</strong> = 纟(X) + 宀(P) + 亻(W) ... [skip] ... 日(J)</p>
            </div>

            <div>
                <h3 className="text-xl font-semibold mb-2">D. Characters with fewer than 4 roots</h3>
                <p>Type all roots + <strong>Identification Code (识别码)</strong> if needed + Space.</p>
                <p className="bg-yellow-50 p-4 rounded border border-yellow-200 mt-2 text-sm">
                    <strong>Note:</strong> The Identification Code helps distinguish characters with the same roots. 
                    It is determined by the <em>last stroke</em> of the character and its <em>structure</em> (Left-Right, Top-Bottom, Mixed).
                    <br/><br/>
                    Don't worry about this too much right now. Focus on memorizing the radicals first!
                </p>
            </div>
        </div>
      </section>

      <div className="flex justify-center gap-4 pt-8">
        <Link to="/learn" className="px-6 py-3 bg-gray-100 text-gray-700 rounded hover:bg-gray-200 font-medium">
          View Radicals Table
        </Link>
        <Link to="/practice" className="px-6 py-3 bg-blue-600 text-white rounded hover:bg-blue-700 font-medium shadow">
          Start Practicing
        </Link>
      </div>
    </div>
  );
}
