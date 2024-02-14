using System;
using System.Collections.Generic;
using System.Runtime.CompilerServices;

public class Content
{
    //Consturoctor yapısı

    // public Content(){} 
    // public Content(List<Section> sections,List<Navigation> navigations)
    // {
    //     this.Sections = sections;
    //     this.Navigation = navigations;
    // }
    // var c = new Content(

    //         new List<Section>{new Section{Header = "Dogukan Koc"}},
    //         new List<Navigation>{new Navigation{Logo = "Dogukan Koc"}}
        
    //     );
    
    //Bu bölüm ise aslında sitemin içerdiği kısımların bir kopyası diyebiliriz. Yazısal olarak da sitemi içeriyor aslında. Çünkü sitemde
    //Öncelikle yandaki menüde bir logo bulunuyor.

    //public List<string> Headers { get; set; } // Projelerim Ozgecmis CV

    public List<Section> Sections { get; set; }
    public List<Navigation> Navigation { get; set; }
}



