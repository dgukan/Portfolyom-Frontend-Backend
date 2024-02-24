// enum degerleri, element sozlugumuzun (dictionarymizin) anahtarlari niteliginde kullanabiliriz
// bu sayede, Anahtarlara statik scope (alandan) ElementType.Section gibi 
// syntaxlar ile erisebiliriz. Enum kullanimi ayni zamanda
// dictionary'de var olmayan bir elementin ordan var olmayan bir anahtar
// ile istenebilmesi olasiliginin onune gecer.
export enum DynamicElementType {
    Section = "section",
    Main = "main",
    Header = "header",
    Article = "article",
    Anchor = "anchor",
    Aside = "aside",
    Footer = "footer",
    Paragraph = "p",
    Image = 'img',
}