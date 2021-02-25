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
export interface BusinessUnit {
  /** The Business Unit name */
  Name: string;

  /** A short description of the BU */
  Description: string;
}
