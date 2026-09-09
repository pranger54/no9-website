# Turning on the contact form

The form is fully built — it just needs one free access key before it can
send. Takes about a minute. No password, no credit card.

## 1. Get your key

1. Open **https://web3forms.com**
2. In the box on the homepage, type the email that should **receive** the
   enquiries:

   ```
   Waralak.t@outlook.com
   ```

3. Click **Create Access Key**
4. Check that Outlook inbox — Web3Forms emails you a key that looks like:

   ```
   a1b2c3d4-e5f6-7890-abcd-ef1234567890
   ```

   (Check the Junk folder if it's not there in a minute.)

## 2. Paste it in

Open the file **`.env`** in this folder and put the key after the `=`:

```
VITE_WEB3FORMS_KEY=a1b2c3d4-e5f6-7890-abcd-ef1234567890
```

Save it.

## 3. Restart and test

```
npm run dev
```

Vite only reads `.env` at startup, so it must be restarted — refreshing the
browser is not enough.

Go to the Contact page, send yourself a test message, and it should land in
**Waralak.t@outlook.com** within a few seconds.

## 4. Deploy

```
npm run deploy
```

The key gets built into the site, so the live version works too.

---

## Good to know

- **The key is safe in the browser.** Web3Forms is designed this way — the
  key can only ever deliver mail to the address it was created for. Nobody
  can use it to send mail anywhere else.
- **Replying works normally.** Hit Reply in Outlook and it goes straight to
  whoever filled in the form, not to Web3Forms.
- **Free tier: 250 messages a month.** Far more than a studio site needs.
- **Spam protection** is built in — the form has a hidden field that bots
  fill in and humans never see. Those messages are dropped silently.
- **If the key is missing or wrong**, the form doesn't fail silently — it
  shows the visitor a message asking them to email you directly instead.

## Changing the destination later

The destination is tied to the key, not to the code. To send enquiries
somewhere else, create a new key with that email at web3forms.com and swap
it into `.env`.

## Changing the contact details shown on the site

Edit **`src/data/contact.js`** — the address, phone, and email there feed
the Contact page, the mobile menu, and anywhere else they appear.
