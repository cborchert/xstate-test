export function callApi({
  code = 200,
  timeout = 1000,
}: {
  code?: number;
  timeout?: number;
} = {}): Promise<any> {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (code < 400) {
        resolve({
          code,
          data: {
            ok: true,
          },
        });
      } else {
        reject({
          code,
          data: {
            ok: false,
          },
        });
      }
    }, timeout);
  });
}
