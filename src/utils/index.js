export const setDocumentTitle = (content = document.location.pathname.replace('/', ''), sufix = 'MIFID') => {
  document.title = `${content} | ${sufix}`
}
