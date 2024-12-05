import { ObjectId } from 'mongoose';
import { Sale } from 'src/sale/model/sale.model';

export interface ICreate<T> {
  create(t: T);
}
export interface IDelete {
  delete(t: string | number): void;
}

export interface IUpdate<T> {
  update(t: T, id: ObjectId);
}

export interface IFindOne<T> {
  findOne(t: string | number): Promise<T>;
}

export interface IFindAll<T> {
  findAll(): Promise<Array<T>>;
}

export interface ISaleRepository<T> extends ICreate<T>, IUpdate<T>, IFindOne<T>, IFindAll<T> {}

export interface IRepository<T> extends ICreate<T>, IUpdate<T>, IFindOne<T>, IFindAll<T>, IDelete {}
