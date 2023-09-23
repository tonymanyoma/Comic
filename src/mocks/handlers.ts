import { rest } from 'msw'

export const posts = [
    {
      title: 'first comic title',
      num: 1,
      img: 'https://imgs.xkcd.com/comics/internet_argument.png',
    }
  ]
  
  export const restHandlers:Array<any> = [
    rest.get('https://xkcd.com/:id/info.0.json', (req, res, ctx) => {
      return res(ctx.status(200), ctx.json(posts))
    }),
    rest.get('http://localhost/api/:id/info.0.json', (req, res, ctx) => {
      return res(ctx.status(200), ctx.json(posts))
    }),
  ]
