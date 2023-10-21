import Base64Tool from "./base64";
import JsonFormatter from "./json-format";
import UnixTimestamp from "./unix-timestamp";
import UrlEncodeDecode from "./urlencode";

export default [
    new UnixTimestamp(),
    new JsonFormatter(),
    new Base64Tool(),
    new UrlEncodeDecode(),
];