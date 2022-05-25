module.exports = class StringUtils {

    static generateStringByLength(length) {
      let result = '';
      const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
      const charactersLength = characters.length;
      for (let i = 0; i < length; i++) {
        result += characters.charAt(Math.floor(Math.random() * charactersLength));
      }
      return result;
    }
   
    static removeAllSpacesFromString(str) {
      return str.replace(/\s/g, '');
    }

    static getNumbersFromString(str){
      let numbersArray = str.match(/[+-]?\d+(\.\d+)?/g).map(function(v) { return parseFloat(v); });
      return Number(numbersArray.join())
    }

    static replaceCommaWithDot(string) {
      return string.replace(/,/, '.')
    }

    static format(string, word) {
      let formatted = string.replace(`{0}`, word);
      return formatted;
    }
};