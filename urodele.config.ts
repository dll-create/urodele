export const config = {
  github: {
    login: "km", // github login name, not user name
    repo: "km", //"urodele",
    logInUrl: "",
    logInAuthUrl: "",
  },
  head: {
    title: km_blog"Urodele",
  },
  footer: {
    copyright: "© Glink",
    copyrightUrl: "https://github.com/glink25",
  },
  pagination: {
    size: 10,
  },
  giscus: false as object | false,
} as const;

export default config;
