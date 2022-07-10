/**
 * 网络请求配置
 */
import axios from "axios";

/**
 * http request 拦截器
 */
axios.interceptors.request.use(
  (config: any) => {
    config.data = JSON.stringify(config.data);
    config.headers = {
      "Content-Type": "application/json",
    };
    return config;
  },
  (error: any) => {
    return Promise.reject(error);
  }
);

/**
 * http response 拦截器
 */
axios.interceptors.response.use(
  (response: any) => {
    if (response.data.errCode === 2) {
      console.log("过期");
    }
    return response;
  },
  (error: any) => {
    console.log("请求出错 拦截器：", error);
  }
);

/**
 * 封装get方法
 * @param url  请求url
 * @param params  请求参数
 * @returns {Promise}
 */

export function get(url: string, params = {}) {
  const options = {
    method: "get",
    mode: "no-cors",
    headers: { "Content-Type": "application/json" },
    params:
      params /* 重要此处接收params参数并赋值给URL拼接， 不能作为第三个参数 */,
  };

  return new Promise((resolve, reject) => {
    console.log("====  最终请求地址 0152 =====", url);
    console.log("====  最终请求参数 0153=====", params);
    axios
      .get(url, options)
      .then((response: any) => {
        console.log(" === axios success === 0154 ", response);
        resolve(response.data);
        landing(url, params, response.data);
      })
      .catch((error: any) => {
        console.log(" === axios error 1155 === ", error);
        reject(error);
      });
  });
}

/**
 * 封装post请求
 * @param url
 * @param data
 * @returns {Promise}
 */

export async function post(url: string, data: object) {
  console.log("post(url, params = {})", url, data);
  return await new Promise((resolve, reject) => {
    axios.post(url, data).then(
      (response: any) => {
        resolve(response.data);
      },
      (err: any) => {
        reject(err);
      }
    );
  });
}

/**
 * 封装patch请求
 * @param url
 * @param data
 * @returns {Promise}
 */
export function patch(url: string, data = {}) {
  return new Promise((resolve, reject) => {
    axios.patch(url, data).then(
      (response: any) => {
        resolve(response.data);
      },
      (err: any) => {
        msag(err);
        reject(err);
      }
    );
  });
}

/**
 * 封装put请求
 * @param url
 * @param data
 * @returns {Promise}
 */

export function put(url: string, data = {}) {
  return new Promise((resolve, reject) => {
    axios.put(url, data).then(
      (response: any) => {
        resolve(response.data);
      },
      (err: any) => {
        msag(err);
        reject(err);
      }
    );
  });
}

//统一接口处理，返回数据 {方法,URL,参数}
/**
 *
 * @param {请求方法} fecth
 * @param {地址} url
 * @param {参数} param
 * @returns
 */

type fecth = "get" | "post" | "delete" | "put";

export default function request(fecth: fecth, url: string, param: object) {
  return new Promise((resolve, reject) => {
    switch (fecth) {
      case "get": //暂时取消请求 get
        get(url, param)
          .then(function (response) {
            resolve(response);
          })
          .catch(function (error) {
            msag(error);
            console.log("get request GET failed.", error);
            reject(error);
          });
        break;
      case "post":
        post(url, param)
          .then(function (response) {
            resolve(response);
          })
          .catch(function (error) {
            console.log("get request POST failed.", error);
            reject(error);
          });
        break;
      default:
        break;
    }
  });
}

/* 错误提示 */
function msag(err: any) {
  if (err && err.response) {
    switch (err.response.status) {
      case 400:
        alert(err.response.data.error.details);
        break;
      case 401:
        alert("未授权，请登录");
        break;

      case 403:
        alert("拒绝访问");
        break;

      case 404:
        alert("请求地址出错");
        break;

      case 408:
        alert("请求超时");
        break;

      case 500:
        alert("服务器内部错误");
        break;

      case 501:
        alert("服务未实现");
        break;

      case 502:
        alert("网关错误");
        break;

      case 503:
        alert("服务不可用");
        break;

      case 504:
        alert("网关超时");
        break;

      case 505:
        alert("HTTP版本不受支持");
        break;
      default:
    }
  }
}

/**
 * 查看返回的数据
 * @param url
 * @param params
 * @param data
 */

type data = { code?: Number };

function landing(url: string, params: object, data: data) {
  let { code } = data;
  switch (code) {
    case 1:
      break;
    case 2:
      break;
    default:
      break;
  }
}
