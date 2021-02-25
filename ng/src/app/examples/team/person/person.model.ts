/*  ---------------------------------------------------------------------------
    Tutorial
    ---------------------------------------------------------------------------
    This interface describes fields which exist on data retrieved
    from the server. This ensures that you can use type-safety
    and Intelisense when coding.
    It's best-practices to use interfaces, and not classes for this.

    #ExampleData
    ---------------------------------------------------------------------------
*/
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
