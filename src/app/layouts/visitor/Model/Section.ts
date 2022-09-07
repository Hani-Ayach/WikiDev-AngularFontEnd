import { Category } from './Category';
import { SectionComment } from './SectionComment';

export class Section {
  constructor(
    public SectionTitle: string,
    public SectionDescription: string,
    public CodeBlock: string,
    public Category: Category,
    public UserName: string,
    public userProfileBase64: string,
    public UserId: string,
    public DateOfPost: Date,
    public CountOfLikes: number,
    public IdOfUsersLikeThisSection: string[],
    public CountOfSave: number,
    public Comments: SectionComment[],
    public SectionBase64Photos: string[]
  ) {}
}
