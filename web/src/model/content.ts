export default interface Content {
  Navigation: Navigation[];
  Sections: Section[];
}

export interface Navigation {
    Logo?: string;
    Href?: string;
    Text?: string;
    Target?: string;
    Icon?: string;
  }
  
export interface Section {
  Header?: string;
  Text?: string;
  Name?: string;
  Title?: string;
  Description?: string;
  Href?: string;
}

  