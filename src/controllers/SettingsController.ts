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

  async findByUsername(request: Request, response: Response) {
    const { username } = request.params

    const settingsService = new SettignsService()

    const settings = await settingsService.findByUsername(username)

    return response.json(settings)
  }

  async update(request: Request, response: Response) {
    const { username } = request.params
    const { chat } = request.body

    const settingsService = new SettignsService()

    await settingsService.update(username, chat)

    return response.send()
  }
}

export { SettingsController }