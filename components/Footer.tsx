export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white py-6 mt-12">
      <div className="container mx-auto text-center text-sm">
        <p>
          Copyright &copy; {new Date().getFullYear()} | Ifeanyi Eme | All
          rights reserved
        </p>
      </div>
    </footer>
  );
}
