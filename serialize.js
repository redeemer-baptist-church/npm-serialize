// based on https://stackoverflow.com/a/41115086/421313
const serialize = (listOfFunctions) => { // eslint-disable-line arrow-body-style
  return listOfFunctions.reduce((promise, func) => { // eslint-disable-line arrow-body-style
    return promise.then(result => func().then(Array.prototype.concat.bind(result)))
  }, Promise.resolve([]))
}

module.exports = {serialize}
