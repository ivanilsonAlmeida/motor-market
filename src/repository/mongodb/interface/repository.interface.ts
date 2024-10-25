import { ObjectId } from "mongoose";

export interface Repository<T> {
  create(t: T);
  update(t: T, id: ObjectId);
  delete(t: string | number);
  findOne(t: string | number);
  findAll();
}
