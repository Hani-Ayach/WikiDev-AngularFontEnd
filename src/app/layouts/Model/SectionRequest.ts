import { Category } from './Category';
import { SectionComment } from './SectionComment';

export class SectionRequest {
  constructor(
    public id:number,
    public Title: string|any,
    public Description: string|any,
    public CodeBlock: string|any,
    public CategoryId: number|any,
    public ApplicationUserId: string,
    public files: any[],
  ) {}
}
