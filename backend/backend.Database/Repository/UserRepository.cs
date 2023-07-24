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
            await _databaseContext.AddAsync(user);
        }
    }
}
