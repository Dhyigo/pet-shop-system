using backend.Core;
using backend.Database.Models;


namespace backend.Database.Repository
{
    public class UserRepository
    {
        private readonly DatabaseContext _databaseContext;

        public UserRepository(DatabaseContext context)
        {
            _databaseContext = context;
        }

        public async Task InsertUser(Usuario user)
        {
            var salt = PasswordHasher.GenerateSalt();
            user.Senha = PasswordHasher.ComputeHash(user.Senha, salt, 3);

            await _databaseContext.AddAsync(user);

            await _databaseContext.SaveChangesAsync();
        }
    }
}
