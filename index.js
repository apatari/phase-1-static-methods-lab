class Formatter {
  //add static methods here
  static capitalize(str) {
    return str[0].toUpperCase() + str.slice(1)
  }

  static sanitize(str) {
    return str.replace(/[^a-zA-Z0-9-' ]/gi, '')
  }

  static titleize(str) {
    const words = str.split(" ")
    words[0] = this.capitalize(words[0])
    const skip = {
      "the":'the',
      "a":'a',
      "an":'an',
      "but":'but',
      "of":'of',
      "and":'and',
      "for":'for',
      "at":'at',
      "by":'by',
      "from":'from'
    }
    const res = []
    for(const word of words) {
      if(!(word in skip)){
        res.push(this.capitalize(word))
      } else {
        res.push(word)
      }
    }
    return res.join(' ')
  }
}