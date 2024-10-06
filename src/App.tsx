import './App.css'

function App() {

  return (
    <>
      <div className="min-h-screen bg-gray-100">

      <header className="bg-white shadow-md">
        <div className="container mx-auto px-6 py-4 flex justify-between items-center">
          <h1 className="text-2xl font-bold text-gray-800">LControl</h1>
          <nav className="space-x-4">
            <a href="#products" className="text-gray-600 hover:text-blue-600">Products</a>
            <a href="#about" className="text-gray-600 hover:text-blue-600">About Us</a>
            <a href="#contact" className="text-gray-600 hover:text-blue-600">Contact</a>
          </nav>
        </div>
      </header>

      <section className="bg-blue-600 text-white py-20">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-4xl font-bold">Welcome to LControl</h2>
          <p className="mt-4 text-lg">We do stuff and things and stuff and things</p>
          <a
            href="#products"
            className="mt-6 inline-block bg-white text-blue-600 font-semibold py-2 px-6 rounded hover:bg-gray-200 transition"
          >
            Explore Products
          </a>
        </div>
      </section>


      </div>
    </>
  )
}

export default App
