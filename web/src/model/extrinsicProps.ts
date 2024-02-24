import { Config, PropsUnion } from "./sectionProps";

// eger debug  yapmak istemiyorsak diye boyle bir ozellik ekledik
// false diye her seferinde belirtmemek icin undefined da kabul ettik
// sonucta undefined da bir cesit false degil mi?
export type ExtrinsicProps = Config<PropsUnion> & {
    debug?: boolean | undefined;
} & PropsUnion;