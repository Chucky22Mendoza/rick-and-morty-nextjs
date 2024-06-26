interface IResponseData {
  /**
   * Represents a property 'info' of type IInfo.
   */
  info: IInfo;
  /**
   * An array of objects representing characters, where each object conforms to the ICharacter interface.
   */
  results: ICharacter[];
}

interface IInfo {
  /**
   * Represents a property 'count' of type number.
   */
  count: number;
  /**
   * Represents a property 'pages' of type number.
   */
  pages: number;
  /**
   * Represents a property 'next' of type string or null.
   */
  next: string | null;
  /**
   * Represents a property 'prev' of type string or null.
   */
  prev: string | null;
}

interface ICharacter {
  /**
   * Represents a property 'id' of type number.
   */
  id: number;
  /**
   * Represents a property 'name' of type string.
   */
  name: string;
  /**
   * Represents a property 'status' of type string.
   */
  status: string;
  /**
   * Represents a property 'species' of type string.
   */
  species: string;
  /**
   * Represents a property 'type' of type string.
   */
  type: string;
  /**
   * Represents a property 'gender' of type string.
   */
  gender: string;
  /**
   * Represents an origin with a name and URL.
   */
  origin: IOrigin;
  /**
   * Represents a location object with a name and URL.
   */
  location: ILocation;
  /**
   * Represents a property 'image' of type string.
   */
  image: string;
  /**
   * Represents a property 'episode' of type string array in the ICharacter interface.
   */
  episode: string[];
  /**
   * Represents a property 'url' of type string.
   */
  url: string;
  /**
   * Represents a property 'created' of type string.
   */
  created: string;
}

interface IOrigin {
  /**
   * Represents a property 'name' of type string.
   */
  name: string;
  /**
   * Represents a property 'url' of type string.
   */
  url: string;
}

interface ILocation {
  /**
   * Represents a property 'name' of type string.
   */
  name: string;
  /**
   * Represents a property 'url' of type string.
   */
  url: string;
}
