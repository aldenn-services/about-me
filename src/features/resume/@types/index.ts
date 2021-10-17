export type SubResume = {
  readonly id: string;
  readonly resumeId: string;
  readonly title?: string;
  readonly subTitle?: string;
  readonly dateRange?: string;
  readonly html?: string;
  readonly markdown?: string;
  readonly position: number;
  readonly type: number;
  readonly skills?: string[];
  readonly isDeleted?: number;
  readonly createdAt: Date;
  updatedAt: Date;
};

export type Resume = {
  readonly id: string;
  readonly title: string;
  readonly position: number;
  readonly isDeleted: boolean;
  readonly sections: SubResume[];
  readonly createdAt: Date;
  updatedAt: Date;
};

export enum ResumeType {
  normal = 0,
  skill = 1,
}

export const NameType: { [key: number]: string } = {
  [ResumeType.normal]: 'Normal',
  [ResumeType.skill]: 'Skill',
};
