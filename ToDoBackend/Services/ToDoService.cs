using ToDoBackend.Models;
using System.Linq; 

namespace ToDoBackend.Services
{
    public class ToDoService(ITimeService timeService) : IToDoService
    {
        public List<Item> Items { get; set; } = new List<Item>();

        
        public List<Item> GetAll()
        {
            return Items;
        }

        public Item Get(Guid Id)
        {
            return Items.SingleOrDefault(x => x.Id == Id) ?? throw new EntityNotFoundException(Id);
        }

        public void Delete(Guid Id)
        {
            Items.RemoveAll(x => x.Id == Id);
        }

        public Guid Insert(InsertItem command)
        {
            var item = new Item()
            {
                Id = Guid.NewGuid(),
                Name = command.Name,
                Description = command.Description,
                CreatedTime = timeService.Now,
            };
            Items.Add(item);
            return item.Id;
        }

        public void Update(UpdateItem command)
        {
            lock (Items)
            {
                var item = Items.SingleOrDefault(x => x.Id == command.Id) ?? throw new EntityNotFoundException(command.Id);
                item.Name = command.Name;
                item.Description = command.Description;
            }
        }

        public bool Toggle(Guid Id)
        {
            lock (Items)
            {
                var item = Items.SingleOrDefault(x => x.Id == Id) ?? throw new EntityNotFoundException(Id);
                item.DoneTime = item.Done ? null : timeService.Now;
                return item.Done;
            }
        }
    }
}
