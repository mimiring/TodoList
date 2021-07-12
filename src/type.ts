import { Category, Status } from "./constants";

export type ToDo = {
  title: string;
  status: Status;
  category: Category;
  note: string;
  id: number;
};
