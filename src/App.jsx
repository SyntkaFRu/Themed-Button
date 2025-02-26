import ThemedButton from "./components/ThemedButton";

const App = () => {

  return (
    <body>
 
    <div className="flex flex-col items-center justify-center min-h-screen gap-4 p-10 text-center">
      <h1 className="text-2xl font-bold">Themed Button Demo</h1>
      <ThemedButton label="Primary Button" variant="primary" onClick={() => alert("Primary clicked!")} />
      <ThemedButton label="Secondary Button" variant="secondary" onClick={() => alert("Secondary clicked!")} />
      <ThemedButton label="Outline Button" variant="outline" onClick={() => alert("Outline clicked!")} />
      <ThemedButton label="Disabled Button" variant="" disabled />
    </div>
     
 </body>
  );
};

export default App;