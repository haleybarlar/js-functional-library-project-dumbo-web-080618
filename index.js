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
      let keys = Object.keys(collection)

      for (let i = 0; i < keys.length; i++) {
        arr.push(callback(keys[i]))
      }

      return arr
    },

    reduce: function() {

    },

    functions: function() {

    },


  }
})()

fi.libraryMethod()
