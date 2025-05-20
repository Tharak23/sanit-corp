export default function Test() {
  return (
    <div className="p-8">
      <h1 className="text-4xl font-bold text-blue-500 mb-4">Tailwind Test Page</h1>
      <p className="text-lg text-gray-700 mb-4">This is a test page to verify Tailwind CSS is working correctly.</p>
      
      <div className="grid grid-cols-3 gap-4">
        <div className="bg-red-500 text-white p-4 rounded">Red Box</div>
        <div className="bg-green-500 text-white p-4 rounded">Green Box</div>
        <div className="bg-blue-500 text-white p-4 rounded">Blue Box</div>
      </div>
      
      <div className="mt-8 p-4 border border-gray-300 rounded bg-gray-50">
        <h2 className="font-bold mb-2">Button Tests</h2>
        <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mr-2">
          Button 1
        </button>
        <button className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded">
          Button 2
        </button>
      </div>
    </div>
  );
} 