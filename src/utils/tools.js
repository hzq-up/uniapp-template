let tools = {}
tools.extractDecimalPart = (value, isZeroPadding = true) => {
  let inputString = typeof (value) === 'number' ? value.toString() : value;
  var dotIndex = inputString.indexOf('.');

  // 如果找到小数点
  if (dotIndex !== -1) {
    // 使用 substring 方法截取小数点后的部分
    var decimalPart = inputString.substring(dotIndex + 1);
    return decimalPart;
  } else {
    // 如果没有找到小数点，返回空字符串或其他默认值
    return isZeroPadding ? '00' : '';
  }
}

export default tools;