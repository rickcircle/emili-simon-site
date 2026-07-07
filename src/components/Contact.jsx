import { useState } from 'react';
import { useLanguage } from '../LanguageContext';

const FORMSPREE_ENDPOINT = 'https://formspree.io/f/YOUR_FORM_ID';

export default function Contact() {
  const { t } = useLanguage();
  const [sent, setSent] = useState(false);
  const [sending, setSending] = useState(false);

  async function handleSubmit(e) {
    e.preventDefault();
    setSending(true);
    const form = e.target;
    try {
      const res = await fetch(FORMSPREE_ENDPOINT, {
        method: 'POST',
        body: new FormData(form),
        headers: { Accept: 'application/json' },
      });
      if (res.ok) setSent(true);
    } finally {
      setSending(false);
    }
  }

  return (
    <section className="section section-alt" id="contact">
      <div className="container">
        <div className="section-header reveal">
          <span className="section-label">{t.contact_label}</span>
          <h2 className="section-title">{t.contact_title}</h2>
          <p className="section-text">{t.contact_sub}</p>
        </div>

        {sent ? (
          <div className="form-success reveal">
            <p>{t.form_success}</p>
          </div>
        ) : (
          <form className="booking-form reveal" onSubmit={handleSubmit}>
            <div className="form-group">
              <label htmlFor="name">{t.field_name}</label>
              <input type="text" id="name" name="name" placeholder="Jane Doe" required />
            </div>
            <div className="form-group">
              <label htmlFor="email">{t.field_email}</label>
              <input type="email" id="email" name="email" placeholder="jane@example.com" required />
            </div>
            <div className="form-group">
              <label htmlFor="message">{t.field_message}</label>
              <textarea id="message" name="message" rows="5" placeholder={t.field_msg_ph} required></textarea>
            </div>
            <button type="submit" className="btn btn-primary" disabled={sending}>{t.btn_send}</button>
          </form>
        )}
      </div>
    </section>
  );
}
