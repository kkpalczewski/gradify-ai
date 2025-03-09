import { ContactForm } from "./contact-form";
import { ContactInfo } from "./contact-info";
import { ContactMap } from "./contact-map";

export function Contact() {
  return (
    <div className="container mx-auto px-6 md:px-12 py-6 md:py-12">
      <h2 className="text-4xl font-bold text-center mb-12">Contact Us</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div className="md:col-span-1">
          <ContactForm />
        </div>
        <div className="md:col-span-1">
          <ContactMap />
          <ContactInfo />
        </div>
      </div>
    </div>
  );
}
