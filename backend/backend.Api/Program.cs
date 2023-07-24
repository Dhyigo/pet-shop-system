using backend.Database;
using backend.Database.Repository;
using Microsoft.EntityFrameworkCore;

var builder = WebApplication.CreateBuilder(args);
// Add services to the container.

builder.Services.AddControllers();
builder.Services.AddEndpointsApiExplorer();

// Sqlite Context
builder.Services.AddDbContext<DatabaseContext>(context => context.UseSqlite("Data Source=PetshopSystem.db"));

// Dependency Injection
builder.Services.AddScoped<UserRepository>();

var app = builder.Build();

using (var scope = app.Services.CreateScope())
{
    var db = scope.ServiceProvider.GetRequiredService<DatabaseContext>();
    db.Database.Migrate();
    db.Database.EnsureCreated();
}

app.UseAuthorization();

app.MapControllers();

app.Run();
