export class FamilyMember {
  name: string;
  relation: string; // e.g., Father, Mother, Brother, Sister
  occupation: string;
  education: string;
  sequence: number;
  constructor(
    name: string,
    relation: string,
    occupation: string,
    education: string,
    sequence: number
  ) {
    this.name = name;
    this.relation = relation;
    this.occupation = occupation;
    this.education = education;
    this.sequence = sequence;
  }
}
