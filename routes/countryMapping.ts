/*
 * Copyright (c) 2014-2023 Bjoern Kimminich & the OWASP Juice Shop contributors.
 * SPDX-License-Identifier: MIT
 */

import { type Request, type Response } from 'express'
import logger from '../lib/logger'

module.exports = function countryMapping (config = require('config')) {
  return (req: Request, res: Response) => {
    try {
      const f1 = config.get('ctf.countryMapping')
      if (!f1) {
        throw new Error('No country mapping found!')
      } else {
        res.send(f1)
      }
    } catch (err) {
      logger.warn('Country mapping was requested but was not found in the selected config file. Take a look at the fbctf.yml config file to find out how to configure the country mappings required by FBCTF.')
      res.status(500).send()
    }
  }
}
