export const config = {
  url: "http://localhost:3000/",
  method: "POST",
  header: {
    "Content-Type": "application/json",
  },
  data: {
    name: "John",
    age: 22,
  },
};

const url = "http://localhost:3008/api";

/* 账户登陆 */
export const account = {
  initLogin: {
    url: url + "/muen",
  },
  login: {
    url: url + "/IFdoLogin",
  },
};
