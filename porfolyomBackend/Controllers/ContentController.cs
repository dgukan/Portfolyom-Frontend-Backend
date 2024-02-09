
using Microsoft.AspNetCore.Mvc;
using System.Net.Mime;

namespace porfolyomBackend.Controllers;

[ApiController]
[Route("[controller]")]
public class ContentController : ControllerBase
{
    //
    private readonly ILogger<ContentController> _logger;

    public ContentController(ILogger<ContentController> logger)
    {
        _logger = logger;
    }

    [HttpGet(Name = "GetContent")]
    public Content Get()
    {
        return new Content
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
                    Icon = "faLinkedin"
                },
                new Navigation
                {
                    Href = "https://github.com/dgukan",
                    Target = "git",
                    Icon = "faGithub"
                },
                new Navigation
                {
                    Href = "mailto:",
                    Target = "mail",
                    Icon = "faEnvelope"
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
    
