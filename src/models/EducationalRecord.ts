export class EducationalRecord {
  institution: string;
  degree: string;
  year: number;
  result: string;

  constructor(
    institution: string,
    degree: string,
    year: number,
    result: string
  ) {
    this.institution = institution;
    this.degree = degree;
    this.year = year;
    this.result = result;
  }
}
