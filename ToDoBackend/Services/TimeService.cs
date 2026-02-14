
namespace ToDoBackend.Services
{
    public class TimeService : ITimeService
    {
        public DateTime Now => DateTime.UtcNow;
    }
}
