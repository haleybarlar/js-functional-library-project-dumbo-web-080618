fi = (function() {
  return {
    libraryMethod: function() {
      return 'Start by reading https://medium.com/javascript-scene/master-the-javascript-interview-what-is-functional-programming-7f218c68b3a0'
    },

    each: function(collection, callback) {
      const values = Object.values(collection)

      for (let i = 0; i < values.length; i++) {
        callback(values[i])
      }

      return collection
    },

    map: function(collection, callback) {
      let arr = []
      let values = Object.values(collection)

      for (let i = 0; i < values.length; i++) {
        arr.push(callback(values[i]))
      }

      return arr
    },

    reduce: function(collection, callback, acc) {
      acc = 0

      for (let i = 0; i < collection.length; i++) {
        acc += callback(collection[i])
      }

      return acc
    },

    functions: function() {

    },


  }
})()

fi.libraryMethod()
