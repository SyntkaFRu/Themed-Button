import ThemedButton from './components/ThemedButton';

const App = () => {
  const handleClick = () => {
    alert('Button clicked!');
  };

  return (
    <div className="overflow-x-hidden text-stone-300 antialiased">
       <div className="fixed inset-0 -z-10">
    <div className="absolute inset-0 -z-10 h-full w-full items-center px-5 py-24 [background:radial-gradient(150%_125%_at_50%_50%,#111_23%,#63e_200%)]"></div>
    </div>
    <div className="container mx-auto px-8">
      <h1 className="text-xl font-bold mb-4">Themed Buttons</h1>
      <div className="space-y-4">
        <ThemedButton 
          label="Primary Button" 
          variant="primary" 
          onClick={handleClick} 
          size="medium" 
        />
        <ThemedButton 
          label="Secondary Button" 
          variant="secondary" 
          onClick={handleClick} 
          size="large"
        />
        <ThemedButton 
          label="Outline Button" 
          variant="outline" 
          onClick={handleClick} 
          size="small"
        />
        <ThemedButton 
          label="Disabled Button" 
          variant="primary" 
          onClick={handleClick} 
          disabled={true}
          size="medium"
        />
    
    </div>
    </div>
    </div>
  );
};

export default App;