import { FamilyMember } from "./FamilyMember";
import { EducationalRecord } from "./EducationalRecord";

export class MarriageMediaRegistration {
  // Personal Information
  fullName: string;
  age: number;
  dateOfBirth: Date;
  occupation: string;
  religion: string;
  address: string;

  // Family Background
  familyMembers: FamilyMember[];

  paternalRelatives: FamilyMember[];
  maternalRelatives: FamilyMember[];
  // Educational Background
  educationalRecords: EducationalRecord[];

  // Physical Attributes
  height: number; // in centimeters
  weight: number; // in kilograms
  complexion: string;
  bloodGroup: string;
  // Marital Status
  maritalStatus: string; // e.g., Single, Divorced, Widowed

  // Preferences
  preferredEducationList: string[];
  preferredOccupationList: string[];
  preferredFamilyBackground: string;
  preferredDistricts: string[];

  // Health Status
  healthStatus: string;

  // Photographs
  photoUrls: string[];

  // Contact Information
  phoneNumber: string;
  email: string;

  facebookUrl: string;
  instaGramUrl: string;
  // Witness Information
  witnessNames: string[];
  witnessAddresses: string[];

  constructor(
    fullName: string,
    age: number,
    dateOfBirth: Date,
    occupation: string,
    religion: string,
    address: string,
    familyMembers: FamilyMember[],
    paternalRelatives: FamilyMember[],
    maternalRelatives: FamilyMember[],
    educationalRecords: EducationalRecord[],
    height: number,
    weight: number,
    complexion: string,
    bloodGroup: string,
    maritalStatus: string,
    preferredEducationList: string[],
    preferredOccupationList: string[],
    preferredFamilyBackground: string,
    preferredDistricts: string[],
    healthStatus: string,
    photoUrls: string[],
    phoneNumber: string,
    email: string,
    facebookUrl: string,
    instaGramUrl: string,
    witnessNames: string[],
    witnessAddresses: string[]
  ) {
    this.fullName = fullName;
    this.age = age;
    this.dateOfBirth = dateOfBirth;
    this.occupation = occupation;
    this.religion = religion;
    this.address = address;
    this.familyMembers = familyMembers;
    this.paternalRelatives = paternalRelatives;
    this.maternalRelatives = maternalRelatives;
    this.educationalRecords = educationalRecords;
    this.height = height;
    this.weight = weight;
    this.complexion = complexion;
    this.bloodGroup = bloodGroup;
    this.maritalStatus = maritalStatus;
    this.preferredEducationList = preferredEducationList;
    this.preferredOccupationList = preferredOccupationList;
    this.preferredFamilyBackground = preferredFamilyBackground;
    this.preferredDistricts = preferredDistricts;
    this.healthStatus = healthStatus;
    this.photoUrls = photoUrls;
    this.phoneNumber = phoneNumber;
    this.email = email;
    this.facebookUrl = facebookUrl;
    this.instaGramUrl = instaGramUrl;
    this.witnessNames = witnessNames;
    this.witnessAddresses = witnessAddresses;
  }
}
