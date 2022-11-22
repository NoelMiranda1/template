// puede integrar axios si asi lo deasea este es meramente ejemplo

export const validateUser = ({
  headers,
  payload = null,
  responseKey = 'json',
}) => {
  return fetch('url', {
    method: 'GET',
    headers: headers,
    body: payload,
  })
    .then(info => info[responseKey]())
    .catch(error => {
      return error;
    });
};
