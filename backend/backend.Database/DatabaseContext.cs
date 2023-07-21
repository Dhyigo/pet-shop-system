using backend.Database.Models;
using Microsoft.EntityFrameworkCore;

namespace backend.Database
{
    public class DatabaseContext: DbContext
    {
        public DbSet<Usuario> Usuario { get; set; }
        public DbSet<Pessoa> Pessoa { get; set; }

        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            modelBuilder.Entity<Usuario>().HasIndex(u => u.Email).IsUnique();
        }
    }
}
