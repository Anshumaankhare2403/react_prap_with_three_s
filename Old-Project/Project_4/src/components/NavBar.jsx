function NavBar({ title, subtitle, color }) {
  return (
    <div
      style={{ backgroundColor: color, color: "white" }}
      className="flex justify-between px-50 text-2xl h-20 mb-2"
    >
      <h1 className="self-center">{title}</h1>
      <div className="flex gap-5 text-lg self-center">
        {subtitle.map((item, idx) => (
          <a href="#" key={idx} className="hover:text-gray-300">
            {item}
          </a>
        ))}
      </div>
    </div>
  );
}

export default NavBar;
