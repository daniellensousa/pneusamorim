import ContactCards from "@/app/components/ContactCards";
import ContactForm from "@/app/components/ContactForm";
import "@/app/css/contact.css";

export default function ContactSection() {
  return (
    <section className="contact">
      <div className="contact-inner">
        <ContactCards />
        <ContactForm />
      </div>
    </section>
  );
}
