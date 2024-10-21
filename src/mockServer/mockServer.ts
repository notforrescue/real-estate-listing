import data from './data.json'

export default [
  {
    pattern: '/api/real-estates',
    jsonBody: data,
    delay: 1000,
    // handle: (req, res) => {
    //   // to set an other status code than 200
    //   res.statusCode = 500
    // },
  },
]
