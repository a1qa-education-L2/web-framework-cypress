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

    static replaceCommaWithDot(string) {
      return string.replace(/,/, '.')
    }
    
    static deleteSpaces(text) {
	    return text.replace(/\s/g, '');
    }

    static format(string, word) {
      let formatted = string.replace(`{0}`, word);
      return formatted;
    }

    static getNumbersFromString(str){
      let stringWithDot = this.replaceCommaWithDot(str);
      let stringWithoutSpace = this.deleteSpaces(stringWithDot);
      let numberArray = stringWithoutSpace.match(/[+-]?\d+(\.\d+)?/g)
      let number = numberArray.map(stirng => parseFloat(stirng) );
      return Number(number.join())
    }
};