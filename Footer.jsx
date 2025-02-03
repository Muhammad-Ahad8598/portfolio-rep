export default function Footer() {
    return (
      <footer className="bg-gray-900 text-white py-4 text-center px-4 md:px-8">
        <p className="text-sm md:text-base">
          &copy; {new Date().getFullYear()} My Website. All rights reserved.
        </p>
      </footer>
    );
  }