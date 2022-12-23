import { Category } from './Category';
import { SectionComment } from './SectionComment';

export class Section {
  constructor(
    public id:number,
    public sectionTitle: string,
    public sectionDescription: string,
    public codeBlock: string,
    public category: Category|any,
    public userName: string,
    public userProfileBase64: string,
    public userId: string,
    public dateOfPost: Date,
    public countOfLikes: number,
    public idOfUsersLikeThisSection: string[],
    public idOfUsersSaveThisSection:string[],
    public countOfSave: number,
    public comments: SectionComment[]|any,
    public sectionBase64Photos: string[]
  ) {}
}
