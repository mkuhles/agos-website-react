import Section from "./Section";
import Parser from 'html-react-parser';

export default function SEO({data}) {
  return (
    <Section className="seo-section" id="seo">
      {data.body ? (
          <>{Parser(data.body)}</>
        ) : ( null )}
    </Section>
  );
}