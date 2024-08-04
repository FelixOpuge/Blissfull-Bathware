import Link from 'next/link';

const Footer = () => {
  return (
    <footer className="bg-gray-100 text-gray-200 py-10">
      <div className="container mx-auto px-4 grid grid-cols-1 md:grid-cols-3 gap-8">
        {/* Contact Form */}
        <div>
          <h3 className="text-xl font-semibold text-gray-100 mb-4">Contact Us</h3>
          <form>
            <div className="mb-4">
              <label className="block text-gray-400 text-sm font-bold mb-2" htmlFor="name">
                Name
              </label>
              <input
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-900 leading-tight focus:outline-none focus:shadow-outline"
                id="name"
                type="text"
                placeholder="Your name"
              />
            </div>
            <div className="mb-4">
              <label className="block text-gray-400 text-sm font-bold mb-2" htmlFor="email">
                Email
              </label>
              <input
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-900 leading-tight focus:outline-none focus:shadow-outline"
                id="email"
                type="email"
                placeholder="Your email"
              />
            </div>
            <div className="mb-4">
              <label className="block text-gray-400 text-sm font-bold mb-2" htmlFor="message">
                Message
              </label>
              <textarea
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-900 leading-tight focus:outline-none focus:shadow-outline"
                id="message"
                rows="4"
                placeholder="Your message"
              ></textarea>
            </div>
            <div className="mb-4">
              <button
                className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                type="button"
              >
                Send
              </button>
            </div>
          </form>
        </div>

        {/* Contact Details */}
        <div>
          <h3 className="text-xl font-semibold text-gray-100 mb-4">Contact Details</h3>
          <p className="text-gray-400 mb-2">Email: contact@blissfulbathware.com</p>
          <p className="text-gray-400 mb-2">Phone: (123) 456-7890</p>
          <p className="text-gray-400 mb-2">Address: 123 Blissful Lane, Bath City, BC 12345</p>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="text-xl font-semibold text-gray-100 mb-4">Quick Links</h3>
          <ul className="list-none p-0">
            <li className="mb-2">
              <Link href="/about">
                <span className="text-blue-400 hover:underline cursor-pointer">About Us</span>
              </Link>
            </li>
            <li className="mb-2">
              <Link href="/products">
                <span className="text-blue-400 hover:underline cursor-pointer">Products</span>
              </Link>
            </li>
            <li className="mb-2">
              <Link href="/faq">
                <span className="text-blue-400 hover:underline cursor-pointer">FAQ</span>
              </Link>
            </li>
            <li className="mb-2">
              <Link href="/contact">
                <span className="text-blue-400 hover:underline cursor-pointer">Contact</span>
              </Link>
            </li>
            <li className="mb-2">
              <Link href="/terms">
                <span className="text-blue-400 hover:underline cursor-pointer">Terms of Service</span>
              </Link>
            </li>
            <li className="mb-2">
              <Link href="/privacy">
                <span className="text-blue-400 hover:underline cursor-pointer">Privacy Policy</span>
              </Link>
            </li>
          </ul>
        </div>
      </div>
      <div className="mt-8 text-center text-gray-600">
        &copy; 2024 Blissful Bathware. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;