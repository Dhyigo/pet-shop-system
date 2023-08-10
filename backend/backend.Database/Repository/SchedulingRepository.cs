using backend.Database.Models;


namespace backend.Database.Repository
{
    public class SchedulingRepository
    {
        private readonly DatabaseContext _databaseContext;

        public SchedulingRepository(DatabaseContext context)
        {
            _databaseContext = context;
        }

        public async Task InsertScheduling(Agendamento scheduling)
        {
        
            await _databaseContext.AddAsync(scheduling);

            await _databaseContext.SaveChangesAsync();
        }
    }
}
