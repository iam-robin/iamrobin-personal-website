const Colophon = () => {
  return (
    <div>
      <h1 className="text-lg mb-2 font-medium">Colophon</h1>
      <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Odio, dolorem quis? Praesentium eum culpa nihil est rem vero tempora, quis voluptatibus beatae sunt commodi voluptate nam, delectus in doloribus voluptatum?</p>
      <div className="flex space-x-30 mt-10">
        <div>
          <h2>Packages</h2>
          <ul>
            <li>next.js</li>
            <li>tailwind</li>
            <li>typescript</li>
            <li>commandbar</li>
          </ul>
        </div>
        <div>
          <h2>Tools</h2>
          <ul>
            <li>VSCode</li>
            <li>Notion</li>
            <li>Figma</li>
          </ul>
        </div>
        <div>
          <h2>Styling</h2>
          <ul>
            <li>Heroicons</li>
            <li>Inter</li>
          </ul>
        </div>
      </div>
    </div>
  );
}

Colophon.layout = "LayoutDefault";

export default Colophon;
