
using Microsoft.AspNetCore.Mvc;
using System.Net.Mime;

namespace porfolyomBackend.Controllers;


//annotation -> dipnot
[ApiController]
[Route("[controller]")]
//Controller -> Kumanda 
public class ContentController : ControllerBase
{
    //Class property -> Sınıf özelliği
    private readonly ILogger<ContentController> _logger;

    //Controller constructor -> Constructor -> inşa etmek - yaratmak vs
    public ContentController(ILogger<ContentController> logger)
    {
        _logger = logger;
    }

    [HttpGet(Name = "GetContent")]
    

    //Controller Action -> Metot değil fonksiyon değil -> Kumanda Eylemi
    public Content Get() //Parametre -> Model demek. Get'in içine girdiğimiz şeyler model olur ve sayfayı ona göre filtreleyebiliriz.
    {
        return new Content //Model -> 
        {
            Navigation = new List<Navigation>
            {
                new Navigation
                {
                    Logo = "Dogukan Koc",
                },
                new Navigation
                {
                    Href = "#about",
                    Text = "Hakkımda"
                },
                new Navigation
                {
                    Href = "#education",
                    Text = "Eğitim"
                },
                new Navigation
                {
                    Href = "#proje",
                    Text = "Projelerim"
                },
                new Navigation
                {
                    Href = "#cv",
                    Text = "Özgeçmiş"
                },
                // new Navigation
                // {
                //     Href = "resume.pdf", //ÖZGEÇMİŞ adında h3 tagım içinde resume.pdf var
                // },
                new Navigation
                {
                    Href = "https://www.linkedin.com/in/do%C4%9Fukan-ko%C3%A7-884758254/",
                    Target = "linkedin",
                    Icon = "fa-brands fa-linkedin"
                },
                new Navigation
                {
                    Href = "https://github.com/dgukan",
                    Target = "git",
                    Icon = "fa brands fa-Github"
                },
                new Navigation
                {
                    Href = "mailto:",
                    Target = "mail",
                    Icon = "fa-regular fa-envelope"
                }
            },

            Sections = new List<Section>
            {
                new Section
                {
                    Header = "DOGUKAN KOC",
                    Text = "BT Öğrencisi",
                },
                new Section
                {
                    Name = "About",
                    Title = "HAKKIMDA",
                    Description = "Takım çalışmasına uyum sağlama yeteneğim ve hızlı öğrenme kabiliyetim sayesinde, takım projelerine önemli katkılar sunabilirim."
                },
                new Section
                {
                    Name = "Education",
                    Title = "EĞİTİM",
                    Description = "Bilgisayar ve Öğretim Teknolojileri Eğitimi",
                    Text = "2020-2024"
                },
                new Section
                {
                    Name ="Projelerim",
                    Title = "PROJELERİM",
                    // Href = 
                    //Burada aslında href'i olan bir resim var. yani <a href="#" <img şeklinde bir dosya
                },
                new Section
                {
                    Name="Özgeçmiş",
                    Title = "ÖZGEÇMİŞ",
                    Href = "resume.pdf" //ÖZGEÇMİŞ adında h3 tagım içinde resume.pdf var
                },
                new Section
                {
                    Text = "2023, Tüm hakları saklıdır." //Footer'ımın içinde 
                }
            }

            
        };   
    }
}
    
