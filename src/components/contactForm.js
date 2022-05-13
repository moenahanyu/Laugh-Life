import React, { useState } from 'react';

import * as styles from '../styles/_contact.module.scss'

function ContactForm() {
  const [formState, setFormState] = useState({
    name: '',
    email: '',
    message: '',
  });

  const encode = (data) => {
    return Object.keys(data)
      .map(
        (key) => encodeURIComponent(key) + '=' + encodeURIComponent(data[key])
      )
      .join('&');
  };

  const handleChange = (e) => {
    setFormState({
      ...formState,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    fetch('/', {
      method: 'POST',
      headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
      body: encode({ 'form-name': 'contact', ...formState }),
    })
      .then(() => alert('メールを送信しました。'))
      .catch((error) => alert(error));

    e.preventDefault();
  };

  return (
    <div className={styles.formContainer}>
        <form
        onSubmit={handleSubmit}
        name="contact"
        method="post"
        data-netlify="true"
        data-netlify-honeypot="bot-field"
        className={styles.contactItemWrap}
        >
        <input type="hidden" name="form-name" value="contact" />

        <div className={styles.contactItem}>   
            <label htmlFor="name">名前</label>
            <input
                id="name"
                type="text"
                name="name"
                onChange={handleChange}
                value={formState.name}
                placeholder="名前を入力してください。"
            />
        </div>

        <div className={styles.contactItem}>
            <label htmlFor="email">メールアドレス</label>
            <input
                id="email"
                type="email"
                name="email"
                onChange={handleChange}
                value={formState.email}
                placeholder="メールアドレスを入力してください。"
            />
        </div>

        <div className={styles.contactItem}>
            <label htmlFor="message">お問い合わせ内容</label>
            <textarea
                id="message"
                name="message"
                value={formState.message}
                onChange={handleChange}
                placeholder="メッセージを入力してください。"
            />
        </div>

        <button type="submit">送信</button>
        </form>
    </div>
  );
}

export default ContactForm;