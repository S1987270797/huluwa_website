export const verifyPhoneWithRegExp = (text: any) => {
  const phoneReg = /^(13[0-9]|14[01456879]|15[0-35-9]|16[2567]|17[0-8]|18[0-9]|19[0-35-9])\d{8}$/;
  if (phoneReg.test(text)) {
    return 1;
  } else {
    return 0;
  }
};
