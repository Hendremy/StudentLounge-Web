import { Router } from 'react-router-dom';
import AppHeader from './components/organisms/AppHeader'

export default function App() {
  return (
    <>
      <AppHeader appName='Student Lounge' />
      <Router />
    </>
  );
}

