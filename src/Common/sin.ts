export class Sin {
  public static readonly NONE = new Sin("Neutral", "#9f6a3a");
  public static readonly AMBER = new Sin("Amber", "#e39200");
  public static readonly AZURE = new Sin("Azure", "#40a0b4");
  public static readonly CRIMSON = new Sin("Crimson", "#9f382a");
  public static readonly INDIGO = new Sin("Indigo", "#2f5e84");
  public static readonly SCARLET = new Sin("Scarlet", "#ba531f");
  public static readonly SHAMROCK = new Sin("Shamrock", "#84992f");
  public static readonly VIOLET = new Sin("Violet", "#6e4c7e");

  private constructor(
      public readonly name: string,
      public readonly color: string) { }
}