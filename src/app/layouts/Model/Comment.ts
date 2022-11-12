export class Comment {
  constructor(
    public userId: string,
    public sectionId: number,
    public content: string|any
  ) {}
}
