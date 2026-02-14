using Microsoft.AspNetCore.Mvc;
using ToDoBackend.Models;
using ToDoBackend.Services;

namespace ToDoBackend.Controllers
{
    [ApiController]
    [Route("[controller]")]
    public class ToDoController(IToDoService toDoService) :ControllerBase
    {
        [HttpGet()]
        public IEnumerable<Item> GetAll()
        {
            return toDoService.GetAll();
        }

        [HttpGet("/{Id}")]
        public Item Get(Guid Id)
        {
            return toDoService.Get(Id);
        }

        [HttpDelete]
        public void Delete(Guid Id)
        {
            toDoService.Delete(Id);
        }

        [HttpPut]
        public void Update(UpdateItem command)
        {
            toDoService.Update(command);
        }

        [HttpPost]
        public void Insert(InsertItem command)
        {
            toDoService.Insert(command);
        }
    }
}
