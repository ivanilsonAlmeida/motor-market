export interface Repository<T> {
  create(t: T);
  update(t: T);
  delete(t: string | number);
  findOne(t: string | number);
  findAll();
}
