import { COPYRIGHT_TEXT, CURRENT_YEAR } from '../constants/appConstants';

export default function Footer() {
  return (
    <footer>
      <p>&copy; {CURRENT_YEAR} {COPYRIGHT_TEXT}</p>
    </footer>
  );
}