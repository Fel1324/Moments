export interface Moment{
  id?: number;
  title: string;
  description: string;
  image: string;
  createdAt?: string;
  updatedAt?: string;
  comments?: [
    {
      username: string,
      text: string,
    }
  ]
}
