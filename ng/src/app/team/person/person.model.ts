export interface Person {
  /** ID in system */
  Id: number;

  /** Guid will only exist in edit/admin mode */
  Guid?: string;

  /** Persons name */
  Name: string;

  /** Photo of the person */
  Photo: string;
}
