export interface IDATA_WORK_EXPERIENCE {
  title: string;
  url: string;
  company: string;
  date: string;
  description: React.ReactNode;
  techs: {
    name: string;
    icon: string;
  }[];
}

export interface IDATA_ORGANIZATION {
  title: string;
  url: string;
  organization: string;
  date: string;
  description: React.ReactNode;
}

export interface IDATA_AWARDS {
  title: string;
  url: string;
  organization: string;
  date: string;
  description: React.ReactNode;
}
