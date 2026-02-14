using ToDoBackend.Models;

namespace ToDoBackend.Services
{
    public interface IToDoService
    {
        List<Item> GetAll();
        Item Get(Guid Id);
        void Delete(Guid Id);
        Guid Insert(InsertItem command);
        void Update(UpdateItem command);
        bool Toggle(Guid Id);


    }
}