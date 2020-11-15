type getQueryType = (url: string) => any;
const proxyURL = process.env.PROXY_URL ? process.env.PROXY_URL : ""

export const getQuery: getQueryType = async url => {
  const res = await fetch(proxyURL + url)
    const parsedRes =  await res.json();
    return parsedRes
};
