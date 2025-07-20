function App() {
  return (
    <div className="min-h-screen flex items-start justify-center pt-8">
      <div
        className="grid gap-1"
        style={{
          gridTemplateColumns: "repeat(4, 4rem)",
          gridTemplateRows: "minmax(5rem, auto) repeat(5, 4rem)",
        }}
      >
        <div className="col-span-4 bg-gray-200 flex flex-col items-end justify-around p-2">
          <div className="text-sm text-gray-500"></div>
          <div className="text-xl font-bold"></div>
        </div>

        <button className="col-span-2 bg-gray-100">AC</button>
        <button className="bg-gray-100">DEL</button>
        <button className="bg-gray-100">/</button>

        <button className="bg-gray-100">1</button>
        <button className="bg-gray-100">2</button>
        <button className="bg-gray-100">3</button>
        <button className="bg-gray-100">*</button>

        <button className="bg-gray-100">4</button>
        <button className="bg-gray-100">5</button>
        <button className="bg-gray-100">6</button>
        <button className="bg-gray-100">-</button>

        <button className="bg-gray-100">7</button>
        <button className="bg-gray-100">8</button>
        <button className="bg-gray-100">9</button>
        <button className="bg-gray-100">+</button>

        <button className="bg-gray-100">.</button>
        <button className="bg-gray-100">0</button>
        <button className="col-span-2 bg-gray-100">=</button>
      </div>
    </div>
  );
}

export default App;
