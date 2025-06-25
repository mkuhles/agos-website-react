import { COPYRIGHT_TEXT, CURRENT_YEAR } from '../constants/appConstants';

export default function Footer() {
  return (
    <footer>
      <div className="section-content">
        &copy; {CURRENT_YEAR} {COPYRIGHT_TEXT}
      </div>
    </footer>
  );
}