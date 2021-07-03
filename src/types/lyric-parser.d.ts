declare module 'lyric-parser' {
  export type IHandler = ({ txt, lineNum }: any) => void

  export default class Lyric {
    public lines: any
    private state: any
    public curLineIndex: number
    private startStamp: number
    private timer: NodeJS.Timeout | null

    constructor(lyric: string, handler: IHandler)

    play: () => void
  }
}
