export function encrypt(obj, salt = "NRLU") {
  obj = JSON.stringify(obj).split("");
  for (var i = 0, l = obj.length; i < l; i++)
    if (obj[i] == "{") obj[i] = "}";
    else if (obj[i] == "}") obj[i] = "{";
  let encode = encodeURI(salt + obj.join(""));
  return btoa(encode);
}

export function decrypt(obj, salt = "NRLU") {
  obj = atob(obj);
  obj = decodeURI(obj);
  if (salt && obj.indexOf(salt) != 0)
    throw new Error("object cannot be decrypted");
  obj = obj.substring(salt.length).split("");
  for (var i = 0, l = obj.length; i < l; i++)
    if (obj[i] == "{") obj[i] = "}";
    else if (obj[i] == "}") obj[i] = "{";
  return JSON.parse(obj.join(""));
}