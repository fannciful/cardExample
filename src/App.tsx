import { MyCards } from './pages/MyCards';
import { ThemeProvider } from './components/layout/theme-provider';
import './styles/tailwind.css';

function App() {
  return (
    <ThemeProvider defaultTheme="system" storageKey="cards-ui-theme">
      <div className="min-h-screen bg-background text-foreground transition-theme">
        <MyCards />
      </div>
    </ThemeProvider>
  );
}

export default App;