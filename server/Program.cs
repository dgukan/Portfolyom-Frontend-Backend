var builder = WebApplication.CreateBuilder(args);

// Add services to the container.

builder.Services.AddCors(options =>
{
  options.AddPolicy("DevelopmentPolicy", builder =>
  {
      builder.AllowAnyOrigin()
             .AllowAnyMethod()
             .AllowAnyHeader();
  });
  options.AddPolicy("ProductionPolicy", builder =>
  {
      builder.WithOrigins("https://celestialsweb.netlify.app")
          .AllowAnyHeader()
          .AllowAnyMethod();
  });

  
});

builder.Services.AddControllers();
// Learn more about configuring Swagger/OpenAPI at https://aka.ms/aspnetcore/swashbuckle
builder.Services.AddEndpointsApiExplorer();
builder.Services.AddSwaggerGen();

var app = builder.Build();

// Configure the HTTP request pipeline.
if (app.Environment.IsDevelopment())
    {
        app.UseCors("DevelopmentPolicy");
        app.UseSwagger();
        app.UseSwaggerUI();
    }
    else
    {
        app.UseCors("ProductionPolicy");
        app.UseHttpsRedirection();
    }
    app.UseSwagger();
    app.UseSwaggerUI();

app.UseHttpsRedirection();

app.UseAuthorization();

app.MapControllers();

app.Run();
