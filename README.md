# Nicholas Darko Brown — Portfolio

Personal portfolio of Nicholas Darko Brown, software engineer based in New Haven, CT.

## Stack

- React 19 + TypeScript
- Vite
- Tailwind CSS 4
- React Router
- EmailJS (contact form)

## Development

```bash
npm install
npm run dev
```

The contact form requires EmailJS credentials in a `.env` file:

```
VITE_EMAILJS_SERVICE_ID=...
VITE_EMAILJS_TEMPLATE_ID=...
VITE_EMAILJS_PUBLIC_KEY=...
```

## Build

```bash
npm run build
npm run preview
```

Site content (projects, experience, skills, awards) lives in `src/lib/constants.ts`.
