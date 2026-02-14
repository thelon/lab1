namespace ToDoBackend.Models
{
    public class EntityNotFoundException : ApplicationException 
    {
        public EntityNotFoundException(Guid Id): base($"Entity {Id} not found") { }
    }
}
