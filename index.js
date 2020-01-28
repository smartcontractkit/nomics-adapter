const request = require('request')

const createRequest = (input, callback) => {
  const url = 'https://api.nomics.com/v1/currencies/ticker'
  const coin = input.data.coin || 'ETH'
  const market = input.data.market || 'USD'

  const queryObj = {
    ids: coin,
    convert: market,
    key: process.env.API_KEY
  }

  const options = {
    url: url,
    qs: queryObj,
    json: true
  }
  request(options, (error, response, body) => {
    if (error || response.statusCode >= 400 || body === []) {
      callback(response.statusCode, {
        jobRunID: input.id,
        status: 'errored',
        error: 'No results for query',
        statusCode: response.statusCode
      })
    } else {
      const result = JSON.parse(body[0].price)
      body.result = result
      callback(response.statusCode, {
        jobRunID: input.id,
        data: body,
        result: result,
        statusCode: response.statusCode
      })
    }
  })
}

exports.gcpservice = (req, res) => {
  createRequest(req.body, (statusCode, data) => {
    res.status(statusCode).send(data)
  })
}

exports.handler = (event, context, callback) => {
  createRequest(event, (statusCode, data) => {
    callback(null, data)
  })
}

exports.handlerv2 = (event, context, callback) => {
  createRequest(JSON.parse(event.body), (statusCode, data) => {
    callback(null, {
      statusCode: statusCode,
      body: JSON.stringify(data),
      isBase64Encoded: false
    })
  })
}

module.exports.createRequest = createRequest
