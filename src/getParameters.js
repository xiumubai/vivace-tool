export const getParameters = (URL) =>
  JSON.parse(
    `{"${decodeURI(URL.split('?')[1])
      .replace(/"/g, '\\"')
      .replace(/&/g, '","')
      .replace(/=/g, '":"')}"}`,
  )
