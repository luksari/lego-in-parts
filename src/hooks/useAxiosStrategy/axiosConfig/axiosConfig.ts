export const getAxiosConfig = () => {
  const isDomainWithCookiesAuthorization = ['test', 'production'].includes(import.meta.env.VITE_ENV);
  const sharedHeaders = {
    'Content-Type': 'application/vnd.furgonetka.v1+json',
  };

  return {
    timeout: 500,
    headers: {
      ...sharedHeaders,
    },
    baseURL: isDomainWithCookiesAuthorization ? '/xhr/' : import.meta.env.VITE_API_URL,
    ...(isDomainWithCookiesAuthorization && {
      headers: {
        'X-Use-Cookies': true,
        ...sharedHeaders,
      },
      withCredentials: true,
    }),
    ...(!isDomainWithCookiesAuthorization &&
      import.meta.env.VITE_API_TOKEN && {
        headers: {
          Authorization: import.meta.env.VITE_API_TOKEN,
          ...sharedHeaders,
        },
      }),
  };
};
