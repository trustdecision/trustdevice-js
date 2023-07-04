export default function getDocument() {
  const {
    all = [],
  } = document
  return { all: all.length }
}
