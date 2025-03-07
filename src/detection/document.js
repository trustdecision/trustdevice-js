export default function getDocument() {
  const {
    referrer = '',
  } = document
  return { referrer }
}
