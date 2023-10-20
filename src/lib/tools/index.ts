import Base64Tool from "./base64";
import JsonFormatter from "./json-format";
import UrlEncodeDecode from "./urlencode";

export default [
    new JsonFormatter(),
    new Base64Tool(),
    new UrlEncodeDecode(),
];