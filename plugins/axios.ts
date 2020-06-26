export default function({ $axios }: any) {
  $axios.onRequest((c: any) => {
    if (c.headers["Authorization"]) delete c.headers["Authorization"];
    if (c.headers.common["Authorization"])
      delete c.headers.common["Authorization"];
  });
}
