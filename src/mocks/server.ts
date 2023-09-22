import { setupServer } from 'msw/node'
import { restHandlers } from './handlers'

// This configures a Service Worker with the given request handlers.
export const server:any = setupServer(...restHandlers)