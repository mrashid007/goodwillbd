export class EducationalRecord {
  institution: string;
  degree: string;
  startYear: number;
  endYear: number;
  result: string;

  constructor(
    institution: string,
    degree: string,
    startYear: number,
    endYear: number,
    result: string
  ) {
    this.institution = institution;
    this.degree = degree;
    this.startYear = startYear;
    this.endYear = endYear;
    this.result = result;
  }
}
