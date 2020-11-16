type getQueryType = (url: string) => any;
const proxyURL = process.env.PROXY_URL ? process.env.PROXY_URL : '';

export const getQuery: getQueryType = async url => {
	try {
		const res = await fetch(proxyURL + url);
		if (res.status === 500) {
		  return false
		}
		const parsedRes = await res.json();
		return parsedRes;
	} catch (error) {
    console.log(error)
  }
};
