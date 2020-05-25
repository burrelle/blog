import Layout from '../components/Layout';

export default function Uses() {
  const editorAndTerminal = [
    { name: 'Visual Studio Code', theme: 'Nord', font: 'Fira Code' },
    { name: 'PhpStorm', theme: 'Material Oceanic', font: 'Dank Mono' },
    { name: 'iTerm2', theme: 'Night Owl', font: 'Meslo Powerline' },
  ];

  return (
    <Layout pageTitle="Uses">
      <h1 className="mb-4 text-3xl font-semibold md:text-4xl">Uses</h1>
      <div className="space-y-4">
        <section>
          <h3 className="mb-2 text-lg font-semibold md:text-xl">
            Editor and Terminal
          </h3>
          <ul>
            {editorAndTerminal.map(({ name, theme, font }, key) => (
              <div key={key} className="mb-4">
                <li>{name}</li>
                <li>
                  <ul className="list-disc list-inside">
                    <li>
                      <i>Theme:</i> {theme}
                    </li>
                    <li>
                      <i>Font:</i> {font}
                    </li>
                  </ul>
                </li>
              </div>
            ))}
          </ul>
        </section>
        <section>
          <h3 className="mb-2 text-lg font-semibold md:text-xl">
            Desktop Apps
          </h3>
          <ul>
            <li>Alfred</li>
            <li>Notion</li>
            <li>Spark</li>
            <li>Table Plus</li>
          </ul>
        </section>
      </div>
    </Layout>
  );
}
