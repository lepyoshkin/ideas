import { initTRPC } from '@trpc/server'
import e from 'express'

const ideas = [
  { nick: 'cool-idea-1', name: 'Idea 1', description: 'Description of idea 1', likes: 0 },
  { nick: 'cool-idea-2', name: 'Idea 2', description: 'Description of idea 2', likes: 0 },
  { nick: 'cool-idea-3', name: 'Idea 3', description: 'Description of idea 3', likes: 0 },
  { nick: 'cool-idea-4', name: 'Idea 4', description: 'Description of idea 4', likes: 0 },
  { nick: 'cool-idea-5', name: 'Idea 5', description: 'Description of idea 5', likes: 0 },
]

const trpc = initTRPC.create()

export const trpcRouter = trpc.router({
  getideas: trpc.procedure.query(() => {
    return { ideas }
  }),
})

export type TrpcRouter = typeof trpcRouter
