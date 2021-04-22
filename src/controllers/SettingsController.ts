import { Request, Response } from 'express'
import { getCustomRepository } from 'typeorm'
import { SettingsRepository } from '../repositories/SettingsRepository'
import { SettignsService } from '../services/SettingsService'

class SettingsController {

  async create(request: Request, response: Response) {
    const { chat, username } = request.body

    const settingsService = new SettignsService()

    try {
      const settings = await settingsService.create({ chat, username })

      return response.json(settings).send()

    } catch (error) {
      return response.status(400).json({
        message: error.message
      })
    }

  }
}

export { SettingsController }