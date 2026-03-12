import { IActorEditInput } from '@/screens/admin/actor/actor-edit.interface'

import { mockActorsData } from '../data/movies.data'
import { mockDelay } from '../helpers/delay'
import { generateId } from '../helpers/id-generator'
import { mockResponse } from '../helpers/response'

export const ActorMockService = {
	async getAll(searchTerm?: string) {
		await mockDelay(200)
		const actors = searchTerm
			? mockActorsData.filter((a) =>
					a.name.toLowerCase().includes(searchTerm.toLowerCase())
			  )
			: mockActorsData
		return mockResponse(actors)
	},

	async getBySlug(slug: string) {
		await mockDelay(150)
		const actor = mockActorsData.find((a) => a.slug === slug)
		if (!actor) throw new Error('Actor not found')
		return mockResponse(actor)
	},

	async getById(id: string) {
		await mockDelay(150)
		const actor = mockActorsData.find((a) => a._id === id)
		if (!actor) throw new Error('Actor not found')
		const editData: IActorEditInput = {
			name: actor.name,
			slug: actor.slug,
			photo: actor.photo,
		}
		return mockResponse(editData)
	},

	async create() {
		await mockDelay(400)
		return mockResponse(generateId())
	},

	async update(id: string, data: IActorEditInput) {
		await mockDelay(300)
		return mockResponse(id)
	},

	async delete(id: string) {
		await mockDelay(250)
		return mockResponse(id)
	},
}
