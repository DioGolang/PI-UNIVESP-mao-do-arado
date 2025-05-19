export interface ProjectProps {
  title: string;
  shortDescription: string;
  fullDescription: string;
  image: string;
  actionButton: {
    text: string;
    link: string;
  };
  createdAt: Date;
  updatedAt: Date;
}
